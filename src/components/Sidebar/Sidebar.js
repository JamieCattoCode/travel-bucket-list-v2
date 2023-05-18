import React from 'react';
import { Link } from 'react-router-dom';
import { List, Typography, ListItem, ListItemText, ListItemButton } from '@mui/material';

import useStyles from './styles';

const Sidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <List className={classes.linkList}>
        <ListItem>
          <ListItemButton>
            <Link to="/" className={classes.link}>
              <ListItemText primary="Home" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <Link to="/explore" className={classes.link}>
              <ListItemText primary="Explore" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <Link to="/favourites" className={classes.link}>
              <ListItemText primary="Favourites" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <Link to="/profile" className={classes.link}>
              <ListItemText primary="My Profile" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
