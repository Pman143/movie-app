export class SingleMovieSearchResult {
  title: string;
  yearReleased: string;
  posterUrl: string;
  imdbID: string;
  type: string;

  constructor(movie: any) {
    this.title = movie['Title'];
    this.yearReleased = movie['Year'];
    this.posterUrl = movie['Poster'];
    this.imdbID = movie['imdbID'];
    this.type = movie['Type'];
  }
}