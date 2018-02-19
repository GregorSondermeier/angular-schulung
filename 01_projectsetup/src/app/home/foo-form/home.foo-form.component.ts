import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gsc-foo-form',
  templateUrl: './home.foo-form.component.html',
  styleUrls: ['./home.foo-form.component.scss']
})
export class GscFooFormComponent implements OnInit {
  public foo: string;
  public fooTemp: string;

  constructor() { }

  ngOnInit() {

  }

  public changeFoo(foo: string) {
    this.foo = foo;
  }

}
