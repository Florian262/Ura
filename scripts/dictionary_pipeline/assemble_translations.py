import os
import json
import glob

# Paths
DATA_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "data"))
INPUT_JSON = os.path.join(DATA_DIR, "filtered_tdk_words.json")

RESPONSES_DIRS = [
    os.path.abspath(os.path.join(os.path.dirname(__file__), "responses")),
    os.path.abspath(os.path.join(os.path.dirname(__file__), "../../Responses"))
]
PUBLIC_DICT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../public/dict"))

def get_letter_file(word):
    if not word:
        return 'a'
    first_char = word.strip().lower()[0]
    if first_char == 'ç':
        return 'c'
    elif first_char == 'ğ':
        return 'g'
    elif first_char == 'ı':
        return 'i'
    elif first_char == 'ö':
        return 'o'
    elif first_char == 'ş':
        return 's'
    elif first_char == 'ü':
        return 'u'
    
    if first_char.isalpha():
        return first_char
    return 'a'

def load_responses():
    translated_data = {}
    response_files = []
    for r_dir in RESPONSES_DIRS:
        if os.path.exists(r_dir):
            response_files.extend(glob.glob(os.path.join(r_dir, "*.json")))
            
    print(f"Found {len(response_files)} response files in configured directories...")
    
    for filepath in response_files:
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                data = json.load(f)
                if not isinstance(data, list):
                    print(f"Warning: File {os.path.basename(filepath)} does not contain a list. Skipping.")
                    continue
                for item in data:
                    item_id = item.get("id")
                    if item_id:
                        translated_data[item_id] = item
        except Exception as e:
            print(f"Error reading response file {filepath}: {e}")
            
    print(f"Loaded translations for {len(translated_data)} items from files.")
    return translated_data

def main():
    if not os.path.exists(INPUT_JSON):
        print(f"Error: {INPUT_JSON} not found. Run extract_common_words.py first.")
        return

    with open(INPUT_JSON, "r", encoding="utf-8") as f:
        entries = json.load(f)

    translations = load_responses()
    
    merged_entries = []
    skipped_count = 0
    
    print("Merging translations with database...")
    for entry in entries:
        item_id = entry["id"]
        
        # Merge LLM translation if available
        if item_id in translations:
            llm_item = translations[item_id]
            translation_sq = llm_item.get("sq")
            senses_sq = [llm_item.get("sq_def")] if llm_item.get("sq_def") else []
            example_sq = llm_item.get("sq_ex")
        else:
            # Fall back to Wikidata translation if available, or skip if no translation exists
            translation_sq = entry.get("translation_sq")
            senses_sq = []
            example_sq = None
            
        if not translation_sq:
            skipped_count += 1
            continue # We only compile words that actually have an Albanian translation
            
        examples_list = []
        if entry.get("example_tr") and example_sq:
            examples_list.append({
                "source": entry["example_tr"],
                "target": example_sq
            })

        # Format according to current application DictionaryEntry schema
        formatted_entry = {
            "id": entry["id"],
            "source": "tr",
            "word": entry["word"],
            "translation": translation_sq,
            "pos": entry["pos"],
            "senses": senses_sq if senses_sq else [f"Përkthim për fjalën '{entry['word']}'."],
            "examples": examples_list,
            "derivatives": []
        }
        
        merged_entries.append(formatted_entry)
        
    print(f"Merged {len(merged_entries)} entries. Skipped {skipped_count} untranslated entries.")

    # Sort alphabetically by Turkish word
    merged_entries.sort(key=lambda x: x["word"].lower())

    # Group by first letter
    grouped_entries = {}
    for entry in merged_entries:
        letter = get_letter_file(entry["word"])
        if letter not in grouped_entries:
            grouped_entries[letter] = []
        grouped_entries[letter].append(entry)

    # Write each chunk to its corresponding public JSON file
    print(f"Writing compiled dictionary chunks to {PUBLIC_DICT_DIR}...")
    
    # Ensure public dictionary folder exists
    os.makedirs(PUBLIC_DICT_DIR, exist_ok=True)
    
    # We clear out old files or overwrite them
    for letter, letter_entries in grouped_entries.items():
        output_file = os.path.join(PUBLIC_DICT_DIR, f"{letter}.json")
        with open(output_file, "w", encoding="utf-8") as f:
            json.dump(letter_entries, f, ensure_ascii=False, indent=2)
        print(f"  Wrote {len(letter_entries)} entries to {letter}.json ({os.path.getsize(output_file)} bytes)")

    print("Dictionary compile and assembly complete!")

if __name__ == "__main__":
    main()
