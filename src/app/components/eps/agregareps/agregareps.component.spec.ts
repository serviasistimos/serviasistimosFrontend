import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarepsComponent } from './agregareps.component';

describe('AgregarepsComponent', () => {
  let component: AgregarepsComponent;
  let fixture: ComponentFixture<AgregarepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
