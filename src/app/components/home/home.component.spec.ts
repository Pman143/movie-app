import { SliderMovie } from './../../models/slider-movie.model';
import { MovieSliderComponent } from './../movie-slider/movie-slider.component';
import { HomePageMovie } from './../../models/home-page-movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeComponent } from './home.component';
import { of, Observable } from 'rxjs';
import { CarouselModule } from 'primeng/carousel';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let movieServiceSpy;
  let mockService = {
    getDummyHomePageMovies: () => new Observable<HomePageMovie[]>,
    getMoviesOnSliderScreen: () => new Observable<SliderMovie[]>,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CarouselModule],
      declarations: [HomeComponent, MovieSliderComponent],
      providers: [
        {
          provide: MovieService,
          useValue: mockService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    movieServiceSpy = TestBed.inject(MovieService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set responsiveOptions to have 3 items', () => {
    expect(component.responsiveOptions.length).toEqual(3);
  });

  it('should invoke getDummyMovies', () => {
    const dummyMovies = of(DUMMY_MOVIE_RESPONSE);

    spyOn(mockService, 'getDummyHomePageMovies').and.returnValue(dummyMovies);
    component.ngOnInit();
    expect(movieServiceSpy.getDummyHomePageMovies.calls.count())
      .withContext('spy method was called once')
      .toBe(1);
    expect(
      movieServiceSpy.getDummyHomePageMovies.calls.mostRecent().returnValue
    ).toBe(dummyMovies);
  });
});

const DUMMY_MOVIE_RESPONSE: HomePageMovie[] = [
  {
    title: 'End of the world',
    yearReleased: '2019',
    imbdRating: '0',
    language: 'en',
    moviePosterUrl: 'covid.jpg',
  },
];
