import os
import json
import urllib.request
import urllib.parse
import time

# Paths
DATA_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "data"))
INPUT_JSON = os.path.join(DATA_DIR, "filtered_tdk_words.json")

WIKIDATA_SPARQL_URL = "https://query.wikidata.org/sparql"
USER_AGENT = "UraAppDictionaryBuilder/1.0 (contact: florian.developer@example.com) Python-urllib"

def query_wikidata_batch(words_batch):
    # Construct VALUES list
    values_str = " ".join([f'"{w}"@tr' for w in words_batch])
    
    sparql_query = f"""
    SELECT ?trLabel ?sqLabel WHERE {{
      VALUES ?trLabel {{ {values_str} }}
      ?item rdfs:label ?trLabel.
      ?item rdfs:label ?sqLabel.
      FILTER(LANG(?sqLabel) = "sq")
      FILTER(LANG(?trLabel) = "tr")
    }}
    """
    
    params = {
        "query": sparql_query,
        "format": "json"
    }
    
    url = WIKIDATA_SPARQL_URL + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    
    try:
        # Added timeout=15 seconds to prevent hanging
        with urllib.request.urlopen(req, timeout=15) as response:
            data = json.loads(response.read().decode("utf-8"))
            results = data.get("results", {}).get("bindings", [])
            
            mappings = {}
            for row in results:
                tr_val = row.get("trLabel", {}).get("value", "").lower()
                sq_val = row.get("sqLabel", {}).get("value", "")
                if tr_val and sq_val:
                    if tr_val in mappings:
                        if sq_val not in mappings[tr_val]:
                            mappings[tr_val] += f", {sq_val}"
                    else:
                        mappings[tr_val] = sq_val
            return mappings
    except Exception as e:
        print(f"Wikidata request error for batch of size {len(words_batch)}: {e}", flush=True)
        return {}

def main():
    if not os.path.exists(INPUT_JSON):
        print(f"Error: {INPUT_JSON} not found. Run extract_common_words.py first.", flush=True)
        return

    with open(INPUT_JSON, "r", encoding="utf-8") as f:
        entries = json.load(f)

    print(f"Loaded {len(entries)} entries. Querying Wikidata translations...", flush=True)

    # Extract words list
    words = [e["word"].lower() for e in entries]
    
    batch_size = 200
    translations_map = {}
    
    for i in range(0, len(words), batch_size):
        batch = words[i : i + batch_size]
        print(f"Querying Wikidata for batch {i // batch_size + 1} / {len(words) // batch_size + 1} ({i} to {i + len(batch)})...", flush=True)
        
        batch_map = query_wikidata_batch(batch)
        translations_map.update(batch_map)
        
        # Sleep for 1.5 seconds between requests
        time.sleep(1.5)

    # Merge translations back into our entries
    translated_count = 0
    for entry in entries:
        w_lower = entry["word"].lower()
        if w_lower in translations_map:
            entry["translation_sq"] = translations_map[w_lower]
            translated_count += 1

    print(f"Successfully matched and translated {translated_count} / {len(entries)} words using Wikidata.", flush=True)

    # Save the updated file
    with open(INPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(entries, f, ensure_ascii=False, indent=2)
    print(f"Saved updated dictionary database to: {INPUT_JSON}", flush=True)

if __name__ == "__main__":
    main()
