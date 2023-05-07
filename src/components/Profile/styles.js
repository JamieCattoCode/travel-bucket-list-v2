import { makeStyles } from '@mui/styles';

const linkTransform = 'scale(1.05)';

export default makeStyles((theme) => ({
  profilePage: {
    backgroundColor: 'black',
    color: 'white',
  },

  gridContainer: {
    justifyContent: 'center',
    fontFamily: '"Golos Text", sans-serif',
  },

  profileHeader: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  profileDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1.25rem',
  },

  userProfilePic: {
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      height: 'auto',
    },
  },

  linkList: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },

  link: {
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'inherit',
    '&:hover': {
      transform: linkTransform,
    },
    '&:focus': {
      transform: linkTransform,
    },
  },

}));
