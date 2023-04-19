import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Avatar, Box, Paper, Typography, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import useStyles from './styles';
import login from '../../requests/login';

const Login = () => {
  const initialState = {
    fields: {
      username: '',
      email: '',
      password: '',
    },
  };

  const classes = useStyles();

  const [fields, setFields] = useState(initialState.fields);

  const handleFieldChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(await login(fields));
  };

  return (
    <Grid container component="div" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://www.usnews.com/dims4/USNEWS/db53557/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F04%2Fc6%2Ff6aad5474237b370e373a6e17ed7%2Fintro.jpg)',
          backgroundRepeat: 'no-repeat',
          // backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mt: 1 }}>
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ p: 3, mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              // autoFocus
              onChange={handleFieldChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleFieldChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              sx={{ mt: 4 }}
            >
              Sign In
            </Button>
            <Grid container className={classes.signinLinkGrid}>
              <Grid item marginTop="20px">
                <Link className={classes.link} to="/signup">
                  Don&apos;t have an account yet? Sign up free!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
