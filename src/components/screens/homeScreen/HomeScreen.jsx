import React from "react";
import Nav from "../../nav/Nav";
import Baner from "../../baner/Baner";
import "./HomeScreen.css";

import request from "../../../Request";
import Row from "../../row/Row";

const HomeScreen = () => {
  return (
    <div>
      {/* Navbar */}
      <Nav />

      {/* Baner */}
      <Baner />

      {/* Row */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
