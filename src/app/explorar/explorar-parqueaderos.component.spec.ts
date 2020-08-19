import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorarParqueaderosComponent } from './explorar-parqueaderos.component';

describe('ExplorarParqueaderosComponent', () => {
  let component: ExplorarParqueaderosComponent;
  let fixture: ComponentFixture<ExplorarParqueaderosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorarParqueaderosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorarParqueaderosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
