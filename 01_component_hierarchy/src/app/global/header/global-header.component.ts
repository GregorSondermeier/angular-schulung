import { Component, Input } from '@angular/core';

@Component({
  selector: 'gsc-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss']
})
export class GscGlobalHeader {
  @Input('gsTitle')
  public title: string;
}
