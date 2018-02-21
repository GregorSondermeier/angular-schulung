import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Person } from '../../../_models/Person';
import { GssPersonService } from "../person.service";

@Component({
  selector: 'gsc-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class GscPersonForm implements OnChanges {

  @Input('gsPerson')
  public person: Person;

  @Output('gsAction')
  public action: EventEmitter<Person> = new EventEmitter<Person>();

  public personForm: FormGroup;

  constructor(private readonly personService: GssPersonService) {

  }

  public ngOnChanges() {
    this._setupForm(new Person(this.person));
  }

  public callAction(p: gs.IPersonData) {
    this.action.emit(this.personService.createPerson(p));
    this.personForm.reset();
  }

  private _setupForm(p: Person) {
    this.personForm = new FormGroup ({
      id: new FormControl(p.id),
      firstname: new FormControl(p.firstname),
      lastname: new FormControl(p.lastname),
      height: new FormControl(p.height),
      gender: new FormControl(p.gender)
    });
  }

}
