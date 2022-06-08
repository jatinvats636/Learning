class Human {
  constructor() {
    this.gender = "female";
  }
  printGender = () => console.log(this.gender);
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Jatin Vats";
    this.age = 23;
    this.gender = "male";
  }
  printName = () => console.log(this.name, this.age);
}

const person = new Person();
person.printName();
person.printGender();
