import { MovieSearchResultModel } from "./movie.model";

export class MovieSearchResponseModel {
    Search: MovieSearchResultModel[];
    Response: string;
    totalResults: number;
}