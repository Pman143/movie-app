import { MovieModel } from "./movie.model";

export class MovieSearchResponseModel {
    Search: MovieModel[];
    Response: string;
    totalResults: number;
}