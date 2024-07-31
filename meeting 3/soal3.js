// Soal prakterk 1
const age =0;
if (age >= 5) {
    console.log("Bayar tiket penuh");
}
else if (age >= 2 ){
    console.log("bayar setengah aja");
}
else {
    console.log("tidak boleh masuk");
}

// Soal praktek 2
const umur =90;
if (umur >= 28) {
    console.log("Wajib punya sim UDAH TUA!!");
}
else if (umur >= 17){
    console.log("Segera buat sim karna sudah cukup umur");
}
else {
    console.log("Belum boleh punya sim karna masih bocah!!");
}


// soal praktek 3

const bilangan = 0;

if (bilangan > 0) {
  console.log("Positif");
} else if (bilangan < 0) {
  console.log("Negatif");
} else {
  console.log("Netral");
}

// Soal praktek 4

const x = -6;
const y = 5;

if (x > 0 && y > 0) {
  console.log("Kanan atas");
} else if (x < 0 && y < 0) {
  console.log("Kiri bawah");
} else if (x > 0 && y < 0) {
  console.log("Kanan bawah");
} else if (x < 0 && y > 0) {
  console.log("Kiri atas");
}
// soal prkakter 5
const totalBelanja = 100;

let diskon = 0;

if (totalBelanja >= 200) {
  diskon = 0.15; // = 15%
} else if (totalBelanja >= 100 && totalBelanja <= 199) {
  diskon = 0.1; // = 10%
}

const totalBayar = totalBelanja - totalBelanja * diskon;

console.log(`Total yang harus dibayar adalah Rp ${totalBayar}.`);
// soal praktel 6

const thn = 18
if (thn >= 18){
    console.log("registrasi berhasil");
} else {
    console.log("Registrasi gagal");
}