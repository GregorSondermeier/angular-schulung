export class Person implements gs.IPerson {
  id: string;
  firstname: string;
  lastname: string;
  height: number;
  gender: gs.Gender;

  constructor(p: gs.IPersonData = {
    id: null,
    firstname: null,
    lastname: null,
    height: null,
    gender: null
  }) {
    this.id = p.id;
    this.firstname = p.firstname;
    this.lastname = p.lastname;
    this.height = p.height;
    this.gender = p.gender;
  }

  public name(): string {
    return `${this.firstname} ${this.lastname}`;
  }

}
