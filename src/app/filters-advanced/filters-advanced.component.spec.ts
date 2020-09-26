import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersAdvancedComponent } from './filters-advanced.component';

describe('FiltersAdvancedComponent', () => {
  let component: FiltersAdvancedComponent;
  let fixture: ComponentFixture<FiltersAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
