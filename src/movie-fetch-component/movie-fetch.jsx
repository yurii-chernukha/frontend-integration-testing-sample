import React, { useState } from "react";
import axios from "axios";

const moviesArray = [
  "Ad Astra",
  "Pieces of a Woman",
  "Edge of Tomorrow",
  "House of Cards",
  // "Leap Year",
  // "Tales from the Loop",
  // "The Undoing",
  // "Masterpiece",
];

export default function MovieFetch() {
  const [movie, setMovie] = useState(null);

  const handleClick = () => {
    setMovie(null);

    const randomIndex = Math.floor(Math.random() * moviesArray.length);
    const titleToSearch = moviesArray[randomIndex];
    axios
      .get(`http://www.omdbapi.com/?t=${titleToSearch}&apikey=4b23c34d`)
      .then((response) => {
        setMovie(response.data);
      });
  };

  return (
    <div>
      <button className="btn-fetch" onClick={() => handleClick()}>
        Show some movie data!
      </button>
      {movie ? (
        <>
          <p>
            <label>Title:</label>{" "}
            <span className="movie-title">{movie.Title}</span>
          </p>
          <p>
            <label>Year:</label> <span>{movie.Year}</span>
          </p>
          <p>
            <label>Actors:</label> <span>{movie.Actors}</span>
          </p>
          <p>
            <label>Plot:</label> <span>{movie.Plot}</span>
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
