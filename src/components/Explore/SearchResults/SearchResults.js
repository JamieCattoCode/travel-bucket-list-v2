import React from 'react';

import SearchResult from '../SearchResult/SearchResult';

import useStyles from './styles';

const SearchResults = ({ resultsList }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {resultsList.map((location) => <SearchResult key={location.name} location={location} />)}
    </div>
  );
};

export default SearchResults;
