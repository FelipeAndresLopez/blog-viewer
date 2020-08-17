import { GET_USERS, LOADING, ERROR, SET_USER_SELECTED, GET_POSTS } from '../types';

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: null,
  posts: []
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: ''
      };

    case SET_USER_SELECTED:
      return {
        ...state,
        userSelected: action.payload,
        loading: false,
        error: ''
      };

    case GET_POSTS:
      return { ...state, posts: action.payload, loading: false, error: '' };

    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
