import React from "react";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_URL = "https://www.omdbapi.com";

const getMovies = (query, callback) => {
  let request = `${API_URL}/?apikey=${API_KEY}&s=${query
    .split(" ")
    .join("+")}&type=movie`;
  fetch(request)
    .then((res) => res.json())
    .then(({ Search, Response, Error }) => {
      let results;
      if (Response === "False") {
        results = Error;
      }
      if (Search) {
        results = Search.map((movie) => {
          return { id: movie.imdbID, title: movie.Title, year: movie.Year };
        });
      }
      callback(results);
    });
};

const Search = (props) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <label htmlFor="movie-title">Movie Title</label>
      <input
        id="movie-title"
        className="form-control"
        placeholder="Search for..."
        value={props.query}
        onChange={(e) => props.handleInputChange(e, getMovies)}
      />
      <span className="search-icon"></span>
    </form>
  );
};

export default Search;
