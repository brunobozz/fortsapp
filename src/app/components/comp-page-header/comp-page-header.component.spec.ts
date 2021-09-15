import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPageHeaderComponent } from './comp-page-header.component';

describe('CompPageHeaderComponent', () => {
  let component: CompPageHeaderComponent;
  let fixture: ComponentFixture<CompPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompPageHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
