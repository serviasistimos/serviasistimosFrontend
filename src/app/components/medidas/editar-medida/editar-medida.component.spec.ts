import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMedidaComponent } from './editar-medida.component';

describe('EditarMedidaComponent', () => {
  let component: EditarMedidaComponent;
  let fixture: ComponentFixture<EditarMedidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarMedidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
