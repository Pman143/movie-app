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
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'search-movie',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('searchMovie') searchMovieInputRef: ElementRef;

  isLoading: boolean;
  moviesFound: MovieSearchResultModel[] = [];
  displayedMovies: MovieSearchResultModel[] = [];
  length: number = 0;
  pageIndex: number = 0;
  pageSize: number = 4;

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
            this.moviesFound = movies;
            this.isLoading = false;
            this.doPagination();
          });
      });
  }

  changePage(event: PageEvent): void {
    console.log(event);
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.doPagination();
  }

  private doPagination() {
    const start = this.pageIndex * this.pageSize;
    const end = (this.pageIndex + 1) * this.pageSize;
    this.displayedMovies = this.moviesFound.slice(start, end);
    console.log(this.displayedMovies);
  }
}
