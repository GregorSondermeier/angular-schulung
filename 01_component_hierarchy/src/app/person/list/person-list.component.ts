import { Component, OnInit } from '@angular/core';
import { Person } from "../../../_models/Person";
import { GssPersonService } from "../person.service";

@Component({
  selector: 'gsc-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class GscPersonList implements OnInit {

  public persons: Array<Person>;

  constructor(private readonly personService: GssPersonService) {
    this.personService.persons
      .subscribe((persons: Array<Person>) => {
        this.persons = persons;
      });
  }

  public ngOnInit() {
    this.personService.$list();
  }

  public delete(p: Person): void {
    this.personService.$delete(p)
      .then(() => {
        this.personService.$list();
      });
  }

}
