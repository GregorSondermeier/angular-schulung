import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from "../../../_models/Person";

@Component({
  selector: 'gsc-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class GscPersonEdit {

  public updatedPerson: Person;

  @Input('gsPerson')
  public person: Person;

  @Output('gsOnUpdated')
  public onUpdated = new EventEmitter<Person>();

  public update(p: Person) {
    this.updatedPerson = p;
    this.onUpdated.emit(this.updatedPerson);
  }

}
