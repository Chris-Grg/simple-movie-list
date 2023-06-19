import React from "react";
import "../pages/MovieDetailPage";

const MovieList = ({
  movies,
  FavouriteComponent,
  handleFavouriteClick,
  favourites,
  handleUnfavouriteClick,
}) => {
  return (
    <>
      <h3 className="header">Movies</h3>
      <div className="movielist-img">
        {movies.map((movie) => (
          <div className="poster" key={movie.imdbID}>
            <img src={movie.Poster} alt="movie poster" fluid />

            <div
              onClick={() => handleFavouriteClick(movie)}
              className="overlay"
            >
              <FavouriteComponent />
            </div>
            <div className="movie-title">{movie.Title}</div>
          </div>
        ))}
      </div>
      <h3 className="header">Favourites</h3>
      <div className="movielist-img">
        {favourites.map((favourite) => (
          <div className="poster" key={favourite.imdbID}>
            <img src={favourite.Poster} alt="favourite poster" />
            <div
              onClick={() => handleUnfavouriteClick(favourite)}
              className="overlay-favourite"
            >
              <FavouriteComponent favourite={favourite} />
            </div>
            <div className="movie-title">{favourite.Title}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
