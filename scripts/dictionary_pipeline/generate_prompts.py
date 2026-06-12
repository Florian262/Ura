import os
import json

# Paths
DATA_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "data"))
INPUT_JSON = os.path.join(DATA_DIR, "filtered_tdk_words.json")

PROMPTS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "prompts"))
TIER1_DIR = os.path.join(PROMPTS_DIR, "tier1")
TIER2_DIR = os.path.join(PROMPTS_DIR, "tier2")

# Ensure prompt directories exist
os.makedirs(TIER1_DIR, exist_ok=True)
os.makedirs(TIER2_DIR, exist_ok=True)

TIER1_INSTRUCTION = """Ju jeni një përkthyes profesionist turqisht-shqip dhe ekspert gjuhësor.
Detyra juaj është të përktheni hyrjet e fjalorit turqisht në shqip sipas të dhënave të mëposhtme.
Ju lutem ktheni VETËM një kod JSON të pastër (pa formatim markdown, pa komente dhe pa hyrje komunikuese). Outputi duhet të jetë një Array JSON i thjeshtë që përmban objekte me çelësat e mëposhtëm:
- "id": (kopjoni ID-në e dhënë)
- "sq": (përkthimi i fjalës në shqip. Nëse jepet 'sq_base', përdoreni si pikënisje por përmirësojeni nëse ka gabime)
- "sq_def": (përkthe shpjegimin turk 'tdk_def' në shqip të rrjedhshme dhe natyrale)
- "sq_ex": (përkthe shembullin turk 'tdk_ex' në shqip, ose null nëse nuk ka shembull)

Rregullat:
1. Përkthimet duhet të jenë sa më natyrale dhe të sakta për nivelin e nxënësve të gjuhës.
2. Përkthejeni fjalën në 'sq' në mënyrë të thjeshtë (p.sh. "përvojë" ose "shok, mik").
3. Ktheni vetëm formatin e kërkuar JSON, pa asnjë tekst tjetër përpara ose pas tij.

Të dhënat për t'u përkthyer:
"""

TIER2_INSTRUCTION = """Ju jeni një përkthyes profesionist turqisht-shqip dhe ekspert gjuhësor.
Detyra juaj është të përktheni hyrjet e fjalorit turqisht në shqip sipas të dhënave të mëposhtme.
Ju lutem ktheni VETËM një kod JSON të pastër (pa formatim markdown, pa komente dhe pa hyrje komunikuese). Outputi duhet të jetë një Array JSON i thjeshtë që përmban objekte me çelësat e mëposhtëm:
- "id": (kopjoni ID-në e dhënë)
- "sq": (përkthimi i fjalës në shqip. Nëse jepet 'sq_base', përdoreni si pikënisje por përmirësojeni ose zgjerojeni nëse ka gabime)
- "sq_def": (përkthe shpjegimin turk 'tdk_def' në një fjali të vetme të thjeshtë dhe të qartë në shqip)

Rregullat:
1. Mbajeni shpjegimin 'sq_def' të thjeshtë, të shkurtër dhe të qartë (1 fjali e shkurtër).
2. Ktheni vetëm formatin e kërkuar JSON, pa asnjë tekst tjetër përpara ose pas tij.

Të dhënat për t'u përkthyer:
"""

def generate_tier1_prompts(entries):
    # Tier 1 covers the first 2,000 words (A1-A2)
    tier1_entries = entries[:2000]
    batch_size = 100 # 100 words per prompt
    
    print(f"Generating {len(tier1_entries) // batch_size} prompts for Tier 1...")
    
    for idx in range(0, len(tier1_entries), batch_size):
        batch = tier1_entries[idx : idx + batch_size]
        batch_num = idx // batch_size + 1
        
        prompt_data = []
        for e in batch:
            # Use the first sense as main definition
            def_tr = e["senses"][0] if e["senses"] else ""
            prompt_data.append({
                "id": e["id"],
                "tr": e["word"],
                "pos": e["pos"],
                "tdk_def": def_tr,
                "tdk_ex": e["example_tr"],
                "sq_base": e["translation_sq"]
            })
            
        prompt_content = TIER1_INSTRUCTION + json.dumps(prompt_data, ensure_ascii=False, indent=2)
        
        prompt_file = os.path.join(TIER1_DIR, f"prompt_tier1_batch_{batch_num:02d}.txt")
        with open(prompt_file, "w", encoding="utf-8") as f:
            f.write(prompt_content)
            
    print(f"Tier 1 prompts generated in {TIER1_DIR}")

def generate_tier2_prompts(entries):
    # Tier 2 covers the remaining 8,000 words (B1-B2)
    tier2_entries = entries[2000:10000]
    batch_size = 400 # 400 words per prompt is very manageable for simplified data
    
    print(f"Generating {len(tier2_entries) // batch_size} prompts for Tier 2...")
    
    for idx in range(0, len(tier2_entries), batch_size):
        batch = tier2_entries[idx : idx + batch_size]
        batch_num = idx // batch_size + 1
        
        prompt_data = []
        for e in batch:
            def_tr = e["senses"][0] if e["senses"] else ""
            prompt_data.append({
                "id": e["id"],
                "tr": e["word"],
                "pos": e["pos"],
                "tdk_def": def_tr,
                "sq_base": e["translation_sq"]
            })
            
        prompt_content = TIER2_INSTRUCTION + json.dumps(prompt_data, ensure_ascii=False, indent=2)
        
        prompt_file = os.path.join(TIER2_DIR, f"prompt_tier2_batch_{batch_num:02d}.txt")
        with open(prompt_file, "w", encoding="utf-8") as f:
            f.write(prompt_content)
            
    print(f"Tier 2 prompts generated in {TIER2_DIR}")

def main():
    if not os.path.exists(INPUT_JSON):
        print(f"Error: {INPUT_JSON} not found. Run extract_common_words.py first.")
        return

    with open(INPUT_JSON, "r", encoding="utf-8") as f:
        entries = json.load(f)

    if len(entries) < 10000:
        print(f"Warning: Expected 10,000 entries, but found only {len(entries)}. Generating prompts for what is available.")

    generate_tier1_prompts(entries)
    generate_tier2_prompts(entries)

if __name__ == "__main__":
    main()
