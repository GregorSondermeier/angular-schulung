import { Component, Input } from '@angular/core';

@Component({
  selector: 'gsc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class GscHome {
  @Input('gsTitle')
  public title: string;
}
