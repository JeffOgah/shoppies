import React from "react";

const NominationList = (props) => {
  let nominationDisplay = (
    <ul>
      {props.nominations.map((movie) => (
        <li key={movie.id}>
          <span>
            {movie.title} ({movie.year})
            <button onClick={(e) => props.handleNomination(e, movie, "remove")}>
              Remove
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
  return (
    <>
      <strong>Nominations</strong>
      {nominationDisplay}
  {props.nominations.length === 5 ? <strong>You have reached the maximum limit (5) gitfor nominations.</strong> : ""}
    </>
  );
};

export default NominationList;
