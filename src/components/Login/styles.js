import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
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

  alertGrid: {
    display: 'flex',
    justifyContent: 'center',
  },

}));
