// Tugas!! 1

//deklarasi array
const fruit = ['manggo','apel','banana']
console.log(fruit);
        // memunculkan isi dari fruit

// akses array
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
        // memunculkan sesuai urutan (dari nol)




// Tugas!! 2

fruit[0] = 'manggo' // maka buah manggo akan menjadi pertama begitu pula yang lainnya
console.log(fruit);


// Tugas!! 3
  
// menghapus elemen array menggunakan delete

delete fruit[0];// jika 0 maka manggo undefinded. Jika 1 maka apel undefinded dst

console.log(fruit);



// Tugas!! 4
//menggabungkan array
const room1 = ['hamzah', 'hafs']// ini 
const room2 = ['ashim', 'yaqub']// dan ini
                                // di gabungkan
const roomall = room1.concat(room2); //untuk menggabungkan data room11 dan room2

console.log(roomall);



// Tugas!! 5
//Mencari elemen array
const student = ['galang', 'hektor', 'taqi']
console.log(student.indexOf('galang'));// jika galang maka nol, jika hektor 1, jika taqi 2


// Tugas!! 6
//Mengurutkan array
function compareNumbers(a, b) {
    return a - b;
  }

let array3 =  [34, 7, 23, 32, 5] // [34, 7, 23, 32, 5] ini adalah datanya
array3.sort();
console.log(array3.sort(compareNumbers)); // sort di gunakan untuk mengurutkan data dari angka yang terkeci

// Tugas!! 7
//menghitung jumlah data dalam array
let array4 =  [34, 7, 23, 32, 5] // [34, 7, 23, 32, 5] in datanya
console.log(array4.length); // hasil dari ada berapa data di atas
