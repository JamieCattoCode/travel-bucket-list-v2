import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Avatar, Typography, List, ListItem, ListItemText } from '@mui/material';
import Cookie from 'js-cookie';

import useStyles from './styles';
import profilePic from '../../assets/profile-pic.jpg';

const listItemStyles = {
  textAlign: 'center',
  justifyContent: 'center',
  '& .MuiTypography-root': {
    fontSize: '1.2rem',
    fontFamily: '"Golos Text", sans-serif',
  },
};

const Profile = ({ user, setUser }) => {
  const classes = useStyles();

  const navigate = useNavigate();

  const handleLogout = () => {
    Cookie.remove('userToken');
    setUser(null);
    navigate('/');
  };

  if (!user) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <Box className={classes.profilePage} sx={{ height: '105vh' }}>
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
        <Grid className={classes.linkGrid} xs={10} md={8}>
          <List className={classes.linkList}>
            <ListItem sx={listItemStyles}>
              <Link className={classes.link} to="/">
                <ListItemText primary="Home" />
              </Link>
            </ListItem>
            <ListItem sx={listItemStyles}>
              <Link className={classes.link} to="/favourites">
                <ListItemText primary="My Favourites" />
              </Link>
            </ListItem>
            <ListItem sx={listItemStyles}>
              <Typography className={classes.link} onClick={handleLogout}>
                Sign Out
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
