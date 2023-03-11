import { MovieSearchResultModel } from './../../../models/movie.model';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'search-movie',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('searchMovie') searchMovieInputRef: ElementRef;

  isLoading: boolean;
  moviesFound: MovieSearchResultModel[] = [];

  constructor(private movieService: MovieService) {}

  ngAfterViewInit(): void {
    this.onSearchMovie();
  }

  onSearchMovie() {
    fromEvent(this.searchMovieInputRef.nativeElement, 'keyup')
      .pipe(
        map((inputRef: any) => inputRef.target.value),
        filter((searchTerm: string) => searchTerm && searchTerm.length > 2),
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((searchTerm) => {
        this.isLoading = true;
        this.movieService
          .findMovieBySearchTerm(searchTerm)
          .subscribe((movies) => {
            console.log(movies);
            this.moviesFound = movies;
            this.isLoading = false;
          });
      });
  }

  changePage(event: any): void {
    console.log(event);
  }
}
