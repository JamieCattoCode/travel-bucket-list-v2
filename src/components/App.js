import React, { useState, useEffect, createContext } from 'react';
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
} from '.';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const userToken = Cookie.get('userToken');

  const UserContext = createContext(user);

  // useEffect(() => {
  //   if (userToken) {
  //     const currentUser = jwtDecode(userToken);
  //     setUser(currentUser);
  //   }
  // }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <UserContext.Provider value={user}> */}
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route exact path="/explore" element={Explore()} />
        <Route exact path="/profile" element={Profile()} />
        <Route exact path="/signup" element={Signup()} />
        <Route exact path="/login" element={Login()} />
        <Route exact path="/favourites" element={Favourites()} />
        <Route exact path="/trip/:id" element={TripDetail()} />
      </Routes>
      {/* </UserContext.Provider> */}
    </div>
  );
};

export default App;
