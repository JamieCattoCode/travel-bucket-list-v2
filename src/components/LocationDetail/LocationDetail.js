import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { Typography, Grid, IconButton } from '@mui/material';
import { FavoriteBorderRounded as EmptyHeartIcon } from '@mui/icons-material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { AuthContext } from '../../context/AuthContext';

import BackgroundVideo from '../BackgroundVideo/BackgroundVideo';
import Navbar from '../Navbar/Navbar';

import getLocationByXid from '../../requests/getLocationByXid';
import { translate } from '../../requests/translate';
import postFavourite from '../../requests/postFavourite';

import useStyles from './styles';

// Want to get images in here but struggling to find an API that can do it automatically with niche places of interest

const LocationDetail = ({ userId }) => {
  const location = useLocation();
  const { pathname: path } = location;
  const xid = path.split('/')[2];

  const classes = useStyles();

  const [locationDetails, setLocationDetails] = useState(null);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const getLocationDetails = async () => {
      const { data: responseData } = await getLocationByXid(xid);
      const { name, address, wikipedia_extracts: wikipediaExtracts } = responseData;
      const [translatedDescription] = await translate(wikipediaExtracts.text);
      setLocationDetails({
        name,
        address: {
          firstLine: `${address.road}, ${address.suburb}`,
          secondLine: `${address.city}, ${address.state}`,
          thirdLine: `${address.country}` },
        description: wikipediaExtracts.text,
        translatedDescription: translatedDescription[0],
      });
    };
    getLocationDetails();
  }, []);

  const toggleFavourite = async () => {
    if (!isFavourite) {
      setIsFavourite(true);
      const responseData = await postFavourite(userId, xid);
      console.log(responseData);
    } else {
      setIsFavourite(false);
    }
  };

  console.log(locationDetails);

  return (
    locationDetails ? (
      <>
        <Navbar />
        <BackgroundVideo />
        <Grid container className={classes.outerDiv} gap={2}>
          <Grid item xs={1 / 2} md={2 / 5} />
          <Grid item xs={11} md={7}>
            <Typography variant="h2" component="h1" sx={{ marginBottom: '20px' }}>
              {locationDetails.name}
            </Typography>
            <Typography variant="h4" component="h2">
              Description
            </Typography>
            <Typography variant="body1" component="p" sx={{ marginBottom: '15px' }}>
              {locationDetails.translatedDescription}
            </Typography>
            <Typography variant="h4" component="h2">
              Location
            </Typography>
            <Typography variant="body1" component="p">
              {locationDetails.address.firstLine}
            </Typography>
            <Typography variant="body1">
              {locationDetails.address.secondLine}
            </Typography>
            <Typography variant="body1">
              {locationDetails.address.thirdLine}
            </Typography>
            <IconButton
              className={classes.favouriteButton}
              color="error"
              onClick={toggleFavourite}
              sx={{ padding: '0', marginTop: '10px' }}
            >
              {isFavourite ? (
                <FavoriteRoundedIcon />
              ) : (
                <EmptyHeartIcon />
              )}
            </IconButton>
          </Grid>
          <Grid item xs={1 / 2} md={2 / 5} />
        </Grid>
      </>

    ) : (
      <Typography variant="h3">
        Loading
      </Typography>
    )

  );
};

export default LocationDetail;
