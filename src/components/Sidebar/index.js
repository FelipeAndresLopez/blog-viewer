import React, { useReducer, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { Loading } from '../Loading/Loading';
import { Menu, List, Item } from './styles';
import { userReducer } from '../../reducers/userReducer';

const Sidebar = (initialState) => {
  const [userData, setUsers] = useReducer(userReducer, initialState);

  useEffect(() => {
    (async () => {
      setUsers({
        type: 'LOADING'
      });
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers({
          type: 'GET_USERS',
          payload: response.data
        });
      } catch (error) {
        setUsers({
          type: 'ERROR',
          payload: 'User information is not available.'
        });
      }
    })();
  }, []);

  const setContent = () => {
    const { loading, error, users } = userData;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return error;
    }

    if (users.length > 0) {
      return (
        <Menu>
          <List>
            {users.map((user) => (
              <Item key={user.id}>
                {user.name}
              </Item>
            ))}
          </List>
        </Menu>
      );
    }

    return null;
  };

  return (
    <>
      {setContent()}
    </>
  );
};

const mapStateToProps = ({ userReducer }) => {
  return userReducer
}

export default connect(mapStateToProps, {})(Sidebar);
