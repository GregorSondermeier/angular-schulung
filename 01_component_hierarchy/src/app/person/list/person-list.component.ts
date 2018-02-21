import { Component } from '@angular/core';
import { Person } from "../../../_models/Person";
import { GssPersonService } from "../person.service";

@Component({
  selector: 'gsc-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class GscPersonList {

  public persons: Array<Person>;

  constructor(private readonly personService: GssPersonService) {
    this.persons = this.personService.persons;
  }

  public delete(p: Person): void {
    this.personService.deletePerson(p);
  }

}
