import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import BackgroundVideo from '../BackgroundVideo/BackgroundVideo';

import useStyles from './styles';

import video from '../../assets/video-1.mp4';

const listItemStyles = {
  textAlign: 'center',
  justifyContent: 'center',
  '& .MuiTypography-root': {
    fontSize: '3rem',
    fontFamily: '"Golos Text", sans-serif',
  },
};

const Home = ({ user }) => {
  const classes = useStyles();

  return (
    <div className={classes.homePage}>
      <BackgroundVideo />
      <Typography
        sx={{ py: 4, px: 3, mt: 5, fontFamily: '"Golos Text", sans-serif' }}
        className={classes.helloTraveller}
        align="center"
        variant="h4"
      >Hello {user ? user.username : 'Traveller'}... Time to Explore!
      </Typography>
      <List
        className={classes.linkList}
        sx={{ mt: 4, display: 'flex' }}
      >
        <ListItem sx={listItemStyles}>
          <Link to="/explore" className={classes.link}>
            <ListItemText primary="Explore" />
          </Link>
        </ListItem>
        <ListItem sx={listItemStyles}>
          <Link className={classes.link} to={user ? '/profile' : '/signup'}>
            <ListItemText primary="Profile" />
          </Link>
        </ListItem>
        <ListItem sx={listItemStyles}>
          <Link className={classes.link} to="/favourites">
            <ListItemText primary="Favourites" />
          </Link>
        </ListItem>
      </List>
    </div>
  );
};

export default Home;
