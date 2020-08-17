import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import { getPostsByUser } from '../../actions';
import { Title } from './styles';

const Posts = (props) => {
  const { userSelected } = props;

  return (
    <Title>
      <Grid container>
        <Grid item xs={10} sm={12}>
          <h1>{userSelected?.posts?.length > 0 ? userSelected.name : 'All posts'}</h1>
        </Grid>
        {props.children}
      </Grid>
    </Title>
  );
};

const mapStateToProps = (reducer) => ({ ...reducer });
export default connect(mapStateToProps, { getPostsByUser })(Posts);
