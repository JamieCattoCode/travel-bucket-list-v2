import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Cookie from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { AuthProvider } from '../context/AuthContext';

import {
  Home,
  Explore,
  Profile,
  Login,
  LocationDetail,
  Favourites,
  Signup,
  SuccessfulLogin,
} from '.';
import RequireAuth from './RequireAuth/RequireAuth';

import useStyles from './styles';
import getUserById from '../requests/getUserById';

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

  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const setUserFromToken = async () => {
      const userToken = Cookie.get('userToken');
      if (userToken) {
        const { userId } = (jwtDecode(userToken));
        setUserId(userId);
        setUser(await getUserById(userId));
      }
    };
    setUserFromToken();
  }, []);

  console.log(user);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route exact path="/signup" element={<Signup setSuccessfulLoginProps={setSuccessfulLoginProps} setUserId={setUserId} />} />
          <Route exact path="/login" element={<Login setSuccessfulLoginProps={setSuccessfulLoginProps} setUserId={setUserId} />} />
          <Route element={<RequireAuth />}>
            <Route exact path="/explore" element={<Explore />} />
            <Route exact path="/profile" element={<Profile user={user} setUser={setUser} />} />
            <Route
              exact
              path="/login-success"
              element={<SuccessfulLogin alertProps={alertPropsState} eventType={eventTypeState} />}
            />
            <Route exact path="/favourites" element={<Favourites />} />
            <Route exact path="/location/:id" element={<LocationDetail />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
