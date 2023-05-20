import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Typography, Grid } from '@mui/material';

import BackgroundVideo from '../BackgroundVideo/BackgroundVideo';
import Navbar from '../Navbar/Navbar';

import getLocationByXid from '../../requests/getLocationByXid';
import { translate } from '../../requests/translate';
import { getImage } from '../../requests/getImages';

import useStyles from './styles';

const LocationDetail = () => {
  const location = useLocation();
  const { pathname: path } = location;
  const xid = path.split('/')[2];

  const classes = useStyles();

  const [locationDetails, setLocationDetails] = useState(null);

  useEffect(() => {
    const getLocationDetails = async () => {
      const { data: responseData } = await getLocationByXid(xid);
      const { name, address, wikipedia_extracts: wikipediaExtracts } = responseData;
      const [translatedDescription] = await translate(wikipediaExtracts.text);
      console.log(translatedDescription);
      // const image = await getImage(`${name} ${address.city} ${address.state}`);
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
