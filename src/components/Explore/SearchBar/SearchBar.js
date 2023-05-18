import React, { useState } from 'react';
import { Grid, IconButton, Typography, useMediaQuery } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

import SearchResults from '../SearchResults/SearchResults';

import getSearchResults from '../../../requests/getSearchResults';

import useStyles from './styles';

const SearchBar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 600px)');

  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmitSearch = async (event) => {
    event.preventDefault();
    const searchLimit = 20;
    try {
      const rawResults = await getSearchResults(query, searchLimit);
      setSearchResults(rawResults);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid container direction="column" gap={2} className={classes.outerBox}>
        <Grid item xs={10} md={6} lg={5}>
          <Typography variant="h2" component="h2">
            Explore...
          </Typography>
        </Grid>
        <Grid
          item
          xs={11}
          md={6}
          lg={5}
          className={classes.searchBox}
          sx={{ flex: 1 }}
        >
          <form className={classes.searchForm} onSubmit={handleSubmitSearch}>
            <input
              type="text"
              className={classes.textField}
              onChange={(e) => setQuery(e.target.value)}
            />
            <IconButton>
              <SearchIcon color="primary" />
            </IconButton>
          </form>
        </Grid>
      </Grid>
      <SearchResults
        resultsList={searchResults}
      />
    </>
  );
};

export default SearchBar;
