import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GscPersonForm } from './person-form.component';

describe('GscPersonForm', () => {
  let component: GscPersonForm;
  let fixture: ComponentFixture<GscPersonForm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GscPersonForm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GscPersonForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
