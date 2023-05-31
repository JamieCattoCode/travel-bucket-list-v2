import React, { useContext, useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { AuthContext } from '../../context/AuthContext';

import Navbar from '../Navbar/Navbar';
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo';
import Favourite from './Favourite/Favourite';

import { getAllUserFavourites } from '../../requests/getFavourites';
import { getLocationNameByXid } from '../../requests/getLocationByXid';

import useStyles from './styles';

const removeDuplicateFavourites = (favourites) => {
  const uniqueFavourites = [];
  const uniquePlaceXids = [];
  favourites.forEach((favourite) => {
    if (!uniquePlaceXids.includes(favourite.placeXid)) {
      uniquePlaceXids.push(favourite.placeXid);
      uniqueFavourites.push(favourite);
    }
  });
  return uniqueFavourites;
};

const addNamesToFavourites = async (favourites) => {
  const uniqueFavourites = removeDuplicateFavourites(favourites);

  const favouritesWithNames = await Promise.all(uniqueFavourites.map(async (favourite) => {
    const favouriteName = await getLocationNameByXid(favourite.placeXid);
    return { ...favourite, name: favouriteName };
  }));

  return favouritesWithNames;
};

const Favourites = () => {
  const classes = useStyles();

  const { userId } = useContext(AuthContext);

  const [favouritesList, setFavouritesList] = useState([]);

  useEffect(() => {
    const getFavouritesLists = async () => {
      const favourites = await getAllUserFavourites(userId);
      const favouritesWithNames = await addNamesToFavourites(favourites);

      setFavouritesList(favouritesWithNames);
    };
    getFavouritesLists();
  }, []);

  if (favouritesList.length === 0) {
    return (
      <h1>There are no favourites to show at this time.</h1>
    );
  }

  return (
    <div className={classes.favouritesPage}>
      <Navbar />
      <BackgroundVideo />
      <div className={classes.favouritesContent}>
        <Typography variant="h2" color="white">Favourites</Typography>
        <Grid className={classes.favouritesGridContainer} container spacing={2}>
          {favouritesList.map((favourite) => (
            <Grid item className={classes.favouriteItem} xs={12}>
              <Favourite favouriteObject={favourite} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Favourites;
