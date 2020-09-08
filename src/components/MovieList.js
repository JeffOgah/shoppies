import React from "react";

const MovieList = (props) => {
  let movieDisplay = Array.isArray(props.results) ? (
    <ul>
      {props.results.map((movie) => (
        <li key={movie.id}>
          {movie.title} ({movie.year})
          <button
            onClick={(e) => props.handleNomination(e, movie, "add")}
            disabled={
              props.nominations.length > 0
                ? props.nominations.some((element) => element.id === movie.id)
                : false
            }
          >
            Nominate
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p>{props.results}</p>
  );
  return (
    <>
      <strong>Results for "{props.query}"</strong>
      {movieDisplay}
    </>
  );
};

export default MovieList;
