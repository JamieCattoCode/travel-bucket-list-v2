import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Alert, Box, Typography, useMediaQuery } from '@mui/material';
import { DoneAll } from '@mui/icons-material';

import useStyles from './styles';

import video from '../../assets/video-1.mp4';
import logo from '../../assets/tbl-logo-no-text.png';

const contentColor = 'white';

const SuccessfulLogin = ({ alertProps, eventType }) => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  const classes = useStyles();
  if (!alertProps.severity || !eventType) {
    location.reload();
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <div>
      <video src={video} className={classes.bgVideo} autoPlay loop muted />
      <Grid container className={classes.gridContainer} component="div" sx={{ height: '100vh' }}>
        <Grid
          item
          className={classes.contentGrid}
          xs={12}
          sm={12}
          md={7}
          lg={6}
          sx={{ flexDirection: 'column', fontFamily: 'inherit' }}
        >
          <Alert
            className={classes.alert}
            severity={alertProps.severity}
            sx={{ width: 'fit-content' }}
            variant="filled"
          >
            {alertProps.message}
          </Alert>
          <Box
            className={classes.mainContentBox}
            sx={{ color: contentColor }}
          >
            <div className={classes.textAndIcon}>
              <DoneAll sx={{ fill: '#4BB543' }} />
              <Typography className={classes.welcomeText} component="h1" variant="h2" sx={{ mt: 1 }}>
                {eventType === 'login' ? 'Welcome back!' : 'Welcome!' }
              </Typography>
            </div>
            <Grid container className={classes.linkContainer} sx={{ display: 'grid' }}>
              {!isMobile && <div />}
              <Grid item className={`${classes.homeLinkItem} ${classes.linkItem}`} sx={{ justifyContent: 'flex-start' }}>
                <Link className={classes.linkComponent} to="/">
                  Home
                </Link>
              </Grid>
              <Grid item className={`${classes.exploreLinkItem} ${classes.linkItem}`} sx={{ justifyContent: 'flex-end' }}>
                <Link className={classes.linkComponent} to="/explore">
                  Explore
                </Link>
              </Grid>
              {!isMobile && <div />}
            </Grid>
            <img className={classes.logo} src={logo} alt="Travel Bucket List Logo" />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default SuccessfulLogin;
