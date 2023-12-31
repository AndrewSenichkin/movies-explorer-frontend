import MoviesCard from "../MoviesCard/MoviesCard"
import "./MoviesCardList.css";
import React from "react";

const MoviesCardList = ({cards, flag}) => {
    return (
        <ul className="movies-card-list__container">
            {cards.map((card) => (
                <MoviesCard
                    key={card.movieId}
                    card={card}
                    flag={flag}/>
            ))}
        </ul>
    );
};

export default MoviesCardList;
