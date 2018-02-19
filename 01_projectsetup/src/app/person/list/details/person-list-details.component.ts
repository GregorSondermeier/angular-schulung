import { Component, Input } from '@angular/core';
import { Person } from "../../../../_models/Person";

@Component({
  selector: 'gsc-person-list-details',
  templateUrl: './person-list-details.component.html',
  styleUrls: ['./person-list-details.component.scss']
})
export class GscPersonListDetails {

  @Input('gsPerson')
  public person: Person;

}
