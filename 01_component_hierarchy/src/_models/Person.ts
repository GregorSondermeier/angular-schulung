export class Person implements gs.IPerson {
  firstName: string;
  lastName: string;
  height: number;
  gender: gs.Gender;

  constructor(p: gs.IPersonData) {
    this.firstName = p.firstName;
    this.lastName = p.lastName;
    this.height = p.height;
    this.gender = p.gender;
  }

  public name(): string {
    return `${this.firstName} ${this.lastName}`;
  }

}
