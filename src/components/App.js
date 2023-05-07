import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Cookie from 'js-cookie';
import jwtDecode from 'jwt-decode';

import {
  Home,
  Explore,
  Profile,
  Login,
  TripDetail,
  Favourites,
  Signup,
  SuccessfulLogin,
} from '.';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  const userToken = Cookie.get('userToken');

  const initialState = {
    successfulLoginProps: {
      alertProps: {},
      eventType: '',
    },
  };

  const [successfulLoginProps, setSuccessfulLoginProps] = useState(initialState.successfulLoginProps);
  const { alertProps: alertPropsState, eventType: eventTypeState } = successfulLoginProps;

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userToken) {
      const { user: currentUser } = jwtDecode(userToken);
      setUser(currentUser);
    }
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/profile" element={<Profile user={user} setUser={setUser} />} />
        <Route exact path="/signup" element={<Signup setSuccessfulLoginProps={setSuccessfulLoginProps} />} />
        <Route exact path="/login" element={<Login setSuccessfulLoginProps={setSuccessfulLoginProps} />} />
        <Route
          exact
          path="/login-success"
          element={<SuccessfulLogin alertProps={alertPropsState} eventType={eventTypeState} />}
        />
        <Route exact path="/favourites" element={<Favourites />} />
        <Route exact path="/trip/:id" element={<TripDetail />} />
      </Routes>
    </div>
  );
};

export default App;
