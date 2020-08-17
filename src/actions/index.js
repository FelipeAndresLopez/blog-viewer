import { GET_USERS, LOADING, ERROR, SET_USER_SELECTED, GET_POSTS_BY_USER, GET_POSTS } from '../types';
import postsData from '../../db.json';

export const getUsers = () => (dispatch) => {
  dispatch({
    type: 'LOADING'
  });
  try {
    const users = postsData;
    dispatch({
      type: GET_USERS,
      payload: users
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: 'ERROR',
      payload: 'User information is not available.'
    });
  }
};

export const getPosts = () => (dispatch) => {
  dispatch({
    type: 'LOADING'
  });
  try {
    const posts = [];

    postsData.forEach((user) => {
      user.posts.forEach((post) => {
        posts.push({ posts: { ...post }, name: user.name, email: user.email });
      });
    });

    dispatch({
      type: GET_POSTS,
      payload: posts
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: 'ERROR',
      payload: 'Posts information is not available.'
    });
  }
};

export const setUserSelected = (payload) => ({
  type: SET_USER_SELECTED,
  payload
});

export const getPostsByUser = (user) => (dispatch, getState) => {
  dispatch({
    type: LOADING
  });

  try {
    const userId = user.id;
    const response = getState().users.filter((userData) => userData.id === userId);

    dispatch({
      type: GET_POSTS_BY_USER,
      payload: response
    });
  } catch (error) {
    console.error(error.message);
    dispatch({
      type: ERROR,
      payload: 'Posts are not available'
    });
  }
};
