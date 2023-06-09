import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
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

  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    fontFamily: '"Golos Text", sans-serif',
  },

  contentGrid: {
    display: 'flex',
    alignItems: 'center',
  },

  alert: {
    margin: '1rem 0',
  },

  mainContentBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      minWidth: '800px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },

  textAndIcon: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1rem 0',
    marginBottom: '2rem',
    fontFamily: 'inherit',
  },

  welcomeText: {
    textAlign: 'center',
  },

  linkContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: '1fr',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '0',
    },
    padding: '.5rem 2rem',
  },

  linkItem: {
    display: 'flex',
    fontSize: '2rem',
  },

  linkComponent: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      color: 'lightgray',
    },
    '&:focus': {
      color: 'lightgray',
    },
  },

  logo: {
    width: '70%',
  },

}));
