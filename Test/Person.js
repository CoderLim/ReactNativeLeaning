export default class Person {
  static instCount = 0;
  static name1 = 'glm';

  constructor(props) {
    this.name2 = 'name2';
    this.age = 0;
    console.log('constructor');

    Person.instCount++;
  }

  sayHello() {
    console.log(`hello ${this.name1}`);
  }

  static set age(a) {
    this.age = a;
  }
}
