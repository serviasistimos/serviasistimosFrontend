import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMedidaComponent } from './eliminar-medida.component';

describe('EliminarMedidaComponent', () => {
  let component: EliminarMedidaComponent;
  let fixture: ComponentFixture<EliminarMedidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarMedidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
