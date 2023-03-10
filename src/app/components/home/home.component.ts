import { HomePageMovie } from './../../models/home-page-movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false;
  responsiveOptions: {}[] = [];
  trendingMovies: HomePageMovie[] = [];

  constructor(private movieService: MovieService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      }
    ];
  }
  
  ngOnInit(): void {
    this.movieService
      .getDummyHomePageMovies()
      .subscribe((res) => (this.trendingMovies = res));
  }
}