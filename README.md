# Quiz App

Quiz app statis (HTML/JS) + script konversi otomatis soal dari file `.docx`
(termasuk gambar soal & gambar penjelasan) ke `data/questions.js`.

## Struktur project

```
quiz-project/
├─ index.html          <- buka file ini untuk main quiz-nya
├─ data/
│  └─ questions.js      <- sumber soal (bisa hasil konversi docx, bisa diedit manual)
├─ images/               <- gambar hasil ekstrak otomatis dari docx
├─ scripts/
│  └─ convert-docx.js   <- script konversi docx -> questions.js
└─ package.json
```

## Cara pakai

### 1. Edit manual (tanpa docx)
Buka `data/questions.js`, tambah/edit object di array `questions` sesuai contoh
yang sudah ada. Taruh gambar di folder `images/` lalu isi path-nya
(misal `"images/img-001.png"`) di `questionImages` / `explanationImages`.

### 2. Konversi otomatis dari .docx
```bash
npm install
npm run convert -- path/ke/file-soal.docx
```
Script akan:
- Mengekstrak semua gambar di docx ke folder `images/`
- Membaca teks soal dan menyusunnya jadi `data/questions.js`
- Otomatis menempatkan gambar yang muncul tepat di bawah teks soal sebagai
  gambar soal, dan gambar yang muncul di blok penjelasan sebagai gambar
  penjelasan

### 3. Buka quiz
Tinggal buka `index.html` di browser (atau host sebagai static site /
GitHub Pages). Tidak perlu server backend.

## Format wajib di dalam file .docx

Supaya parser bisa membaca soal secara otomatis, tulis soal di Word dengan
pola berikut (boleh selang-seling antar paragraf seperti biasa kamu ngetik):

```
1. Pertanyaan soal di sini, boleh lebih dari satu baris.
[taruh gambar soal di sini kalau ada, langsung sebagai gambar terpisah
 di paragraf baru sebelum opsi A]
A. Opsi A
B. Opsi B
C. Opsi C
D. Opsi D
E. Opsi E
Kunci: C
Penjelasan: Teks penjelasan jawaban di sini.
[taruh gambar penjelasan di sini kalau ada]

2. Soal berikutnya...
```

Aturan detail:
- **Nomor soal**: paragraf harus diawali `1.` `2.` dst (angka + titik/kurung).
  Ini jadi penanda mulainya soal baru.
- **ID custom (opsional)**: kalau mau ID soal bukan `Q1, Q2, ...` otomatis,
  taruh baris `ID: nama-id-kamu` tepat sebelum nomor soal.
- **Opsi**: paragraf diawali `A.` sampai `E.` (titik atau kurung tutup boleh).
- **Kunci jawaban**: baris `Kunci: X` atau `Jawaban: X` (X = huruf opsi yang benar).
- **Penjelasan**: baris `Penjelasan: ...`. Semua paragraf setelahnya (sampai
  ketemu nomor soal berikutnya) dianggap masih bagian penjelasan.
- **Gambar**: taruh gambar tepat di posisi yang kamu mau — kalau diletakkan
  sebelum baris opsi A, dianggap gambar soal; kalau diletakkan setelah baris
  "Penjelasan:", dianggap gambar penjelasan. Boleh lebih dari satu gambar
  per soal/penjelasan.
- **Kategori**: ada 2 cara, pilih salah satu.
  1. Pakai *Style* "Heading 1/2/3" beneran di Word untuk judul bab (misal
     "Endokrinologi", "Kardiovaskular"). Semua soal di bawah heading itu
     otomatis ke-tag kategori tersebut sampai ketemu heading lain — ini cara
     yang paling natural kalau docx kamu memang sudah dipisah per bab.
  2. Atau tulis manual paragraf `Kategori: nama kategori` tepat sebelum
     nomor soal (tanpa perlu Style Heading).

  Kategori ini muncul di app sebagai dropdown filter, jadi soal bisa
  difilter per bab/kategori sebelum mulai quiz.

Kalau docx kamu sudah pakai format mirip ini (seperti soal UB / OSCE kamu
biasanya), tinggal jalankan script-nya, harusnya langsung kebaca. Kalau hasil
konversi ada soal yang kosong/aneh, biasanya karena ada baris yang sedikit
menyimpang dari pola di atas (misal "Soal 1." bukan "1.") — tinggal disamakan
formatnya di docx lalu jalankan ulang scriptnya.

## Mode quiz
Ada 2 mode yang bisa dipilih dari dropdown di app:
- **Mode Ujian**: jawaban & penjelasan baru muncul di ringkasan akhir setelah
  semua soal selesai dijawab.
- **Mode Latihan**: begitu pilih opsi, langsung kelihatan benar/salah +
  penjelasan & gambar penjelasan.

## Upload ke GitHub
```bash
git init
git add .
git commit -m "Quiz app + docx converter"
git remote add origin <url-repo-kamu>
git push -u origin main
```
Setelah itu bisa diaktifkan GitHub Pages (Settings → Pages → branch main /
root) supaya quiz-nya bisa diakses langsung lewat link, tanpa perlu download.
