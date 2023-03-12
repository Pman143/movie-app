import { MovieModel } from './../../../models/movie.model';
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
  moviesFound: MovieModel[] = [];
  displayedMovies: MovieModel[] = [];
  length: number = 0;
  pageIndex: number = 0;
  pageSize: number = 4;

  constructor(private movieService: MovieService) {}

  ngAfterViewInit(): void {
    this.onSearchMovie();
  }

  /*
  This method is triggered on KeyUp event, with the help of rxjs operator we filter
  and transform entered string before making a search call.
  
  A wait time of 300 milliseconds has been added to avoid making too many calls even when
   user is still typing.
  */
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
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.doPagination();
  }

  private doPagination() {
    const start = this.pageIndex * this.pageSize;
    const end = (this.pageIndex + 1) * this.pageSize;
    this.displayedMovies = this.moviesFound.slice(start, end);
  }
}
