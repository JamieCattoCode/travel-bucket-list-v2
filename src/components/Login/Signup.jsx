import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Box, Typography, Grid, TextField, Button, Paper, Alert } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Cookie from 'js-cookie';

import register from '../../requests/register';
import login from '../../requests/login';
import useStyles from './styles';

const Signup = ({ setSuccessfulLoginProps, setUserId }) => {
  const initialState = {
    fields: {
      username: '',
      email: '',
      password: '',
    },

    alertProps: {
      appears: false,
      severity: '',
      message: '',
    },
  };

  const classes = useStyles();

  const navigate = useNavigate();

  const [fields, setFields] = useState(initialState.fields);
  const [alertProps, setAlertProps] = useState(initialState.alertProps);

  // useEffect(() => {
  //   const userToken = Cookie.get('userToken');
  //   if (userToken) {
  //     navigate('/profile');
  //   }
  // }, []);

  useEffect(() => {
    const renavigateOnSuccessfulLogin = () => {
      if (alertProps.severity === 'success') {
        setSuccessfulLoginProps({
          alertProps,
          eventType: 'signup',
        });
        navigate('/login-success');
      }
    };
    renavigateOnSuccessfulLogin();
  }, [alertProps]);

  const handleFieldChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await register(fields);
      if (response.success) {
        const loginResponse = await login({ username: fields.username, password: fields.password });
        const currentUserId = jwtDecode(loginResponse.data.accessToken);
        setUserId(currentUserId);
        setAlertProps({
          appears: true,
          severity: 'success',
          message: 'Login successful!',
        });
      } else {
        setAlertProps({
          appears: true,
          severity: 'error',
          message: response.message,
        });
      }
    } catch (error) {
      setAlertProps({
        appears: true,
        severity: 'error',
        message: 'Server error.',
      });
    }
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
            Sign up
          </Typography>
          {alertProps.appears && (
          <Grid container className={classes.alertGrid}>
            <Grid item>
              <Alert severity={alertProps.severity} sx={{ width: 'fit-content', mt: 3 }}>
                {alertProps.message}
              </Alert>
            </Grid>
          </Grid>
          )}
          <Box className={classes.signupForm} component="form" noValidate onSubmit={handleSubmit} sx={{ p: 3, mt: 3 }}>
            <TextField
              margin="normal"
              required
              className={classes.textField}
              label="Username"
              name="username"
              fullWidth
              autoFocus
              // autoComplete="username"
              onChange={handleFieldChange}
            />
            <TextField
              margin="normal"
              required
              className={classes.textField}
              label="Email Address"
              name="email"
              id="outlined-required"
              type="email"
              fullWidth
              autoComplete="email"
              onChange={handleFieldChange}
            />
            <TextField
              margin="normal"
              requiredsx={{ mt: 3 }}
              className={classes.textField}
              label="Password"
              name="password"
              id="outlined-required"
              type="password"
              fullWidth
              autoComplete="new-password"
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
              Sign Up
            </Button>
            <Grid container className={classes.signinLinkGrid}>
              <Grid item marginTop="20px">
                <Link className={classes.link} to="/login">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
