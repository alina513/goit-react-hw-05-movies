


import axios from "axios";

export const fetchMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=10f26a336fa68ad762f04ca1fe287bdc`
    );
    const movies = response.data.results;
    return movies;
  
};

export const fetchMoviesByQuery = async(query) => {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=10f26a336fa68ad762f04ca1fe287bdc&query=${query}&language=en-US&page=1`)
const movies = response.data.results;
return movies;
}


export const fetchMoviesById = async(movieId) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=10f26a336fa68ad762f04ca1fe287bdc`)
const movies = response.data;
return movies;
}

export const fetchMoviesCast = async(movieId) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=10f26a336fa68ad762f04ca1fe287bdc`)
const movies = response.data.cast;
return movies;
}

export const fetchMoviesReview = async(movieId) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=10f26a336fa68ad762f04ca1fe287bdc`)
const movies = response.data.results;
return movies;
}