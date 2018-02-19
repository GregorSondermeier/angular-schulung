import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Person } from '../../_models/Person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  public persistedPerson: Person;

  public personForm: FormGroup = new FormGroup ({
    firstName: new FormControl(),
    lastName: new FormControl(),
    height: new FormControl(),
    gender: new FormControl()
  });

  @Output('gsOnPersisted')
  public onPersisted = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
  }

  public persistPerson(p: gs.IPersonData) {
    this.persistedPerson = new Person(p);
    this.onPersisted.emit(this.persistedPerson);
    this.personForm.reset();
  }

}
