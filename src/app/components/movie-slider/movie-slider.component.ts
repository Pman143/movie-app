import { MovieService } from 'src/app/services/movie.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-slider',
  templateUrl: './movie-slider.component.html',
  styleUrls: ['./movie-slider.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition('* => void', [
        style({ opacity: 1 }),
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class MovieSliderComponent implements OnInit {
  movies = [];
  currentMovie: number = 0;

  constructor(private movieService: MovieService) {
    this.movieService.getMoviesOnSliderScreen().subscribe((res) => this.movies = res);
  }

  ngOnInit(): void {
    this.sliderTimer();
  }

  sliderTimer() {
    setInterval(() => {
      this.currentMovie = ++this.currentMovie % this.movies.length;
    }, 5000);
  }
}