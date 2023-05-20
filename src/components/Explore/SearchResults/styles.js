import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    marginBottom: '100px',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    flexWrap: 'wrap',
    gap: '20px',
  },
}));
