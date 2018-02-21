import { Component } from '@angular/core';

@Component({
  selector: 'gsc-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class GscAppComponent {
  public title = '...';
  public subtitle = 'A simple Angular App';

  constructor() {
    this._changeTitleAfterSeconds(2000);
  }

  private _changeTitleAfterSeconds(t: number = 3000): void {
    setTimeout(() => {
      this.title = 'gsc-app'
    }, t)
  }
}
