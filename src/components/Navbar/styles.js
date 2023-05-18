import { makeStyles } from '@mui/styles';

const drawerWidth = '300px';

export default makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  iconLink: {
    display: 'flex',
  },

  link: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: 'lightgray',
    },
  },

  homeIcon: {
    marginTop: '4px',
  },

  drawer: {
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'black',
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'black',
  },

}));
