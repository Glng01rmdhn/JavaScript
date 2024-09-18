//skilvull
function mandi() {
    console.log("Mandi");
}

function sarapan(callback) {
    setTimeout(function () {
        console.log("Sarapan tertunda 3 detik");
        callback(); // Panggil callback setelah sarapan selesai
    }, 3000);
}

function berangkatSekolah() {
    console.log("Berangkat sekolah");
}

// Panggil function dengan urutan yang benar
mandi();
sarapan(berangkatSekolah); // Pastikan berangkatSekolah dipanggil setelah sarapan selesai
