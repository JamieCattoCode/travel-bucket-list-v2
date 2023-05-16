import { makeStyles } from '@mui/styles';

const linkTransform = 'scale(1.05)';

export default makeStyles((theme) => ({
  profilePage: {
    color: 'white',
  },

  gridContainer: {
    justifyContent: 'center',
    fontFamily: '"Golos Text", sans-serif',
  },

  profileHeader: {
    marginTop: '5rem',
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
    marginBottom: '1.2rem'
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
