import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import MainPage from "../main-page/MainPage";
import SignInPage from "../sign-in-page/SignInPage";
import MyListPage from "../my-list-page/MyListPage";
import MoviePage from "../movie-page/MoviePage";

const App = ({filmCards}) => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <MainPage filmCards = {filmCards}/>
          </Route>
          <Route path="/login" exact>
            <SignInPage/>
          </Route>
          <Route path="/mylist" exact>
            <MyListPage/>
          </Route>
          <Route path="/films/:id" exact>
            <MoviePage/>
          </Route>
        </Switch>
      </Router>
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
