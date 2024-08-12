
// Gambar 1
var nilai = 60
var totalpertemuan = 30
var kehadiran = 10
var lulus = kehadiran / totalpertemuan * 100

if (nilai > 85) {
    console.log("kategori A")
    if (lulus >= 75) {
        console.log("Anda lulus")
    }else if (lulus < 75) {
        console.log("ANDA TIDAK LULUS")
    }


}else if (nilai > 70) {
    console.log("Kategori B")
    if (lulus >= 75) {
        console.log("Anda lulus")
    }else if (lulus < 75) {
        console.log("ANDA TIDAK LULUS")
    }


}else if (nilai >= 50) {
    console.log("kategori C")
    if (lulus >= 75) {
        console.log("Anda lulus")
    }else if (lulus < 75) {
        console.log("ANDA TIDAK LULUS")
    }

    
}else if (nilai < 50) {
    console.log("TIDAK LULUS !!!!!")
    if (lulus >= 75) {
        console.log("Anda lulus")
    }else if (lulus < 75) {
        console.log("ANDA TIDAK LULUS")
    }
}

// Gambar 2

var pendaftaran = true
var pembayaran = true

if (pendaftaran === true) {
    if (pembayaran === true) {
        console.log("Dapat mengikuti kursus")
    }else {
        console.log("Tidak dapat mengikuti kursus")
    }
}else {
    console.log("Tidak dapat mengikuti kursus")
}