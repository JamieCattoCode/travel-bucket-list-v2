import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Home,
  Explore,
  Profile,
  Login,
  TripDetail,
  Favourites,
} from '.';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Routes>
        <Route path="/" element={Home()} />
        <Route exact path="/explore" element={Explore()} />
        <Route exact path="/profile" element={Profile()} />
        <Route exact path="/favourites" element={Favourites()} />
        <Route exact path="/trip/:id" element={TripDetail()} />
        <Route exact path="/login" element={Login()} />
      </Routes>
    </div>
  );
};

export default App;
