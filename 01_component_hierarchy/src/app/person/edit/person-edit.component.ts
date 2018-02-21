import { Component, OnInit } from '@angular/core';
import { StateService, Transition } from '@uirouter/angular';
import { Person } from "../../../_models/Person";
import { GssPersonService } from "../person.service";

@Component({
  selector: 'gsc-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class GscPersonEdit implements OnInit {

  public person: Person;

  constructor(private readonly personService: GssPersonService,
              private readonly stateService: StateService,
              private readonly transition: Transition) {

  }

  public ngOnInit() {
    this.personService.$read(this.transition.params().pid)
      .then((p: Person) => {
        this.person = p;
      });
  }

  public update(p: Person) {
    this.personService.$update(p)
      .then(() => {
        this.stateService.go('person');
      });
  }

}
