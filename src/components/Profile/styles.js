import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  gridContainer: {
    backgroundColor: 'black',
    color: 'white',
    justifyContent: 'center',
    fontFamily: '"Golos Text", sans-serif',
  },

  profileHeader: {
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
}));
