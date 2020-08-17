import React from 'react';
import Grid from '@material-ui/core/Grid';

import { GlobalStyle } from './styles/GlobalStyles';
import Sidebar from './components/Sidebar';
import Posts from './components/Posts';

export const App = () => (
  <>
    <GlobalStyle />
    <Grid container>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={9}>
        <Posts />
      </Grid>
    </Grid>
  </>
);
