export interface GlossaryEntry {
  root: string;
  translation: string;
  explanation?: string;
}

export type ReadingGlossary = Record<number, Record<string, GlossaryEntry>>;

export const readingGlossary: ReadingGlossary = {
  // Chapter 1: Tanışma ve Çoğul Eki (Përshëndetjet & Shumësi)
  1: {
    "benim": { root: "ben", translation: "im / e imja", explanation: "Përemër pronor (i imi)" },
    "adım": { root: "ad", translation: "emri im", explanation: "ad (emër) + ım (pronor: im)" },
    "senin": { root: "sen", translation: "yt / e jotja", explanation: "Përemër pronor (i yti)" },
    "adın": { root: "ad", translation: "emri yt", explanation: "ad (emër) + ın (pronor: yt)" },
    "nasılsın": { root: "nasıl", translation: "si je?", explanation: "nasıl (si) + sın (prapashtesë pyetëse: je)" },
    "oldum": { root: "olmak", translation: "u bëra", explanation: "ol- (bëhem) + du (koha e shkuar) + m (unë)" },
    "iyiyim": { root: "iyi", translation: "jam mirë", explanation: "iyi (mirë) + y (zanore ndihmëse) + im (unë jam)" },
    "ederim": { root: "etmek", translation: "bëj", explanation: "et- (bëj) + er (koha e gjerë) + im (unë)" },
    "nerelisin": { root: "nere", translation: "nga je?", explanation: "nere (ku) + li (prejardhje: nga) + sin (unë/ti: je)" },
    "arnavutum": { root: "Arnavut", translation: "jam shqiptar/e", explanation: "Arnavut (Shqiptar) + um (unë jam)" },
    "tiranlıyım": { root: "Tiran", translation: "jam nga Tirana", explanation: "Tiran (Tirana) + lı (nga) + yım (unë jam)" },
    "türküm": { root: "Türk", translation: "jam turk", explanation: "Türk (Turk) + üm (unë jam)" },
    "istanbulluyum": { root: "İstanbul", translation: "jam nga Stambolli", explanation: "İstanbul (Stamboll) + lu (nga) + yum (unë jam)" },
    "görüşürüz": { root: "görüşmek", translation: "shihemi", explanation: "görüş- (takohem) + ür (koha e gjerë) + üz (ne)" },
    "kendine": { root: "kendi", translation: "vetes tënde", explanation: "kendi (vetvete) + n (tënde) + e (dative: drejt)" },
    "görüşmek": { root: "Görüşmek üzere", translation: "shihemi së shpejti", explanation: "Shprehje idiomative: Görüşmek üzere (Shihemi së shpejti)" },
    "üzere": { root: "Görüşmek üzere", translation: "shihemi së shpejti", explanation: "Shprehje idiomative: Görüşmek üzere (Shihemi së shpejti)" },
    "teşekkür": { root: "Teşekkürler", translation: "faleminderit", explanation: "teşekkür (faleminderit) + ler (shumës)" }
  }
};
