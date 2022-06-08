class Human {
  gender = "female";
  printGender = () => console.log(this.gender);
}

class Person extends Human {
  name = "Jatin Vats";
  age = 23;
  gender = "male";
  printName = () => console.log(this.name, this.age);
}

const person = new Person();
person.printName();
person.printGender();
