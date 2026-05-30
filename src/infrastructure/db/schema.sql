-- SQLite / SQLCipher Relational Database Schema
-- Offline Albanian-Turkish Language Learning Framework

-- 1. Chapter Root Definition Table
CREATE TABLE IF NOT EXISTS chapters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    level TEXT NOT NULL,                  -- Valid Enum Bounds: 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'
    order_index INTEGER NOT NULL,         -- Strict sequencing index within a given level
    title_albanian TEXT NOT NULL,         -- e.g., 'Prezantimi dhe Shumësi'
    title_turkish TEXT NOT NULL,          -- e.g., 'Tanışma ve Çoğul Eki'
    UNIQUE(level, order_index)
);

-- 2. Reading Texts & Dialogue Schemas
CREATE TABLE IF NOT EXISTS reading_blocks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chapter_id INTEGER NOT NULL,
    layout_style TEXT NOT NULL,           -- Enum types: 'dialogue', 'narrative', 'blog_post'
    content_turkish TEXT NOT NULL,        -- Complete source text string (JSON or structured text)
    content_albanian TEXT NOT NULL,       -- Paired translation payload (JSON or structured text)
    audio_asset_stub TEXT,                -- Preconfigured path slot for future media integration
    FOREIGN KEY(chapter_id) REFERENCES chapters(id) ON DELETE CASCADE
);

-- 3. Reading Comprehension Questions
CREATE TABLE IF NOT EXISTS reading_questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    reading_block_id INTEGER NOT NULL,
    question_turkish TEXT NOT NULL,
    question_albanian TEXT NOT NULL,
    options_json TEXT NOT NULL,           -- Encoded array string: ["Option A", "Option B", "Option C"]
    correct_index INTEGER NOT NULL,       -- Targeted array tracking identifier index
    FOREIGN KEY(reading_block_id) REFERENCES reading_blocks(id) ON DELETE CASCADE
);

-- 4. Vocabulary Matrix Table
CREATE TABLE IF NOT EXISTS vocabulary (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chapter_id INTEGER NOT NULL,
    turkish_word TEXT NOT NULL,
    albanian_word TEXT NOT NULL,
    is_shared_balkan_word INTEGER DEFAULT 0, -- Boolean structural flag override (1 = yes, 0 = no)
    notes_albanian TEXT,
    audio_asset_stub TEXT,
    FOREIGN KEY(chapter_id) REFERENCES chapters(id) ON DELETE CASCADE
);

-- 5. Segmented Grammar Carousel Step Records
CREATE TABLE IF NOT EXISTS grammar_cards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chapter_id INTEGER NOT NULL,
    step_order INTEGER NOT NULL,          -- Controls horizontal slider view rendering sequencing
    title_albanian TEXT NOT NULL,
    rule_concept_turkish TEXT NOT NULL,   -- Structural display rule
    explanation_albanian TEXT NOT NULL,   -- Step body narrative
    interactive_example_json TEXT,        -- Structured context mapping rules: {"root": "git", "suffix": "iyor", "result": "gidiyor"}
    FOREIGN KEY(chapter_id) REFERENCES chapters(id) ON DELETE CASCADE
);

-- 6. Interactive Exercise Specification Master Table
CREATE TABLE IF NOT EXISTS exercises (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chapter_id INTEGER NOT NULL,
    exercise_type TEXT NOT NULL,          -- Enum keys: 'MULTIPLE_CHOICE', 'WORD_SORT', 'SUFFIX_BUILDER'
    prompt_albanian TEXT NOT NULL,        -- Instruction string text
    source_payload_json TEXT NOT NULL,    -- Declarative schema parameters matching layout needs
    validation_target_json TEXT NOT NULL, -- Target solution matrices used by verification runtime
    FOREIGN KEY(chapter_id) REFERENCES chapters(id) ON DELETE CASCADE
);

-- 7. Secure Local User Progress & State Engine Serialization
CREATE TABLE IF NOT EXISTS user_progress (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chapter_id INTEGER UNIQUE NOT NULL,
    is_completed INTEGER DEFAULT 0,
    last_accessed_timestamp INTEGER NOT NULL,
    last_viewed_section TEXT NOT NULL,    -- Tracks active tab anchor coordinate state preservation
    carousel_grammar_step INTEGER DEFAULT 0, -- Preserves exact index location inside grammar sliders
    writing_validation_preference TEXT,   -- Stores 'SELF_CHECK' or 'STRICT' validation choices
    FOREIGN KEY(chapter_id) REFERENCES chapters(id) ON DELETE CASCADE
);
