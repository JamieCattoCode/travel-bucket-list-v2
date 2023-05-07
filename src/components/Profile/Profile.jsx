import React, { useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Avatar, Typography } from '@mui/material';
import Cookie from 'js-cookie';
import jwtDecode from 'jwt-decode';

import useStyles from './styles';
import profilePic from '../../assets/profile-pic.jpg';

const Profile = ({ user, setUser }) => {
  const classes = useStyles();

  useEffect(() => {
    const userToken = Cookie.get('userToken');
    if (userToken) {
      const currentUser = jwtDecode(userToken);
      setUser(currentUser);
    }
  }, []);

  return (
    <Box className={classes.profilePage} sx={{ height: '100vh' }}>
      <Grid container className={classes.gridContainer} rowSpacing={1}>
        <Grid className={classes.profileHeader} xs={9} md={8}>
          <Avatar
            className={classes.userProfilePic}
            src={profilePic}
            alt={user.username}
            sx={{ width: 200, height: 'auto' }}
          />
          <Typography sx={{ fontFamily: '"Golos Text", sans-serif' }} component="h1" variant="h4">
            {user.username}
          </Typography>
        </Grid>
        <Grid className={classes.profileDetails} xs={11} md={9}>
          <Typography component="h4" variant="subtitle1">
            Email: {user.email}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
