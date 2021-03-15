import React, { useEffect, useState } from "react";
import instance from "./axios";
import "./row.css";

function Rows(props) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const request = await instance.get(props.fetchurl);
      setmovies(request.data.results);

      return request;
    }

    fetchdata();
  }, [props.fetchurl]);

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row_posters">
        {movies.map((movies) => (
          <img
            className={`row_poster ${props.isLargeRow && "row_posterLarge"}`}
            key={movies.id}
            src={`https://image.tmdb.org/t/p/original/${
              props.isLargeRow ? movies.poster_path : movies.backdrop_path
            }`}
            alt={movies.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Rows;
