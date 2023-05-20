import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery, AppBar, Toolbar, IconButton, Button, Avatar, Stack, Typography, Drawer } from '@mui/material';
import { AccountCircle, Menu, HomeRounded } from '@mui/icons-material';

import Sidebar from '../Sidebar/Sidebar';

import useStyles from './styles';

import profilePic from '../../assets/profile-pic.jpg';

const Navbar = () => {
  const classes = useStyles();

  const authenticated = true;

  const isMobile = useMediaQuery('(max-width: 600px)');

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          { isMobile ? (
            <IconButton
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => setMobileOpen((previousMobileOpen) => !previousMobileOpen)}
            >
              <Menu />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={4} sx={{ flexGrow: 1 }}>
              <Link to="/" className={`${classes.iconLink} ${classes.link}`}>
                <HomeRounded className={classes.homeIcon} />
                <Typography variant="h6" component="h3">
                  Home
                </Typography>
              </Link>
              <Link to="/explore" className={classes.link}>
                <Typography variant="h6" component="h3">
                  Explore
                </Typography>
              </Link>
              <Link to="/favourites" className={classes.link}>
                <Typography variant="h6" component="h3">
                  Favourites
                </Typography>
              </Link>
            </Stack>
          )}
          <div>
            {!authenticated ? (
              <Button
                component={Link}
                to="/login"
              >
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                component={Link}
                to="/profile"
              >
                {isMobile && <>My Profile</>}
                <Avatar
                  style={{ width: 40, height: 40 }}
                  alt="Profile"
                  src={profilePic}
                />
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
      {isMobile && (
      <nav className={classes.drawer}>
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen((previousMobileOpen) => !previousMobileOpen)}
          classes={{ paper: classes.drawerPaper }}
          ModalProps={{ keepMounted: true }}
        >
          <Sidebar setMobileOpen={setMobileOpen} />
        </Drawer>
      </nav>
      ) }
    </>
  );
};

export default Navbar;
