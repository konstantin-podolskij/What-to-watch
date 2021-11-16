import React from "react";
import PropTypes from "prop-types";

import FilmCard from "../film-card/FilmCard";

const MainPage = ({filmCards}) => {
  return (
    <>
      {filmCards.map((card) => {
        return (
          <FilmCard key={card.name} item={card}/>
        );
      })}
    </>
  );
};

MainPage.propTypes = {
  /** Список карточек фильмов */
  filmCards: PropTypes.arrayOf(
      PropTypes.shape({
        /** Название фильма */
        name: PropTypes.string.isRequired,
        /** Жанр фильма */
        genre: PropTypes.string.isRequired,
        /** Год выхода */
        released: PropTypes.number.isRequired,
      }).isRequired,
  ),
};

export default MainPage;
