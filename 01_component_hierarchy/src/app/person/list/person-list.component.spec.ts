import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GscPersonList } from './person-list.component';

describe('GscPersonList', () => {
  let component: GscPersonList;
  let fixture: ComponentFixture<GscPersonList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GscPersonList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GscPersonList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
