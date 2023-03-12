import { MovieService } from 'src/app/services/movie.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-slider',
  templateUrl: './movie-slider.component.html',
  styleUrls: ['./movie-slider.component.scss']
})
export class MovieSliderComponent implements OnInit {
  movies = [];
  currentMovie: number = 0;

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.sliderTimer();
    this.getSliderMovies();
  }

  getSliderMovies() {
        this.movieService
          .getMoviesOnSliderScreen()
          .subscribe((res) => (this.movies = res));
  }

  /*
  This is used to show only one movie at a time for 5s in the template
   the current movie to be displayed is calculated with help of modulus operator
  */
  sliderTimer() {
    setInterval(() => {
      this.currentMovie = ++this.currentMovie % this.movies.length;
    }, 5000);
  }
}