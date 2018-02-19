import { Component, OnInit } from '@angular/core';
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
    salary: null
  };

  constructor() { }

  ngOnInit() {
  }

  public persistPerson(p: gs.IPersonData) {
    this.persistedPerson = new Person(p);
  }

}
