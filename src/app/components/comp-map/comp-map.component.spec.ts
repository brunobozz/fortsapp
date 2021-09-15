import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompMapComponent } from './comp-map.component';

describe('CompMapComponent', () => {
  let component: CompMapComponent;
  let fixture: ComponentFixture<CompMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
