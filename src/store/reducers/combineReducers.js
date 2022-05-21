import { combineReducers } from "redux";
import languageReducer from './language';
import favouriteReducer from "./favourites";
import { moviesReducer } from './movies';
export default combineReducers({
    language:languageReducer,
    favourites:favouriteReducer,
    movies:moviesReducer
})