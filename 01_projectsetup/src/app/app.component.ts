import { Component } from '@angular/core';

@Component({
  selector: 'gsa-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = '...';
  public subtitle = 'A simple Angular App';

  constructor() {
    this._changeTitleAfterSeconds(2000);
  }

  private _changeTitleAfterSeconds(t: number = 3000): void {
    setTimeout(() => {
      this.title = 'gsa-app'
    }, t)
  }
}
