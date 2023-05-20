import React from 'react';
import { Grid } from '@mui/material';

import Navbar from '../Navbar/Navbar';
import SearchBar from './SearchBar/SearchBar';
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo';

import useStyles from './styles';

const Explore = () => {
  const classes = useStyles();

  return (
    <div className={classes.explorePage}>
      <Navbar className={classes.navBar} />
      <BackgroundVideo />
      <SearchBar />
    </div>
  );
};

export default Explore;
