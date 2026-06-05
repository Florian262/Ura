import { a1Chapter0 } from './a1_chapter0';
import { a1Chapter1 } from './a1_chapter1';
import { a1Chapter2 } from './a1_chapter2';
import { a1Chapter3 } from './a1_chapter3';
import { a1Chapter4 } from './a1_chapter4';
import { a1Chapter5 } from './a1_chapter5';
import { a1Chapter6 } from './a1_chapter6';
import { a1Chapter7 } from './a1_chapter7';
import { a1Chapter8 } from './a1_chapter8';
import { a2Chapter1 } from './a2_chapter1';
import { a2Chapter2 } from './a2_chapter2';
import { a2Chapter3 } from './a2_chapter3';
import { a2Chapter4 } from './a2_chapter4';
import { a2Chapter5 } from './a2_chapter5';
import { a2Chapter6 } from './a2_chapter6';
import { a2Chapter7 } from './a2_chapter7';
import { a2Chapter8 } from './a2_chapter8';
import { b1Chapter1 } from './b1_chapter1';
import { b1Chapter2 } from './b1_chapter2';
import { b1Chapter3 } from './b1_chapter3';
import { b1Chapter4 } from './b1_chapter4';
import type { UnifiedLesson } from './a1_chapter1';

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
  a1Chapter0,
  a1Chapter1,
  a1Chapter2,
  a1Chapter3,
  a1Chapter4,
  a1Chapter5,
  a1Chapter6,
  a1Chapter7,
  a1Chapter8,
  a2Chapter1,
  a2Chapter2,
  a2Chapter3,
  a2Chapter4,
  a2Chapter5,
  a2Chapter6,
  a2Chapter7,
  a2Chapter8,
  b1Chapter1,
  b1Chapter2,
  b1Chapter3,
  b1Chapter4,
  b2Chapter1,
  c1Chapter1,
  c2Chapter1
];
