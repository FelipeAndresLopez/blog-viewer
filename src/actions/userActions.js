import { GET_USERS, LOADING, ERROR } from '../types/userTypes';
import axios from 'axios';

export const getUsers = () => async (dispatch) => {
  dispatch({
    type: LOADING
  });

  try {
    const response = await axios('https://jsonplaceholder.typicode.com/users');
    console.log(response)
    dispatch({
      type: GET_USERS,
      payload: response.data
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    dispatch({
      type: ERROR,
      payload: 'User information is not available.'
    });
  }
};