import React, { useEffect, useState } from "react";
import instance from "./axios";
import request from "./requests";
import "./banner.css";

function Banner() {
  const [movies, setmoview] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const requests = await instance.get(request.fetchNetflixOriginals);
      setmoview(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );

      return request;
    }

    fetchdata();
  }, []);

  console.log(movies);

  function truncate(abc, n) {
    return abc?.length > n ? abc.substr(0, n - 1) + "..." : null;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover ",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movies.title || movies.name || movies.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">Mylist</button>
        </div>
        <h1 className="banner_description">
          {truncate(movies?.overview, 150)}
        </h1>
      </div>
      <div className="fadebottom" />
    </header>
  );
}

export default Banner;
