// praktek 1

let hari = 'sabtu'

switch (hari) {
    case 'senin':
        console.log("Weekday")
        break;
    case 'selasa':
        console.log("Weekday")
        break;
    case 'rabu':
        console.log("Weekday")
        break;
    case 'kamis':
        console.log("Weekday")
        break;
    case 'jumaat':
        console.log("Weekday")
        break;
    case 'sabtu':
        console.log("Weekend")
        break;
    case 'minggu':
        console.log("Weekend")
        break;
        
    default:
        break;
}

// Soal 2

for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz",i);
    } else if (i % 3 === 0) {
        console.log("Fizz",i);  
    } else if (i % 5 === 0) {
        consf(i%11 ===0) 
        console.log("Buzz",i);
    } else iole.log(i);
    }


// soal 3

for (let angka = 1; angka <= 10; angka++) {

    if (angka % 2 === 0) {
        console.log("Genap", angka);
    } 
    
}

// soal 4

for (let angka2 = 1; angka2 <= 15; angka2++) {

    if (angka2 % 3 === 0) {
        console.log("Genap", angka2);
    } 
    
}
