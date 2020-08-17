import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Loading } from '../Loading';
import { Error } from '../Error';
import {
  Menu,
  List,
  Item,
  Logo,
  Anchor
} from './styles';
import { setUserSelected, getUsersAndPosts } from '../../actions';
import logo from '../../assets/logo.png';

const Sidebar = (props) => {
  useEffect(() => {
    props.getUsersAndPosts();
  }, []);

  const setContent = () => {
    const { loading, error, users } = props;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <Error error={error} />;
    }

    if (users?.length > 0) {
      return (
        <Menu>
          <Logo>
            <img src={logo} alt="Logo" />
          </Logo>
          <h1>Users</h1>
          <List>
            <Anchor type="button" key={0} onClick={() => props.setUserSelected(null)}>
              <Item itemSelected={!props.userSelected}>
                All
              </Item>
            </Anchor>
            {users.map((user) => (
              <Anchor type="button" key={user.id} onClick={() => props.setUserSelected(user)}>
                <Item itemSelected={props?.userSelected?.id === user.id}>
                  {user.name}
                </Item>
              </Anchor>
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

const mapStateToProps = (reducer) => ({ ...reducer });
export default connect(mapStateToProps, { setUserSelected, getUsersAndPosts })(Sidebar);
