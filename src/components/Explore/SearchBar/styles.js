import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  outerBox: {
    color: 'white',
    marginTop: '56px',
    backgroundImage: 'linear-gradient: (red, blue)',
    // justifyContent: 'center',
    padding: '3rem',
    // alignContent: 'center',
    alignItems: 'center',
  },

  searchBox: {
    color: 'white',
  },

  searchForm: {
    display: 'flex',
    alignItems: 'center',
  },

  textField: {
    minWidth: '80%',
  },

  input: {
    color: 'white',
  },

}));
