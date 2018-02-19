import { Component, Input } from '@angular/core';
import { Person } from "../../../_models/Person";

@Component({
  selector: 'gsc-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class GscPersonList {

  @Input('gsPersons')
  public persons: Array<Person>;

}
