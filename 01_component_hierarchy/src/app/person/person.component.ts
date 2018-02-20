import { Component, Input } from '@angular/core';
import { Person } from "../../_models/Person";
import { GssPersonService } from "./person.service";

@Component({
  selector: 'gsc-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class GscPerson {
  public focusedPerson: Person;
  public persons: Array<Person>;

  constructor(private readonly personService: GssPersonService) {
    this.persons = this.personService.persons;
  }

  public addPerson(p: Person): void {
    this.personService.addPerson(p);
  }

  public updatePerson(p: Person): void {
    this.personService.updatePerson(p);
  }

  public focusPerson(p: Person): void {
    this.focusedPerson = new Person(p);
  }

  public deletePerson(p: Person): void {
    this.personService.deletePerson(p);
  }
}
