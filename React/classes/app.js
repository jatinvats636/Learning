class Person {
  constructor() {
    this.name = "Jatin";
    this.age = 23;
  }
  printName = () => console.log(this.name, this.age);
}

const person = new Person();
person.printName();
