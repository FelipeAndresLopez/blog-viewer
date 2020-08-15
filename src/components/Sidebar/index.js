import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import { userReducer } from '../../reducers/userReducer';


export const Sidebar = (props) => {
  const [users, dispatch] = useReducer(userReducer, []);

  console.log(userActions.getUsers())
  return (
    <div>
      Sidebar
    </div>
  );
};
