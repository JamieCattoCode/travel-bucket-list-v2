import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
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
      
}));
