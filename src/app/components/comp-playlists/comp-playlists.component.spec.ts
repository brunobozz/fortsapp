import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPlaylistsComponent } from './comp-playlists.component';

describe('CompPlaylistsComponent', () => {
  let component: CompPlaylistsComponent;
  let fixture: ComponentFixture<CompPlaylistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompPlaylistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
