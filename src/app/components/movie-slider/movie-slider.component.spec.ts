import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { HomePageMovie } from 'src/app/models/home-page-movie.model';
import { SliderMovie } from 'src/app/models/slider-movie.model';
import { MovieService } from 'src/app/services/movie.service';

import { MovieSliderComponent } from './movie-slider.component';

describe('MovieSliderComponent', () => {
  let component: MovieSliderComponent;
  let fixture: ComponentFixture<MovieSliderComponent>;
  let movieServiceSpy;
  let mockService = {
    getDummyHomePageMovies: () => new Observable<HomePageMovie[]>(),
    getMoviesOnSliderScreen: () => new Observable<SliderMovie[]>(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MovieSliderComponent],
      providers: [
        {
          provide: MovieService,
          useValue: mockService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    movieServiceSpy = TestBed.inject(MovieService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke getMoviesOnSliderScreen', () => {
    const dummyMovies = of(SLIDER_MOVIE);

    spyOn(mockService, 'getMoviesOnSliderScreen').and.returnValue(dummyMovies);
    component.getSliderMovies();
    expect(movieServiceSpy.getMoviesOnSliderScreen.calls.count())
      .withContext('spy method was called once')
      .toBe(1);
    expect(
      movieServiceSpy.getMoviesOnSliderScreen.calls.mostRecent().returnValue
    ).toBe(dummyMovies);
  });
});

const SLIDER_MOVIE: SliderMovie[] = [
  {
  title: 'WW3',
  yearReleased: '2021',
  runtimeInMinutes: 'N/A',
  plot: 'world leaders fighting for power',
  imbdRating: '0',
  language: 'en',
  moviePosterUrl: 'wordwar3.jpg'
  },
];