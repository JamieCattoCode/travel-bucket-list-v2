import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import video from '../../videos/video-1.mp4';

const listItemStyles = {
  textAlign: 'center',
  justifyContent: 'center',
  '& .MuiTypography-root': {
    fontSize: '3rem',
    fontFamily: '"Golos Text", sans-serif',
  },
};

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.homePage}>
      <video src={video} className={classes.bgVideo} autoPlay loop muted />
      <Typography
        sx={{ py: 4, px: 3, mt: 5, fontFamily: '"Golos Text", sans-serif' }}
        className={classes.helloTraveller}
        align="center"
        variant="h4"
      >Hello Traveller... Time to Explore!
      </Typography>
      <List
        className={classes.linkList}
        sx={{ mt: 4, display: 'flex' }}
      >
        <ListItem sx={listItemStyles}>
          <Link className={classes.link} to="/explore">
            <ListItemText primary="Explore" />
          </Link>
        </ListItem>
        <ListItem sx={listItemStyles}>
          <Link className={classes.link} to="/profile">
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
