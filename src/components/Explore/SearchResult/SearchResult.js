import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

import useStyles from './styles';

const SearchResult = ({ location }) => {
  const classes = useStyles();

  const { name, xid } = location;

  const makeKindsReadable = (kindsString) => {
    let readableKinds = kindsString.split(',');
    readableKinds = readableKinds.map((kind) => {
      let newKind = kind;
      // Separate the kind phrase by underscore to get separate words
      newKind = newKind.split('_');
      // Make each word start with uppercase
      newKind = newKind.map((word) => {
        if (word !== 'and') {
          const firstChar = word.charAt(0).toUpperCase();
          const newWord = firstChar + word.slice(1);
          return newWord;
        }
        return word;
      });
      newKind = newKind.join(' ');
      return newKind;
    });
    return readableKinds;
  };

  const kinds = makeKindsReadable(location.kinds);
  const kindsString = kinds.join(', ');

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" component="h3" className={classes.header}>
          {name}
        </Typography>
        <Typography variant="body2" component="h6" color="text.secondary">
          {kindsString}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link className={classes.link} to={`/location/${xid}`}>Learn More</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default SearchResult;
