import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GscFoo } from "./foo.component";

describe('GscFoo', () => {
  let component: GscFoo;
  let fixture: ComponentFixture<GscFoo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GscFoo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GscFoo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
