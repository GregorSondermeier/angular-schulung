import { Injectable } from '@angular/core';
import { Person } from "../../_models/Person";
import { generateUUID } from "../../_vanilla/gs-helpers";

@Injectable()
export class GssPersonService {

  /**
   * The list of persons persisted by this Service.
   */
  public persons: Array<Person>;

  /**
   * The constructor initializes the persons persisted by this Service.
   */
  constructor() {
    console.log('GssPersonService constructor()');
    this.persons = [
      new Person({
        id: generateUUID(),
        firstName: 'Arno',
        lastName: 'Nym',
        height: 180,
        gender: 'MALE'
      }),
      new Person({
        id: generateUUID(),
        firstName: 'Manuela',
        lastName: 'Mustermann',
        height: 170,
        gender: 'FEMALE'
      }),
      new Person({
        id: generateUUID(),
        firstName: 'Axel',
        lastName: 'Schweiß',
        height: 185,
        gender: 'MALE'
      })
    ];
  }

  /**
   * Adds a Person to the persons persisted by this Service.
   *
   * @param {gs.IPersonData} p
   */
  public addPerson(p: gs.IPersonData): void {
    this.persons.push(new Person(Object.assign({id: generateUUID()}, p)));
  }

  /**
   * Creates a Person, and returns the created Person.
   *
   * @param {gs.IPersonData} p
   * @returns {Person}
   */
  public createPerson(p?: gs.IPersonData): Person {
    return new Person(Object.assign({id: generateUUID()}, p));
  }

  /**
   * Returns a Person from the persons persisted by this Service.
   *
   * @param {string} id
   * @returns {Person}
   */
  public readPerson(id: string): Person {
    let idx = this.persons.findIndex((p) => p.id == id);
    if (idx != -1) {
      return new Person(this.persons[idx]);
    } else {
      console.error(`Person with id ${id} is not known`);
      return null;
    }
  }

  /**
   * Updates a Person, updates the persons persisted by this Service and returns the updated Person.
   *
   * @param {gs.IPersonData} p
   * @returns {Person}
   */
  public updatePerson(p: Person): Person {
    let idx = this.persons.findIndex((p2) => p2.id == p.id);
    if (idx != -1) {
      let person = new Person(p);
      this.persons[idx] = person;
      return person;
    } else {
      console.error(`Person with id ${p.id} is not known`);
      return null;
    }
  }

  /**
   * Deletes a Person, removes it from the persons persisted by this Service and returns the deleted Person.
   *
   * @param {Person} p
   * @returns {Person}
   */
  public deletePerson(p: Person): Person {
    let idx = this.persons.findIndex((p2) => p2.id == p.id);
    if (idx != -1) {
      this.persons.splice(idx, 1);
      return p;
    } else {
      console.error(`Person with id ${p.id} is not known`);
      return null;
    }
  }
}
