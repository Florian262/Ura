import { a1Chapter1 } from './a1_chapter1';
import { a1Chapter2 } from './a1_chapter2';
import { a1Chapter3 } from './a1_chapter3';
import { a1Chapter4 } from './a1_chapter4';
import { a1Chapter5 } from './a1_chapter5';
import { a1Chapter6 } from './a1_chapter6';
import { a1Chapter7 } from './a1_chapter7';
import type { UnifiedLesson } from './a1_chapter1';

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
  a1Chapter3,
  a1Chapter4,
  a1Chapter5,
  a1Chapter6,
  a1Chapter7,
  a2Chapter1,
  b1Chapter1,
  b2Chapter1,
  c1Chapter1,
  c2Chapter1
];
