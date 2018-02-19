import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Person } from '../../_models/Person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  public persistedPerson: Person;

  public tmpPerson: gs.IPersonData = {
    firstName: null,
    lastName: null,
    height: null,
    gender: null
  };

  @Output('gsOnPersisted')
  public onPersisted = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
  }

  public persistPerson(p: gs.IPersonData) {
    this.persistedPerson = new Person(p);
    this.onPersisted.emit(this.persistedPerson);
  }

}
