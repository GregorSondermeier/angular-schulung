import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { Person } from '../../../_models/Person';
import { GssPersonService } from "../person.service";

@Component({
  selector: 'gsc-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.scss']
})
export class GscPersonCreate implements OnInit {

  public person: Person;

  constructor(private readonly personService: GssPersonService,
              private readonly stateService: StateService) {

  }

  public ngOnInit() {
    this.person = new Person();
  }

  public create(p: Person) {
    this.personService.$create(p)
      .then(() => {
        this.stateService.go('person');
      });
  }

}
