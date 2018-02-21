import { Injectable } from '@angular/core';
import { Person } from "../../_models/Person";
import { Subject } from "rxjs/Subject";

@Injectable()
export class GssPersonService {

  /**
   * A Subject of the list of persons persisted by this Service.
   */
  public persons: Subject<Array<Person>> = new Subject<Array<Person>>();

  public $list(): Promise<Array<Person>> {
    return fetch('//localhost:8080/people', {
      method: 'GET'
    }).then(response => response.json())
      .then((people: Array<gs.IPersonData>): Array<Person> => {
        let ps: Array<Person> = people.map((p) => new Person(p));
        this.persons.next(ps);
        return ps;
      });
  }

  /**
   * Creates a Person and returns a Promise with the Response.
   *
   * @param {gs.IPersonData} p
   * @returns {Promise<Response>}
   */
  public $create(p: gs.IPersonData): Promise<Response> {
    return fetch('//localhost:8080/people', {
      method: 'POST',
      body: JSON.stringify(p),
      headers: new Headers({
        'content-type': 'application/json'
      }),
    });
  }

  /**
   * Reads a Person and returns a Promise with the Person.
   *
   * @param {string} id
   * @returns {Promise<Person>}
   */
  public $read(id: string): Promise<Person> {
    return fetch(`//localhost:8080/people/${id}`, {
      method: 'GET'
    }).then(response => response.json())
      .then((p: gs.IPersonData) => {
        return new Person(p);
      });
  }

  /**
   * Updates a Person and returns a Promise with the Response.
   *
   * @param {gs.IPersonData} p
   * @returns {Promise<Response>}
   */
  public $update(p: Person): Promise<Response> {
    return fetch('//localhost:8080/people', {
      method: 'PUT',
      body: JSON.stringify(p),
      headers: new Headers({
        'content-type': 'application/json'
      })
    });
  }

  /**
   * Deletes a Person and returns a Promise with the Response.
   *
   * @param {Person} p
   * @returns {Promise<Response>}
   */
  public $delete(p: Person): Promise<Response> {
    return fetch(`//localhost:8080/people/${p.id}`, {
      method: 'DELETE'
    });
  }
}
