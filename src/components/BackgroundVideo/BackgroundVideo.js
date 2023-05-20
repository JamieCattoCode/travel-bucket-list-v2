import React from "react";

import useStyles from './styles';

import video from '../../assets/video-1.mp4';

const BackgroundVideo = () => {
    const classes = useStyles();

    return (
        <video src={video} className={classes.bgVideo} autoPlay loop muted />
    )
};

export default BackgroundVideo;