import apiCall from "./api";
import {
    trendingMoviesEndpoint,
    upcomingMoviesEndpoint,
    topRatedMoviesEndpoint,
    movieDetailsEndpoint,
    movieCreditsEndpoint,
    similarMoviesEndpoint
} from "../endpoints/endpoints";

// Movie APIs
export const fetchTrendingMovies = () => apiCall(trendingMoviesEndpoint);
export const fetchUpcomingMovies = () => apiCall(upcomingMoviesEndpoint);
export const fetchTopRatedMovies = () => apiCall(topRatedMoviesEndpoint);
export const fetchMovieDetails = (id) => apiCall(movieDetailsEndpoint(id));
export const fetchMovieCredits = (movieId) => apiCall(movieCreditsEndpoint(movieId));
export const fetchSimilarMovies = (movieId) => apiCall(similarMoviesEndpoint(movieId));
