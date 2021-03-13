import React, { useEffect, useState } from "react";
import instance from "./axios";
import request from "./requests";

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

  return (
    <header>
      <title></title>
    </header>
  );
}

export default Banner;
