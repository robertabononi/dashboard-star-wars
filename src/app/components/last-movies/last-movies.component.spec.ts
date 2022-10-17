import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMoviesComponent } from './last-movies.component';

describe('LastMoviesComponent', () => {
  let component: LastMoviesComponent;
  let fixture: ComponentFixture<LastMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
