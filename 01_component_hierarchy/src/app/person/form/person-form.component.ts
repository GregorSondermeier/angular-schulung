import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Person } from '../../../_models/Person';
import { GssPersonService } from "../person.service";
import { generateUUID } from "../../../_vanilla/gs-helpers";

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
    this.person = new Person();
    this._setupForm(this.person);
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
      firstName: new FormControl(p.firstName),
      lastName: new FormControl(p.lastName),
      height: new FormControl(p.height),
      gender: new FormControl(p.gender)
    });
  }

}
