import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GscPersonCreate } from './person-form.component';

describe('GscPersonCreate', () => {
  let component: GscPersonCreate;
  let fixture: ComponentFixture<GscPersonCreate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GscPersonCreate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GscPersonCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
