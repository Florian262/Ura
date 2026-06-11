import { ALL_UNIFIED_LESSONS } from '../src/infrastructure/db/lessons';
import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const VOICES_DIR = path.join(__dirname, '../voices');
const OUTPUT_DIR = path.join(__dirname, '../public/audio');
const MODEL_NAME = 'tr_TR-dfki-medium.onnx';
const MODEL_PATH = path.join(VOICES_DIR, MODEL_NAME);

// Search for piper executable in local folders or PATH
function findPiperExe(): string | null {
  // Check in voices/piper_windows_amd64/piper/
  const subPiper = path.join(VOICES_DIR, 'piper_windows_amd64/piper/piper.exe');
  if (fs.existsSync(subPiper)) {
    return subPiper;
  }

  // Check in voices/
  const localPiper = path.join(VOICES_DIR, 'piper.exe');
  if (fs.existsSync(localPiper)) {
    return localPiper;
  }
  
  // Check in root directory
  const rootPiper = path.join(__dirname, '../piper.exe');
  if (fs.existsSync(rootPiper)) {
    return rootPiper;
  }

  // Check in PATH
  try {
    execSync('piper --version', { stdio: 'ignore' });
    return 'piper';
  } catch (e) {
    return null;
  }
}

async function main() {
  const piperPath = findPiperExe();
  if (!piperPath) {
    console.error(`
❌ ERROR: Piper executable not found!

To run this script, we need the Piper CLI executable.
Please ensure that the contents of the piper zip (including 'piper.exe' and all .dll files) 
are extracted to:
   Folder: ${path.join(VOICES_DIR, 'piper_windows_amd64/piper/')}
`);
    process.exit(1);
  }

  console.log(`Using Piper executable at: ${piperPath}`);
  console.log(`Using ONNX model at: ${MODEL_PATH}`);
  
  if (!fs.existsSync(MODEL_PATH)) {
    console.error(`❌ ERROR: ONNX model file not found at ${MODEL_PATH}`);
    process.exit(1);
  }

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Process A1 lessons (excluding chapter 0 which has no reading/listening text)
  const a1Lessons = ALL_UNIFIED_LESSONS.filter(l => l.level === 'A1' && l.id !== 21);

  for (const lesson of a1Lessons) {
    console.log(`\n--- Processing Level A1 Chapter ${lesson.orderIndex}: ${lesson.title.turkish} ---`);
    
    // 1. Generate Reading Dialogue/Narrative Audio
    if (lesson.reading.content && lesson.reading.content.length > 0) {
      const readingFilename = `chapter${lesson.orderIndex}_reading.wav`;
      const readingOutputPath = path.join(OUTPUT_DIR, readingFilename);
      
      // Combine dialog/narrative lines into a single text block
      const readingText = lesson.reading.content.map(c => {
        if (lesson.reading.layoutStyle === 'dialogue') {
          return `${c.speaker}: ${c.text}`;
        }
        return c.text;
      }).join(' ');

      console.log(`Generating reading audio: ${readingFilename}...`);
      try {
        // Run piper synthesis command passing the text input
        execSync(`"${piperPath}" --model "${MODEL_PATH}" --output_file "${readingOutputPath}"`, {
          input: readingText,
          encoding: 'utf-8'
        });
        console.log(`✅ Generated: ${readingOutputPath}`);
      } catch (err) {
        console.error(`❌ Failed to generate reading audio for Chapter ${lesson.orderIndex}:`, err);
      }
    }

    // 2. Generate Listening Dialogue Audio
    if (lesson.listening && lesson.listening.text) {
      const listeningFilename = `chapter${lesson.orderIndex}_listening.wav`;
      const listeningOutputPath = path.join(OUTPUT_DIR, listeningFilename);
      const listeningText = lesson.listening.text;

      console.log(`Generating listening audio: ${listeningFilename}...`);
      try {
        execSync(`"${piperPath}" --model "${MODEL_PATH}" --output_file "${listeningOutputPath}"`, {
          input: listeningText,
          encoding: 'utf-8'
        });
        console.log(`✅ Generated: ${listeningOutputPath}`);
      } catch (err) {
        console.error(`❌ Failed to generate listening audio for Chapter ${lesson.orderIndex}:`, err);
      }
    }
  }

  console.log('\n🎉 Audio generation completed!');
}

main().catch(console.error);
