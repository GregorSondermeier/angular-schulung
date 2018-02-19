import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GspPersonList } from './person.list.component';

describe('GspPersonList', () => {
  let component: GspPersonList;
  let fixture: ComponentFixture<GspPersonList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GspPersonList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GspPersonList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
