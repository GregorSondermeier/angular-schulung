import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo-form',
  templateUrl: './foo-form.component.html',
  styleUrls: ['./foo-form.component.css']
})
export class FooFormComponent implements OnInit {
  public foo: string;
  public fooTemp: string;

  constructor() { }

  ngOnInit() {

  }

  public changeFoo(foo: string) {
    this.foo = foo;
  }

}
