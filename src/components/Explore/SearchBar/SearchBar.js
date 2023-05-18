import React, { useState } from 'react';
import { Grid, IconButton, Typography, useMediaQuery } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

import useStyles, { CssTextField } from './styles';

const SearchBar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 600px)');

  const [query, setQuery] = useState('');

  return (
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
        <form className={classes.searchForm} onSubmit={() => ({})}>
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
  );
};

export default SearchBar;
