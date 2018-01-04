import { combineReducers } from "redux";

import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE
} from "./actions";

const initialState = {
  books: [],
  isFetching: false,
  error: null
};

export function books(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS_REQUEST:
      return { ...state, isFetching: true, error: null };
    case GET_BOOKS_SUCCESS:
      return { ...state, books: action.data, isFetching: false };
    case GET_BOOKS_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
}

export const bookApp = combineReducers({ books });
