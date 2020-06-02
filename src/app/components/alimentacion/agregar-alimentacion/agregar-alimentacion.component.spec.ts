import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAlimentacionComponent } from './agregar-alimentacion.component';

describe('AgregarAlimentacionComponent', () => {
  let component: AgregarAlimentacionComponent;
  let fixture: ComponentFixture<AgregarAlimentacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarAlimentacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAlimentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
