import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ poster, title, year, genres, summary }) {
  return (
    <div className="movie">
      <div className="contents__box">
        <div className="poster">
          <img src={poster} alt={title} title={title}></img>
        </div>
        <div className="contents">
          <h4 className="title">{title}</h4>
          <span className="year">{year}</span>
          <ul className="genres">
            {genres.map((genre, index) => (
              <li className="genre" key={index}>
                {genre}
              </li>
            ))}
          </ul>
          <p className="summary">{summary.slice(0, 180)}...</p>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired
};

export default Movie;
