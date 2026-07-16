# 🍿 MaySnack

## Deskripsi

MaySnack merupakan website e-commerce sederhana yang menjual berbagai camilan seperti keripik, biskuit, kacang, dan permen. Website ini dibuat menggunakan HTML, CSS, dan JavaScript tanpa framework sehingga mudah dipahami dan dijalankan.

---

# Fitur

## 👤 User

- Melihat daftar produk
- Mencari produk berdasarkan nama
- Filter kategori
- Mengurutkan produk berdasarkan harga dan nama
- Detail produk (Modal)
- Menambahkan produk ke keranjang
- Checkout
- Login & Logout
- Riwayat Pesanan
- Memberikan ulasan produk

## 👨‍💼 Admin

- Login Admin
- Dashboard Admin
- Melihat daftar produk
- Mengubah stok produk
- Menghapus produk
- Stok otomatis tersimpan menggunakan LocalStorage
- Stok produk berkurang ketika pelanggan melakukan pembelian
- Sinkronisasi stok antara Dashboard Admin dan Halaman Utama

---

# Teknologi

- HTML5
- CSS3
- JavaScript (Vanilla)
- LocalStorage
- Google Analytics (Dummy)

---

# SEO

Website menggunakan:

- Meta viewport
- Title Website
- Struktur heading
- Nama file gambar yang jelas
- Alt Image
- Keyword produk camilan

---

# Analytics

Menggunakan simulasi Google Analytics:

- Melihat event Login
- Tambah ke Keranjang
- Checkout
- Pembelian

---

# Cara Menjalankan

1. Download project
2. Buka menggunakan Visual Studio Code
3. Install Live Server
4. Klik Go Live
5. Website siap digunakan

---

# Struktur Project
MaySnack/
│
├── admin.html                # Dashboard Admin
├── cart.html                 # Keranjang Belanja
├── checkout.html             # Halaman Checkout
├── customers.html            # Data Pelanggan
├── index.html                # Halaman Utama
├── login.html                # Login
├── manage-product.html       # Kelola Produk & Stok
├── orders.html               # Riwayat Pesanan
├── profile.html              # Profil Pengguna
├── register.html             # Registrasi
├── success.html              # Checkout Berhasil
├── README.md
│
├── css/
│   ├── admin.css
│   ├── customers.css
│   ├── login.css
│   ├── manage-product.css
│   ├── profile.css
│   ├── register.css
│   ├── responsive.css
│   └── style.css
│
├── js/
│   ├── admin.js
│   ├── app.js
│   ├── cart.js
│   ├── checkout.js
│   ├── customers.js
│   ├── login.js
│   ├── manage-product.js
│   ├── orders.js
│   ├── products.js
│   ├── profile.js
│   ├── register.js
│   └── review.js
│
└── images/
    ├── payment/
    │   ├── bca.png
    │   ├── cod.png
    │   ├── dana.png
    │   ├── gopay.png
    │   ├── mandiri.png
    │   ├── ovo.png
    │   ├── qris.png
    │   └── shopeepay.png
    │
    ├── basreng.jpg
    ├── cookies.jpg
    ├── hero.jpg
    ├── kacang.jpg
    ├── makaroni.jpg
    ├── permen.jpg
    ├── pisang-coklat.jpg
    ├── popcorn.jpg
    ├── stik-keju.jpg
    ├── wafer.jpg
    └── singkong-balado.jpg
# Alur Website

1. Pengguna membuka halaman utama.
2. Pengguna login atau register.
3. Pengguna mencari dan memilih produk.
4. Produk dapat dilihat detailnya.
5. Produk ditambahkan ke keranjang.
6. Stok produk otomatis berkurang setelah pembelian.
7. Pengguna melakukan checkout.
8. Pengguna memilih metode pembayaran.
9. Pesanan berhasil dibuat.
10. Admin dapat melihat pesanan, pelanggan, serta mengelola produk dan stok.

## Fitur Website

- Login & Register User
- Dashboard Admin
- CRUD Produk
- Manajemen Stok Produk
- Pencarian Produk
- Filter & Sorting Produk
- Detail Produk (Modal)
- Keranjang Belanja
- Checkout
- Berbagai Metode Pembayaran (QRIS, DANA, OVO, GoPay, ShopeePay, Transfer Bank, COD)
- Riwayat Pesanan
- Halaman Profil
- Responsive Design
- Review Produk
- Penyimpanan data menggunakan LocalStorage