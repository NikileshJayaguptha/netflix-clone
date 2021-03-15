import React from "react";
import "./App.css";
import Rows from "./Rows.js";
import request from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Rows
        title="NETFLIX ORIGINALS"
        fetchurl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Rows title="Trending Now" fetchurl={request.fetchTrending} />
      <Rows title="Top Rated" fetchurl={request.fetchTopRated} />
      <Rows title="Action Movies" fetchurl={request.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchurl={request.fetchComedyMovies} />
      <Rows title="Romance Movies" fetchurl={request.fetchRomanceMovies} />
      <Rows title="Horror Movies" fetchurl={request.fetchHorrorMovies} />
      <Rows title="Documentaries" fetchurl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
