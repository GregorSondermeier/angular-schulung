import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Person } from '../../../_models/Person';
import { GssPersonService } from "../person.service";

@Component({
  selector: 'gsc-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.scss']
})
export class GscPersonCreate {

  public createdPerson: Person;

  constructor(private readonly personService: GssPersonService) {

  }

  public personForm: FormGroup = new FormGroup ({
    firstName: new FormControl(),
    lastName: new FormControl(),
    height: new FormControl(),
    gender: new FormControl()
  });

  @Output('gsOnCreated')
  public onCreated = new EventEmitter<Person>();

  public create(p: gs.IPersonData) {
    this.createdPerson = this.personService.createPerson(p);
    this.onCreated.emit(this.createdPerson);
    this.personForm.reset();
  }

}
