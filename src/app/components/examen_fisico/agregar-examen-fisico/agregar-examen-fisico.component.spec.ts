import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarExamenFisicoComponent } from './agregar-examen-fisico.component';

describe('AgregarExamenFisicoComponent', () => {
  let component: AgregarExamenFisicoComponent;
  let fixture: ComponentFixture<AgregarExamenFisicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarExamenFisicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarExamenFisicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
