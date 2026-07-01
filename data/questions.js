// File ini bisa di-generate otomatis lewat: npm run convert -- path/ke/file.docx
// Atau diedit manual langsung di sini mengikuti struktur di bawah.
// - image: diisi path relatif ke folder /images, kosongkan "" kalau tidak ada gambar.
// - questionImages / explanationImages: array path gambar (boleh lebih dari satu / boleh kosong []).

export const questions = [
  {
    id: "Q1",
    category: "Endokrinologi",
    question: "Manakah hormon berikut yang disekresikan oleh sel beta pankreas?",
    questionImages: [],
    options: {
      A: "Glukagon",
      B: "Insulin",
      C: "Somatostatin",
      D: "Gastrin",
      E: "Kortisol",
    },
    answer: "B",
    explanation:
      "Sel beta pulau Langerhans pankreas mensekresikan insulin sebagai respons terhadap peningkatan kadar glukosa darah.",
    explanationImages: [],
  },
  {
    id: "Q2",
    category: "Endokrinologi",
    question: "Contoh soal dengan gambar (akan otomatis terisi kalau gambar ada di docx).",
    questionImages: [],
    options: {
      A: "Opsi A",
      B: "Opsi B",
      C: "Opsi C",
      D: "Opsi D",
      E: "Opsi E",
    },
    answer: "A",
    explanation: "Contoh penjelasan singkat untuk soal nomor 2.",
    explanationImages: [],
  },
];
