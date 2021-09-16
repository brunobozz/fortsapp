import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompShopComponent } from './comp-shop.component';

describe('CompShopComponent', () => {
  let component: CompShopComponent;
  let fixture: ComponentFixture<CompShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
