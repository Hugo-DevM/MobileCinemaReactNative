import apiCall from "./api";
import {
    searchMoviesEndpoint
} from "../endpoints/endpoints";

// Search APIs
export const searchMovies = (params) => apiCall(searchMoviesEndpoint, params);
