import { Component } from '@angular/core';

@Component({
  selector: 'gsc-home-foo-form',
  templateUrl: './home-foo.component.html',
  styleUrls: ['./home-foo.component.scss']
})
export class GscFooFormComponent {
  public foo: string;
  public fooTemp: string;

  public changeFoo(foo: string) {
    this.foo = foo;
  }

}
