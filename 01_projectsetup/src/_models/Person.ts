export class Person implements gs.IPerson {
  firstName: string;
  lastName: string;
  height: number;
  salary: number;

  constructor(p: gs.IPersonData) {
    this.firstName = p.firstName;
    this.lastName = p.lastName;
    this.height = p.height;
    this.salary = p.salary;
  }

  public name(): string {
    return `${this.firstName} ${this.lastName}`;
  }

}
