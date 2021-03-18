import React, { useEffect, useState } from "react";
import "./Baner.css";
import axios from "../../axios";
import requests from "../../Request";

const base_url = "https://image.tmdb.org/t/p/original/";

const Baner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      ); // using prettier
    }
    fetchMovie();
  }, []);
  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('${base_url}${movie?.backdrop_path}`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.orginal_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">More Info</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>

        {/* <div className="banner--fadeBottom"></div> */}
      </div>
    </header>
  );
};

export default Baner;
