import { GET_USERS, LOADING, ERROR } from '../types/userTypes';

export const getUsers = () => async (dispatch) => {
  dispatch({
    type: LOADING
  });

  try {
    const response = await fetch.get('https://jsonplaceholder.typicode.com/users');
    console.log(response)
    dispatch({
      type: GET_USERS,
      payload: response.data
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    dispatch({
      type: ERROR,
      payload: 'User information is not available.'
    });
  }
};