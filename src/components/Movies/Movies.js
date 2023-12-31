import ScrollMoviesBtn from "../ScrollMoviesBtn/ScrollMoviesBtn";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import React from "react";
import "./Movies.css";

const Movies = ({cards}) => {
    return (
        <main className="content">
            <div className="movies">
                <SearchForm/>
                <MoviesCardList cards={cards} flag="add-favorites-btn"/>
                <ScrollMoviesBtn cards={cards}/>
            </div>
        </main>
    );
};

export default Movies;
