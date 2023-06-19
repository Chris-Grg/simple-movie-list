import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import AddFavourites from "./components/AddFavourites";
import MovieDetailPage from "./pages/MovieDetailPage";
function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=bbfd262`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);
  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favs")
    );
    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocal = (items) => {
    localStorage.setItem("react-movie-app-favs", JSON.stringify(items));
  };
  const handleFavouriteClick = (movie) => {
    const alreadyFav = favourites.find(
      (favourite) => favourite.imdbID === movie.imdbID
    );
    if (alreadyFav) {
      alert("Already Favourite");
    } else {
      const newFavourite = [...favourites, movie];
      setFavourites(newFavourite);
      saveToLocal(newFavourite);
    }
  };

  const handleUnfavouriteClick = (movie) => {
    const updatedfavourite = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    console.log(updatedfavourite);
    setFavourites(updatedfavourite);
    saveToLocal(updatedfavourite);
  };
  return (
    <div className="container-fluid">
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />

      <MovieList
        movies={movies}
        searchValue={searchValue}
        handleFavouriteClick={handleFavouriteClick}
        FavouriteComponent={AddFavourites}
        favourites={favourites}
        handleUnfavouriteClick={handleUnfavouriteClick}
      />

      <Footer />
    </div>
  );
}

export default App;
