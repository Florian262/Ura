import os
import urllib.request
import sqlite3
import json

# Paths
DB_PATH = os.path.abspath(
    os.path.join(
        os.path.dirname(__file__),
        "../../guncel-turkce-sozluk-master/guncel-turkce-sozluk-master/sozluk/v12/v12.gts.sqlite3.db"
    )
)
DATA_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "data"))
OUTPUT_JSON = os.path.join(DATA_DIR, "filtered_tdk_words.json")

FREQUENCY_LIST_URL = "https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2016/tr/tr_50k.txt"
FREQ_FILE_TEMP = os.path.join(DATA_DIR, "tr_50k.txt")

# Ensure data directory exists
os.makedirs(DATA_DIR, exist_ok=True)

# POS mapping from Turkish TDK terms to Albanian POS names
POS_MAPPING = {
    "isim": "emër",
    "sıfat": "mbiemër",
    "fiil": "folje",
    "zarf": "ndajfolje",
    "zamir": "përemër",
    "bağlaç": "lidhëz",
    "edat": "pjesëz",
    "ünlem": "pasthirrmë",
    "ünlem kısaltması": "pasthirrmë",
    "zarf kısaltması": "ndajfolje"
}

def download_frequency_list():
    if os.path.exists(FREQ_FILE_TEMP):
        print("Frequency list already exists locally.")
        return
    print(f"Downloading frequency list from {FREQUENCY_LIST_URL}...")
    try:
        urllib.request.urlretrieve(FREQUENCY_LIST_URL, FREQ_FILE_TEMP)
        print("Download complete.")
    except Exception as e:
        print(f"Error downloading frequency list: {e}")
        raise

def load_top_freq_words():
    words = []
    with open(FREQ_FILE_TEMP, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            parts = line.split()
            if len(parts) >= 1:
                word = parts[0].lower()
                # Filter out pure numbers or single-character words
                if word.isalpha() and len(word) >= 2:
                    words.append(word)
    return words

def query_tdk_database(words_to_query):
    if not os.path.exists(DB_PATH):
        raise FileNotFoundError(f"TDK database not found at: {DB_PATH}")

    print(f"Connecting to TDK SQLite database: {DB_PATH}")
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # 1. Load entire database tables into memory dictionaries for instant lookups
    print("Loading SQLite tables into memory...")
    
    # Load madde (words)
    cursor.execute("SELECT madde_id, madde, madde_duz, lisan FROM madde")
    madde_rows = cursor.fetchall()
    madde_by_id = {}
    madde_by_name = {}
    for m_id, m_name, m_duz, lisan in madde_rows:
        meta = (m_id, m_name, lisan or "")
        madde_by_id[m_id] = meta
        # Map both exact and normalized versions
        madde_by_name[m_name.lower()] = meta
        if m_duz:
            madde_by_name[m_duz.lower()] = meta

    # Load anlam (definitions/senses)
    cursor.execute("SELECT anlam_id, madde_id, anlam, anlam_sira FROM anlam ORDER BY anlam_sira")
    anlam_rows = cursor.fetchall()
    anlam_by_madde = {}
    for anlam_id, madde_id, anlam_text, anlam_sira in anlam_rows:
        if madde_id not in anlam_by_madde:
            anlam_by_madde[madde_id] = []
        anlam_by_madde[madde_id].append((anlam_id, anlam_text))

    # Load ornek (examples)
    cursor.execute("SELECT anlam_id, ornek FROM ornek ORDER BY ornek_sira")
    ornek_rows = cursor.fetchall()
    ornek_by_anlam = {}
    for anlam_id, ornek_text in ornek_rows:
        if ornek_text:
            if anlam_id not in ornek_by_anlam:
                ornek_by_anlam[anlam_id] = []
            ornek_by_anlam[anlam_id].append(ornek_text)

    # Load ozellik (POS / Grammatical category details)
    cursor.execute("SELECT ozellik_id, tam_adi FROM ozellik")
    ozellik_rows = cursor.fetchall()
    ozellik_by_id = {o_id: tam_adi for o_id, tam_adi in ozellik_rows}

    # Load anlam_ozellik (links senses to POS)
    cursor.execute("SELECT anlam_id, ozellik_id FROM anlam_ozellik")
    ao_rows = cursor.fetchall()
    pos_by_anlam = {}
    for anlam_id, ozellik_id in ao_rows:
        if anlam_id not in pos_by_anlam:
            pos_by_anlam[anlam_id] = []
        pos_by_anlam[anlam_id].append(ozellik_id)

    conn.close()
    print("Database tables loaded in memory successfully.")

    # 2. Match the top 10,000 words
    matched_entries = []
    seen_words = set()

    print("Mapping frequency words...")
    for word in words_to_query:
        if len(matched_entries) >= 10000:
            break

        # Look up word in memory
        if word not in madde_by_name:
            continue

        madde_id, madde_name, lisan = madde_by_name[word]

        # Deduplicate words
        if madde_name.lower() in seen_words:
            continue
        seen_words.add(madde_name.lower())

        # Retrieve senses
        senses_list = anlam_by_madde.get(madde_id, [])
        if not senses_list:
            continue

        senses = []
        part_of_speech = "emër" # default fallback
        example_tr = None

        # Resolve definitions and parts of speech
        for s_idx, (anlam_id, anlam_text) in enumerate(senses_list):
            senses.append(anlam_text)

            # Get part of speech for the first sense
            if s_idx == 0:
                oz_ids = pos_by_anlam.get(anlam_id, [])
                if oz_ids:
                    # Use the first POS attribute found
                    pos_tr = ozellik_by_id.get(oz_ids[0], "").lower()
                    part_of_speech = POS_MAPPING.get(pos_tr, "emër")

            # Get the first example sentence available across any sense
            if not example_tr:
                examples_for_sense = ornek_by_anlam.get(anlam_id, [])
                if examples_for_sense:
                    example_tr = examples_for_sense[0]

        # Add formatted entry
        matched_entries.append({
            "id": f"dict-tr-{10000 + len(matched_entries)}",
            "word": madde_name,
            "pos": part_of_speech,
            "senses": senses,
            "example_tr": example_tr,
            "translation_sq": None,
            "senses_sq": [],
            "example_sq": None
        })

    print(f"Total matched entries: {len(matched_entries)}")
    return matched_entries

def main():
    download_frequency_list()
    freq_words = load_top_freq_words()
    print(f"Loaded {len(freq_words)} words from frequency list.")
    
    entries = query_tdk_database(freq_words)
    
    # Save the initial extraction
    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(entries, f, ensure_ascii=False, indent=2)
    print(f"Saved initial database to: {OUTPUT_JSON}")

if __name__ == "__main__":
    main()
