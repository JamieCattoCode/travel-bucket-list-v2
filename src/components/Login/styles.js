import { makeStyles } from '@mui/styles';

const boxWidth = '500px';

export default makeStyles((theme) => ({
  // signupForm: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   width: boxWidth,
  //   [theme.breakpoints.down('sm')]: {
  //     width: '80%',
  //   },
  // },

  textField: {
    // marginTop: '1rem',
  },

  signinLinkGrid: {
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },

  link: {
    textDecoration: 'none',
    justifySelf: 'flex-end',
    marginTop: '2rem',
  },

}));
