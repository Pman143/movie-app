import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSliderComponent } from './movie-slider.component';

describe('MovieSliderComponent', () => {
  let component: MovieSliderComponent;
  let fixture: ComponentFixture<MovieSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke sliderTimer', () => {
    component.currentMovie = 1;
    const spyOnSliderMovies = spyOn(component, 'sliderTimer').and.callThrough();
    component.sliderTimer();
    expect(component.sliderTimer).toHaveBeenCalled();
    expect(component.currentMovie).toEqual(2);
  });
});
