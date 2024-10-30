// Array untuk menyimpan daftar buku
let books = [];

// Fungsi untuk menambahkan buku baru
function addBook() {
    const judul = document.getElementById("judul").value;
    const penulis = document.getElementById("penulis").value;
    const tahun = document.getElementById("tahun").value;
    const selesaiDibaca = document.getElementById("selesai-dibaca").checked;

    // Membuat objek buku baru
    const book = {
        id: Date.now(),
        judul,
        penulis,
        tahun,
        selesaiDibaca
    };

    // Menambahkan buku ke array dan memperbarui tampilan
    books.push(book);
    displayBooks();
    clearForm();
}

// Fungsi untuk membersihkan form setelah menambahkan buku
function clearForm() {
    document.getElementById("judul").value = "";
    document.getElementById("penulis").value = "";
    document.getElementById("tahun").value = "";
    document.getElementById("selesai-dibaca").checked = false;
}

// Fungsi untuk menampilkan buku pada UI
function displayBooks() {
    const belumSelesaiDibacaList = document.querySelector(".section:nth-child(5)");
    const selesaiDibacaList = document.querySelector(".section:nth-child(6)");

    // Kosongkan daftar sebelum menambahkan elemen baru
    belumSelesaiDibacaList.innerHTML = "<h2>Belum selesai dibaca</h2>";
    selesaiDibacaList.innerHTML = "<h2>Selesai dibaca</h2>";

    books.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book-item");
        bookItem.innerHTML = `
            <p><strong>${book.judul}</strong> - ${book.penulis} (${book.tahun})</p>
            <button onclick="toggleBookStatus(${book.id})">${book.selesaiDibaca ? "Belum Selesai" : "Selesai"}</button>
            <button onclick="deleteBook(${book.id})">Hapus</button>
        `;

        if (book.selesaiDibaca) {
            selesaiDibacaList.appendChild(bookItem);
        } else {
            belumSelesaiDibacaList.appendChild(bookItem);
        }
    });
}

// Fungsi untuk mengubah status selesai/belum selesai
function toggleBookStatus(id) {
    const book = books.find(b => b.id === id);
    if (book) {
        book.selesaiDibaca = !book.selesaiDibaca;
        displayBooks();
    }
}

// Fungsi untuk menghapus buku
function deleteBook(id) {
    books = books.filter(book => book.id !== id);
    displayBooks();
}

// Fungsi untuk mencari buku berdasarkan judul
function searchBook() {
    const searchQuery = document.getElementById("cari-judul").value.toLowerCase();
    const searchResults = books.filter(book => book.judul.toLowerCase().includes(searchQuery));
    
    const belumSelesaiDibacaList = document.querySelector(".section:nth-child(5)");
    const selesaiDibacaList = document.querySelector(".section:nth-child(6)");

    // Kosongkan daftar sebelum menambahkan hasil pencarian
    belumSelesaiDibacaList.innerHTML = "<h2>Belum selesai dibaca</h2>";
    selesaiDibacaList.innerHTML = "<h2>Selesai dibaca</h2>";

    searchResults.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book-item");
        bookItem.innerHTML = `
            <p><strong>${book.judul}</strong> - ${book.penulis} (${book.tahun})</p>
            <button onclick="toggleBookStatus(${book.id})">${book.selesaiDibaca ? "Belum Selesai" : "Selesai"}</button>
            <button onclick="deleteBook(${book.id})">Hapus</button>
        `;

        if (book.selesaiDibaca) {
            selesaiDibacaList.appendChild(bookItem);
        } else {
            belumSelesaiDibacaList.appendChild(bookItem);
        }
    });
}

// Event listener untuk tombol tambah dan cari
document.querySelector(".section button").addEventListener("click", addBook);
document.querySelector(".section:nth-child(4) button").addEventListener("click", searchBook);
