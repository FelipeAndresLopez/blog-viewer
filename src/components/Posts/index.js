import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';

import { getPostsByUser, getPosts } from '../../actions';
import { Error } from '../Error';
import { Loading } from '../Loading';

const Posts = (props) => {
  useEffect(() => {
    props.getPosts();
  }, []);
  const setContent = () => {
    const { loading, error, userSelected, posts } = props;
    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <Error error={error} />;
    }

    if (userSelected?.posts?.length > 0) {
      const columns = [
        { title: 'N°', field: 'id', type: 'numeric' },
        { title: 'Title', field: 'title' },
        { title: 'Date', field: 'publishedAt', type: 'date' },
        {
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' }
        }
      ];
      return (

        <>
          <Grid container justify="center">
            <Grid item xs={12} md={10}>
              <MaterialTable
                title=""
                columns={columns}
                data={userSelected.posts}
              />
            </Grid>
          </Grid>
        </>
      );
    }

    if (!userSelected && posts?.length > 0) {
      const columns = [
        { title: 'N°', field: 'posts.id', type: 'numeric' },
        { title: 'Autor', field: 'name' },
        { title: 'Email', field: 'email' },
        { title: 'Title', field: 'posts.title' },
        { title: 'Date', field: 'posts.publishedAt', type: 'date' },
        {
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' }
        }
      ];
      return (
        <>
          <Grid container justify="center">
            <Grid item xs={12} md={10}>
              <MaterialTable
                title=""
                columns={columns}
                data={posts}
              />
            </Grid>
          </Grid>
        </>
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
export default connect(mapStateToProps, { getPostsByUser, getPosts })(Posts);
