import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  homePage: {
    color: 'white',
  },

  bgVideo: {
    height: '100vh',
    width: '100vw',
    objectFit: 'fill',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
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
  },
}));
