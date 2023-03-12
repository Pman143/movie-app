import { delay, map, tap } from 'rxjs';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HomePageMovie } from '../models/home-page-movie.model';
import { MovieDetail } from '../models/movie-detail.model';
import { SliderMovie } from '../models/slider-movie.model';

import { MovieService } from './movie.service';
import { MovieSearchResponseModel } from '../models/movie-search-response.model';
import { MovieModel } from '../models/movie.model';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });
    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('findMovieBySearchTerm() should return data', () => {
    service
      .findMovieBySearchTerm('the%20spiderman')
      .pipe(delay(600))
      .subscribe((res) => {
        expect(res).toEqual(MOVIE_RESPONSE);
      });

    const req = httpMock.expectOne(
      'http://www.omdbapi.com/?apiKey=6013f6ad&s=the%20spiderman'
    );
    expect(req.request.method).toBe('GET');
    req.flush(MOVIE_RESPONSE);
  });

  it('getDummyHomePageMovies() should return data', () => {
    service.getDummyHomePageMovies().subscribe((res) => {
      expect(res).toEqual(DUMMY_MOVIE_RESPONSE);
    });

    const req = httpMock.expectOne('assets/data/home-movies.json');
    expect(req.request.method).toBe('GET');
    req.flush(DUMMY_MOVIE_RESPONSE);
  });

  it('getMoviesOnSliderScreen() should return data', () => {
    service.getMoviesOnSliderScreen().subscribe((res) => {
      expect(res).toEqual(SLIDER_MOVIE);
    });

    const req = httpMock.expectOne('assets/data/slider-movies.json');
    expect(req.request.method).toBe('GET');
    req.flush(SLIDER_MOVIE);
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
    moviePosterUrl: 'wordwar3.jpg',
  },
];

const DUMMY_MOVIE_RESPONSE: HomePageMovie[] = [
  {
    title: 'End of the world',
    yearReleased: '2019',
    imbdRating: '0',
    language: 'en',
    moviePosterUrl: 'covid.jpg',
  },
];

const MOVIE_DETAIL: MovieDetail = {
  imdbID: '1234',
  posterUrl: 'image.jpg',
  title: 'Chuck Norris',
  type: 'Movie',
  yearReleased: '1978',
};

const MOVIE_RESPONSE: MovieModel[] = [
  {
    title: 'End of the world',
    yearReleased: '2019',
    posterUrl:'',
    imdbID: '',
    type: ''
  },
];