import os
import json
import glob

# Paths
PUBLIC_DICT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../public/dict"))

def clean_and_deduplicate_list(lst):
    seen = set()
    result = []
    for item in lst:
        # If item is a dictionary (like examples), serialize to check uniqueness
        if isinstance(item, dict):
            # Serialize keys in sorted order
            serialized = json.dumps(item, sort_keys=True, ensure_ascii=False)
            if serialized not in seen:
                seen.add(serialized)
                result.append(item)
        else:
            val = str(item).strip()
            if val.lower() not in seen:
                seen.add(val.lower())
                result.append(item)
    return result

def merge_entries(e1, e2):
    # Combine translations, removing duplicates
    t1 = [t.strip() for t in e1.get("translation", "").split(",")]
    t2 = [t.strip() for t in e2.get("translation", "").split(",")]
    combined_t = clean_and_deduplicate_list(t1 + t2)
    new_translation = ", ".join(combined_t)

    # Combine parts of speech
    p1 = [p.strip() for p in e1.get("pos", "").split(",")]
    p2 = [p.strip() for p in e2.get("pos", "").split(",")]
    combined_p = clean_and_deduplicate_list(p1 + p2)
    new_pos = ", ".join(combined_p)

    # Combine senses
    combined_senses = clean_and_deduplicate_list(e1.get("senses", []) + e2.get("senses", []))

    # Combine examples
    combined_examples = clean_and_deduplicate_list(e1.get("examples", []) + e2.get("examples", []))

    # Combine derivatives
    combined_derivatives = clean_and_deduplicate_list(e1.get("derivatives", []) + e2.get("derivatives", []))

    # Combine flags
    is_balkan = e1.get("is_balkan", False) or e2.get("is_balkan", False)
    is_a1 = e1.get("is_a1_vocab", False) or e2.get("is_a1_vocab", False)
    is_a2 = e1.get("is_a2_vocab", False) or e2.get("is_a2_vocab", False)

    merged = {
        "id": e1["id"], # keep the first ID
        "source": "tr",
        "word": e1["word"],
        "translation": new_translation,
        "pos": new_pos,
        "senses": combined_senses,
        "examples": combined_examples,
        "derivatives": combined_derivatives
    }

    if is_balkan:
        merged["is_balkan"] = True
    if is_a1:
        merged["is_a1_vocab"] = True
    if is_a2:
        merged["is_a2_vocab"] = True

    # Keep inflection/notes from first or combine if different
    if e1.get("inflection"):
        merged["inflection"] = e1["inflection"]
    elif e2.get("inflection"):
        merged["inflection"] = e2["inflection"]

    if e1.get("notes") and e2.get("notes") and e1["notes"] != e2["notes"]:
        merged["notes"] = f"{e1['notes']} | {e2['notes']}"
    elif e1.get("notes"):
        merged["notes"] = e1["notes"]
    elif e2.get("notes"):
        merged["notes"] = e2["notes"]

    return merged

def main():
    json_files = glob.glob(os.path.join(PUBLIC_DICT_DIR, "*.json"))
    
    total_duplicates_found = 0
    
    for filepath in json_files:
        filename = os.path.basename(filepath)
        if filename == "package.json": # avoid config if any
            continue
            
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                entries = json.load(f)
                
            if not isinstance(entries, list):
                continue
                
            # Group by word
            grouped = {}
            for entry in entries:
                word = entry.get("word", "").strip().lower()
                if not word:
                    continue
                if word not in grouped:
                    grouped[word] = []
                grouped[word].append(entry)
                
            # Deduplicate and merge
            deduplicated_entries = []
            file_duplicates = 0
            
            for word, word_entries in grouped.items():
                if len(word_entries) > 1:
                    # Merge all duplicates sequentially
                    merged = word_entries[0]
                    for other in word_entries[1:]:
                        merged = merge_entries(merged, other)
                    deduplicated_entries.append(merged)
                    file_duplicates += (len(word_entries) - 1)
                    print(f"[{filename}] Merging duplicates for word '{word}': combined into translations: '{merged['translation']}'")
                else:
                    deduplicated_entries.append(word_entries[0])
            
            if file_duplicates > 0:
                total_duplicates_found += file_duplicates
                # Write back the deduplicated list
                with open(filepath, "w", encoding="utf-8") as f:
                    json.dump(deduplicated_entries, f, ensure_ascii=False, indent=2)
                print(f"[{filename}] Saved {len(deduplicated_entries)} entries after merging {file_duplicates} duplicates.\n")
                
        except Exception as e:
            print(f"Error processing {filename}: {e}")
            
    print(f"Deduplication complete. Total duplicate entries merged: {total_duplicates_found}")

if __name__ == "__main__":
    main()
