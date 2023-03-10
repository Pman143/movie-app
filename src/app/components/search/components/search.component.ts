import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'search-movie',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchStr = null;
  isLoading = false;
  response: any;

  constructor(private movieService: MovieService) {

  }

  searchMovies() {
    this.isLoading = true;
    console.log(this.searchStr);
    this.movieService.searchMovieByTitle(this.searchStr!).subscribe((res: any) => {
      console.log('Response ', res);
      this.response = res;
      this.isLoading = false;
    });
  }
}
