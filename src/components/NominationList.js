import React from "react";

const NominationList = (props) => {
  let nominationDisplay = (
    <ul>
      {props.nominations.map((movie) => (
        <li key={movie.id}>
          {movie.title} ({movie.year})
          <button onClick={(e) => props.handleNomination(e, movie, "remove")}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
  return (
    <>
      <strong>Nominations</strong>
      {nominationDisplay}
    </>
  );
};

// Proptypes
NominationList.prototype = {

};

export default NominationList;
