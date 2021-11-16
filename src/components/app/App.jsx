import React from "react";
import PropTypes from "prop-types";

import MainPage from "../main-page/MainPage";

const App = ({filmCards}) => {
  return (
    <>
      <MainPage filmCards = {filmCards}/>
    </>
  );
};

App.propTypes = {
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

export default App;
