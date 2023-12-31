import {useState} from "react";
import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({card, flag}) => {
    const [saveMovie, setSaveMovie] = useState(false);

    const handleSaveMovie = () => {
        if (!saveMovie && flag === "add-favorites-btn")
            return setSaveMovie(true);

        return setSaveMovie(false);
    };

    return (
        <li className="movies-card__card">
            <a
                href="https://www.kinopoisk.ru/film/1390163/"
                className="movies-card__link"
                rel="noreferrer"
                target="_blank">
                <img
                    className="movies-card__image"
                    src={card.image}
                    alt={card.nameRU}/>
            </a>
            <div className="movies-card__info">
                <div className="movies-card__info-container">
                    <h2 className="movies-card__title">{card.nameRU}</h2>
                    <p className="movies-card__time">{card.duration}</p>
                </div>
                <button
                    className={`movies-card__${flag} movies-card__${flag}_${
                        saveMovie
                            ? "active"
                            : ""
                    }`}
                    onClick={handleSaveMovie}
                    type="button"
                />
            </div>
        </li>
    );
};

export default MoviesCard;
