//inheritance (skilvul)
class Orang {
    constructor(nama, umur) {
      this.nama = nama;
      this.umur = umur;
    }
  
    tidur() {
      return `${this.nama} sedang tidur`;
    }
  
    makan() {
      return `${this.nama} sedang makan`;
    }
  }
  
  // Tulis kode kamu di bawah ini
  class Pelajar extends Orang {
    constructor(nama, umur, namaSekolah) {
      super(nama, umur);  
      this.namaSekolah = namaSekolah; 
    }
  
    
    belajar() {
      return `${this.nama} belajar di ${this.namaSekolah}`;
    }
  }
  
  
  const user = new Pelajar("Terra", 17, "Skilvul");
  
  consogile.log(user); 
  console.log(user.belajar()); 

  //polymorphism (skilvul)
   // tugas ini sampe seterusnya di tuntun hektor (masih gak paham)


  class Hewan {
    constructor(nama) {
      this.nama = nama;
    }
  
    makan() {
      return "Hewan sedang makan";
    }
  }
  
  // Buat kode kamu di bawah ini
  
  class Harimau extends Hewan {
    constructor(nama) {
      super(nama);
    }
  
    makan() {
      return `${this.nama} makan daging`;
    }
  }
  
  const harimauSumatra = new Harimau("Harimau Sumatra");
  
  console.log(harimauSumatra.makan());

 // praktek 1

 class Vehicle {
  constructor(brand) {
      this.brand = brand;
  }

  start() {
      return "Vehicle is starting"
  }
}



class Car extends Vehicle {

  constructor(model, brand) {
      super  (brand)
      this.model = model;
  }
  
  start() {
      return `${this.model} is brand to ${this.brand}`
      
  }
}

let avanza = new Car("Avanza", "Honda")
console.log(avanza.start());


// Praktek 2

class Shape {
  draw() {
      return "Drawing shape"
  }
}


class Rectangle extends Shape {
  draw() {
     return "Drawing rectangle"
  }
}

let shape = new Rectangle();
console.log(shape.draw());

// Praktek 3

class Person {
  constructor(name) {
      this.nama = name;
  }

  introduce() {
      return "hi my name is"
  }
}

class Employee extends Person {
  constructor(name, position) {
      super (name)
      this.position = position;
  }
  introduce() {
      return "hi my name is hektor and i am an student"
  }
}

class Manager extends Employee {
  introduce() {
      return "hi my name is hektor and i am an student and i manage a team"
  }
}

let personal = new Person("Hektor");
console.log(personal.introduce())

let personal2 = new Employee("Student");
console.log(personal2.introduce())

let personal3 = new Manager();
console.log(personal3.introduce())