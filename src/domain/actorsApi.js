import apiCall from "./api";
import {
    personDetailsEndpoint,
    personMoviesEndpoint,
} from "../endpoints/endpoints";


export const fetchPersonDetails = (personId) => apiCall(personDetailsEndpoint(personId));
export const fetchPersonMovies = (personId) => apiCall(personMoviesEndpoint(personId));
