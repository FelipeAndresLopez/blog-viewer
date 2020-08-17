import React, { useState } from 'react';
import { Grid, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { GlobalStyle } from './styles/GlobalStyles';
import Sidebar from './components/Sidebar';
import Posts from './components/Posts';
import Header from './components/Header';

export const App = () => {
  const [isDisplayingSideBar, setstate] = useState(true);

  return (
    <>
      <GlobalStyle />

      <Grid container>
        <Grid item xs={6} sm={3} md={3}>
          <Hidden xsDown={isDisplayingSideBar}>
            <Sidebar />
          </Hidden>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Header>
            <Hidden smUp>
              <Grid item xs={2}>
                <IconButton aria-label="delete" onClick={() => setstate(!isDisplayingSideBar)}>
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
          </Header>
          <br />
          <Posts />
        </Grid>
      </Grid>
    </>
  );
};
