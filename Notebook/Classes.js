class Human {
  constructor() {
    this.gender = "Female";
  }

  displayGender() {
    console.log(this.gender);
  }
}

// Inheritance demands the use of super
class Person extends Human {
  constructor() {
    super();
    this.name = "Gustavo";
    this.gender = "Male";
  }

  displayName() {
    console.log(this.name);
  }
}

const person = new Person();
person.displayName();
person.displayGender();
