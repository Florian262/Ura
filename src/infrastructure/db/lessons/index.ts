import { a1Chapter1 } from './a1_chapter1';
import type { UnifiedLesson } from './a1_chapter1';

// Skeletal placeholders for Lessons 2 through 7 (ready to be filled out later)
const a1Chapter2: UnifiedLesson = {
  id: 2,
  level: 'A1',
  orderIndex: 2,
  title: {
    turkish: 'Nerede? (Bulunma Durumu)',
    albanian: 'Ku është? (Rasa Vendore)'
  },
  reading: {
    layoutStyle: 'dialogue',
    audioAssetStub: null,
    content: [],
    questions: []
  },
  vocabulary: [],
  grammar: [],
  exercises: []
};

const a2Chapter1: UnifiedLesson = {
  id: 3,
  level: 'A2',
  orderIndex: 1,
  title: {
    turkish: 'Belirli Geçmiş Zaman (-dı)',
    albanian: 'Koha e Shkuar e Drejtpërdrejtë'
  },
  reading: {
    layoutStyle: 'narrative',
    audioAssetStub: null,
    content: [],
    questions: []
  },
  vocabulary: [],
  grammar: [],
  exercises: []
};

const b1Chapter1: UnifiedLesson = {
  id: 4,
  level: 'B1',
  orderIndex: 1,
  title: {
    turkish: 'Belirsiz Geçmiş Zaman (-miş)',
    albanian: 'Mënyra Habitore (E shkuara e pacaktuar)'
  },
  reading: {
    layoutStyle: 'narrative',
    audioAssetStub: null,
    content: [],
    questions: []
  },
  vocabulary: [],
  grammar: [],
  exercises: []
};

const b2Chapter1: UnifiedLesson = {
  id: 5,
  level: 'B2',
  orderIndex: 1,
  title: {
    turkish: 'Dilek-Şart Kipi (-se)',
    albanian: 'Fjalia Kushtore'
  },
  reading: {
    layoutStyle: 'narrative',
    audioAssetStub: null,
    content: [],
    questions: []
  },
  vocabulary: [],
  grammar: [],
  exercises: []
};

const c1Chapter1: UnifiedLesson = {
  id: 6,
  level: 'C1',
  orderIndex: 1,
  title: {
    turkish: 'Sıfat-Fiiller (Anası mezar dikecekmiş)',
    albanian: 'Pjesoret & Strukturat Letrare'
  },
  reading: {
    layoutStyle: 'narrative',
    audioAssetStub: null,
    content: [],
    questions: []
  },
  vocabulary: [],
  grammar: [],
  exercises: []
};

const c2Chapter1: UnifiedLesson = {
  id: 7,
  level: 'C2',
  orderIndex: 1,
  title: {
    turkish: 'Deyimler ve Ortak Balkan Atasözleri',
    albanian: 'Idiomat & Shprehjet e Urta Balkanike'
  },
  reading: {
    layoutStyle: 'narrative',
    audioAssetStub: null,
    content: [],
    questions: []
  },
  vocabulary: [],
  grammar: [],
  exercises: []
};

export const ALL_UNIFIED_LESSONS: UnifiedLesson[] = [
  a1Chapter1,
  a1Chapter2,
  a2Chapter1,
  b1Chapter1,
  b2Chapter1,
  c1Chapter1,
  c2Chapter1
];
