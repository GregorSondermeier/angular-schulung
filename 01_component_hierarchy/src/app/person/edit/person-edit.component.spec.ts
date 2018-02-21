import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GscPersonEdit } from './person-edit.component';

describe('GscPersonEdit', () => {
  let component: GscPersonEdit;
  let fixture: ComponentFixture<GscPersonEdit>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GscPersonEdit ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GscPersonEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
