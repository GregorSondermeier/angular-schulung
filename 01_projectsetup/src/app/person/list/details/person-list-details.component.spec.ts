import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GscPersonListDetails } from './person-list-details.component';

describe('GscPersonList', () => {
  let component: GscPersonListDetails;
  let fixture: ComponentFixture<GscPersonListDetails>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GscPersonListDetails ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GscPersonListDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
