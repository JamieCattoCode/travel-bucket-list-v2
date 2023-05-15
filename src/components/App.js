import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

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
import RequireAuth from './RequireAuth/RequireAuth';

import useJwtCookie from '../hooks/useJwtCookie';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  const initialState = {
    successfulLoginProps: {
      alertProps: {},
      eventType: '',
    },
  };

  const [successfulLoginProps, setSuccessfulLoginProps] = useState(initialState.successfulLoginProps);
  const { alertProps: alertPropsState, eventType: eventTypeState } = successfulLoginProps;

  const { user } = useJwtCookie('userToken');

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home user={user} />}/>
        <Route exact path="/signup" element={<Signup setSuccessfulLoginProps={setSuccessfulLoginProps} />} />
        <Route exact path="/login" element={<Login setSuccessfulLoginProps={setSuccessfulLoginProps} />} />
        <Route element={<RequireAuth />}>
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route
            exact
            path="/login-success"
            element={<SuccessfulLogin alertProps={alertPropsState} eventType={eventTypeState} />}
          />
          <Route exact path="/favourites" element={<Favourites />} />
          <Route exact path="/trip/:id" element={<TripDetail />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
