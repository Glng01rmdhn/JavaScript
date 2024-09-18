//soal 1
//object literal: tipe data yang digunakan untuk mendefinisikan objek dalam JavaScript 
let obj = {
    key: "value",
};


let me = {
    name:"Garma",
    age:"16",
    addres: {
        city:"newyork",
        country:"indonesian"
    }
}
console.log(me.addres.city); //memunculkan country yang berada di dalam addres dan adres yang di dalam me

//mengakses dan mengubah nilai properti

console.log(me.age); //akses nilai menggunakan dot notation
console.log(me ['addres']); // akses nilai menggunakan bracket notation

obj.key = "car";
console.log(obj['key']);

obj ['key'] = "cars";
console.log(obj['key']);

//menghapus properti

 me.country;
console.log(me.country);    

// soal 2

const {Name, Age} = me;
console.log(Name,Age);

const {Name:UserName, Age:UserAge} = me;
console.log(UserName, UserAge);

// Praktek 3


class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}`;
    }

    updateAuthor(newAuthor) {
        this.author = newAuthor;
    }
}

let myBook = new Book("JavaScript Essentials", "Jane Doe");
console.log(myBook.getDetails());

myBook.updateAuthor("Hektor");
console.log(myBook.getDetails());
    






