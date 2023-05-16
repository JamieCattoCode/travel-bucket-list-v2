import { makeStyles } from '@mui/styles';

const linkTransform = 'scale(1.05)';

export default makeStyles(() => ({
  homePage: {
    color: 'white',
  },

  helloTraveller: {
    fontFamily: '"Golos Text", sans-serif',
  },

  linkList: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },

  link: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      transform: linkTransform,
    },
    '&:focus': {
      transform: linkTransform,
    },
  },
}));
