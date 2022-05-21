import { GET_MOVIES_LIST } from "./../actions/types";

const INITIAL_STATE = {
  list: [],
};

export function moviesReducer(state = INITIAL_STATE, {type,payload}) {
  switch (type) {
    case GET_MOVIES_LIST:
      return {
        ...state,
        list:payload,
      };
    default:
      return state;
  }
}
