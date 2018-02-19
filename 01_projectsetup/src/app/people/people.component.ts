import {Component, Input} from '@angular/core';
import {Person} from "../../_models/Person";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {

  @Input('gsPeople')
  public people: Array<Person>;

}
