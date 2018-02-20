import { Component } from '@angular/core';

@Component({
  selector: 'gsc-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class GscFoo {
  public foo: string;
  public fooTemp: string;

  public changeFoo(foo: string) {
    this.foo = foo;
  }

}
