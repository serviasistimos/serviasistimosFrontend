import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAnalisisComponent } from './editar-analisis.component';

describe('EditarAnalisisComponent', () => {
  let component: EditarAnalisisComponent;
  let fixture: ComponentFixture<EditarAnalisisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAnalisisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
