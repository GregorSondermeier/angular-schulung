import { Component } from '@angular/core';
import { Person } from "../_models/Person";

@Component({
  selector: 'gsa-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = '...';
  public subtitle = 'A simple Angular App';
  public people: Array<Person> = [];

  constructor() {
    this._changeTitleAfterSeconds(2000);
  }

  public addPersonToPeople(p: Person): void {
    this.people.push(p);
  }

  private _changeTitleAfterSeconds(t: number = 3000): void {
    setTimeout(() => {
      this.title = 'gsa-app'
    }, t)
  }
}
