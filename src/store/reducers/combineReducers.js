import { combineReducers } from "redux";
import languageReducer from './language';
import favouriteReducer from "./favourites";
export default combineReducers({
    language:languageReducer,
    favourites:favouriteReducer
})