## Anggota Kelompok
Pryta Rosela (2208107010046)
Widya Nurul Sukma (2208107010054)
Mila Lestari (2208107010002)

# Aplikasi Daftar Buku dengan AdonisJS

Aplikasi web sederhana untuk mengelola daftar buku menggunakan AdonisJS framework. Aplikasi ini dibuat untuk memenuhi Tugas 7 dengan implementasi form, database, tampilan data, dan flash message.

## Fitur

- Form untuk menambahkan buku baru
- Validasi input dengan pesan error
- Penyimpanan data ke database SQLite
- Menampilkan daftar buku yang telah ditambahkan
- Flash message untuk notifikasi sukses

## Teknologi yang Digunakan

- AdonisJS 5 (Framework TypeScript untuk Node.js)
- Edge Template Engine
- SQLite Database
- Bootstrap 5 (Styling)

## Instalasi & Penggunaan

### Prasyarat
- Node.js (v14 atau lebih baru)
- npm (v6 atau lebih baru)

### Langkah Instalasi

1. Clone repository ini
   ```bash
   git clone https://github.com/username/daftar-buku-adonisjs.git
   cd daftar-buku-adonisjs
   ```

2. Install dependensi
   ```bash
   npm install
   ```

3. Copy file .env.example menjadi .env
   ```bash
   cp .env.example .env
   ```

4. Generate application key
   ```bash
   node ace generate:key
   ```

5. Jalankan migrasi database
   ```bash
   node ace migration:run
   ```

6. Jalankan aplikasi
   ```bash
   node ace serve --watch
   ```

7. Buka aplikasi di browser: http://localhost:3333

## Struktur Aplikasi

```
daftar-buku/
├── app/
│   ├── Controllers/
│   │   └── Http/
│   │       └── BukuController.ts    # Controller untuk menangani CRUD buku
│   └── Models/
│       └── Buku.ts                  # Model Buku
├── database/
│   └── migrations/
│       └── xxx_bukus.ts            # Migration untuk tabel buku
├── resources/
│   └── views/
│       ├── buku/
│       │   ├── create.edge          # Form untuk tambah buku
│       │   └── index.edge           # Halaman utama daftar buku
│       └── layouts/
│           └── main.edge            # Layout utama
├── start/
│   └── routes.ts                    # Konfigurasi routes
└── .env                             # Environment variables
```

## Penjelasan Kode

### 1. Membuat Form di View (HTML)
- Form dibuat menggunakan Edge template engine
- Form memiliki validasi client-side dengan atribut required
- CSRF protection diaktifkan

### 2. Menangani Form Submission di Controller
- Validasi data input dengan schema validator
- Menampilkan pesan error jika validasi gagal
- Menyimpan data valid ke database

### 3. Menyimpan Data ke Database
- Menggunakan Lucid ORM untuk interaksi dengan database
- Data disimpan ke tabel 'bukus'

### 4. Menampilkan Data yang Baru Disimpan
- Data diambil dari database dan ditampilkan di halaman index
- Menggunakan card layout untuk menampilkan setiap buku

### 5. Redirect dan Flash Message
- Flash message ditampilkan setelah berhasil menyimpan data
- Redirect ke halaman index setelah form berhasil disubmit

## Kontribusi

Kontribusi selalu disambut! Jika Anda menemukan bug atau ingin menambahkan fitur baru:

1. Fork repositori ini
2. Buat branch baru (`git checkout -b fitur-baru`)
3. Commit perubahan Anda (`git commit -m 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## Tampilan Website
![image](https://github.com/user-attachments/assets/9b764902-099f-4347-a505-d62e26ed2c9a)
![image](https://github.com/user-attachments/assets/c50d7990-c7e2-4458-8c6a-f612ebe11d71)


## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).
