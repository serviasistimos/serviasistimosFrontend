import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExamenFisicoComponent } from './editar-examen-fisico.component';

describe('EditarExamenFisicoComponent', () => {
  let component: EditarExamenFisicoComponent;
  let fixture: ComponentFixture<EditarExamenFisicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarExamenFisicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarExamenFisicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
