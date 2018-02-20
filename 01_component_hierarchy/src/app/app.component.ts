import { Component } from '@angular/core';
import { Person } from "../_models/Person";
import { GssPersonService } from "./person/person.service";

@Component({
  selector: 'gsc-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class GscAppComponent {
  public title = '...';
  public subtitle = 'A simple Angular App';
  public focusedPerson: Person;
  public persons: Array<Person>;

  constructor(private readonly personService: GssPersonService) {
    this._changeTitleAfterSeconds(2000);
    this.persons = this.personService.persons;
  }

  public addPerson(p: Person): void {
    this.personService.addPerson(p);
  }

  public updatePerson(p: Person): void {
    this.personService.updatePerson(p);
  }

  public focusPerson(p: Person): void {
    this.focusedPerson = this.personService.createPerson(p);
  }

  public deletePerson(p: Person): void {
    this.personService.deletePerson(p);
  }

  private _changeTitleAfterSeconds(t: number = 3000): void {
    setTimeout(() => {
      this.title = 'gsc-app'
    }, t)
  }
}
