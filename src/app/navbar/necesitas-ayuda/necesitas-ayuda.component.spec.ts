import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NecesitasAyudaComponent } from './necesitas-ayuda.component';

describe('NecesitasAyudaComponent', () => {
  let component: NecesitasAyudaComponent;
  let fixture: ComponentFixture<NecesitasAyudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NecesitasAyudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NecesitasAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
