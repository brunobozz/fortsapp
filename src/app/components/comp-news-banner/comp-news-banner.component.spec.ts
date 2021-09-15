import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompNewsBannerComponent } from './comp-news-banner.component';

describe('CompNewsBannerComponent', () => {
  let component: CompNewsBannerComponent;
  let fixture: ComponentFixture<CompNewsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompNewsBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompNewsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
