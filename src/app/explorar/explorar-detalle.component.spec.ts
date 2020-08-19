import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorarDetalleComponent } from './explorar-detalle.component';

describe('ExplorarDetalleComponent', () => {
  let component: ExplorarDetalleComponent;
  let fixture: ComponentFixture<ExplorarDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorarDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorarDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
