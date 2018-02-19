import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GscFooFormComponent } from "./home.foo-form.component";

describe('GscFooFormComponent', () => {
  let component: GscFooFormComponent;
  let fixture: ComponentFixture<GscFooFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GscFooFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GscFooFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
