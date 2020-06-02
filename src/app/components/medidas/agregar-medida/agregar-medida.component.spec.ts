import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMedidaComponent } from './agregar-medida.component';

describe('AgregarMedidaComponent', () => {
  let component: AgregarMedidaComponent;
  let fixture: ComponentFixture<AgregarMedidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarMedidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
