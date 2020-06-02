import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAnalisisComponent } from './agregar-analisis.component';

describe('AgregarAnalisisComponent', () => {
  let component: AgregarAnalisisComponent;
  let fixture: ComponentFixture<AgregarAnalisisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarAnalisisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
