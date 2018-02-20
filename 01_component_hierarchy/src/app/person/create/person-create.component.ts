import { Component, EventEmitter, Output } from '@angular/core';
import { Person } from '../../../_models/Person';
import { GssPersonService } from "../person.service";

@Component({
  selector: 'gsc-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.scss']
})
export class GscPersonCreate {

  public createdPerson: Person;

  @Output('gsOnCreated')
  public onCreated = new EventEmitter<Person>();

  constructor(private readonly personService: GssPersonService) {

  }

  public create(p: Person) {
    this.createdPerson = p;
    this.onCreated.emit(this.createdPerson);
  }

}
