import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarepsComponent } from './editareps.component';

describe('EditarepsComponent', () => {
  let component: EditarepsComponent;
  let fixture: ComponentFixture<EditarepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
