import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParqueaderosComponent } from './parqueaderos.component';

describe('ParqueaderosComponent', () => {
  let component: ParqueaderosComponent;
  let fixture: ComponentFixture<ParqueaderosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParqueaderosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParqueaderosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
