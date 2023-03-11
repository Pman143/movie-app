import { MovieSearchResultModel } from './../models/movie.model';
import { environment } from './../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieSearchResponseModel } from '../models/movie-search-response.model';
import { SingleMovieSearchResult } from '../models/single-movie-search-result.model';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  findMovieBySearchTerm(
    searchTerm: string
  ): Observable<MovieSearchResultModel[]> {
    return this.http
      .get(`${environment.appUrl}?apiKey=${environment.apiKey}&s=${searchTerm}`)
      .pipe(
        map((movSearchResultRes: MovieSearchResponseModel) =>
          movSearchResultRes.Response === 'True'
            ? movSearchResultRes.Search.map(
                (movie) => new MovieSearchResultModel(movie)
              )
            : []
        ),
        delay(600)
      );
  }

  findMovieByTitle(movieTitle: string): Observable<SingleMovieSearchResult> {
    return this.http
      .get(`${environment.appUrl}?apiKey=${environment.apiKey}&t=${movieTitle}`)
      .pipe(map((movie) => new SingleMovieSearchResult(movie)));
  }
}
