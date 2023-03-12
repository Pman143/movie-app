import { SliderMovie } from './../models/slider-movie.model';
import { HomePageMovie } from './../models/home-page-movie.model';
import { MovieModel } from './../models/movie.model';
import { environment } from './../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieSearchResponseModel } from '../models/movie-search-response.model';
import { delay, map } from 'rxjs/operators';
import { MovieDetail } from '../models/movie-detail.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  findMovieBySearchTerm(searchTerm: string): Observable<MovieModel[]> {
    return this.http
      .get(`${environment.appUrl}?apiKey=${environment.apiKey}&s=${searchTerm}`)
      .pipe(
        map((movSearchResultRes: MovieSearchResponseModel) =>
          movSearchResultRes.Response === 'True'
            ? movSearchResultRes.Search.map((movie) => new MovieModel(movie))
            : []
        ),
        delay(600)
      );
  }

  findMovieByTitle(movieTitle: string): Observable<MovieDetail> {
    return this.http
      .get(`${environment.appUrl}?apiKey=${environment.apiKey}&t=${movieTitle}`)
      .pipe(map((movie) => new MovieDetail(movie)));
  }

  getDummyHomePageMovies(): Observable<HomePageMovie[]> {
    return this.http.get<HomePageMovie[]>('assets/data/home-movies.json');
  }

  getMoviesOnSliderScreen(): Observable<SliderMovie[]> {
    return this.http.get<SliderMovie[]>('assets/data/slider-movies.json');
  }
}
