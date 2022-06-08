class Human {
  constructor() {
    this.gender = "male";
  }
  printGender = () => console.log(this.gender);
}

class Person extends Human {
  constructor() {
    this.name = "Jatin Vats";
    this.age = 23;
  }
  printName = () => console.log(this.name, this.age);
}

const person = new Person();
person.printName();
