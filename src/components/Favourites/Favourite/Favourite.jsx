import React from 'react';
import { Link } from 'react-router-dom';

import { Chip } from '@mui/material';

import useStyles from './styles';

const Favourite = ({ favouriteObject }) => {
  const classes = useStyles();

  return (
    <Chip
      className={classes.favouriteChip}
      clickable
      label={favouriteObject.name}
      component={Link}
      to={`/location/${favouriteObject.placeXid}`}
      variant="filled"
      color="primary"
    />
  );
};

export default Favourite;
