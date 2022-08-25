import React from 'react';
import {
    Grid,
    Typography,
    Box,
    Paper,
    Icon
} from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Link } from "react-router-dom";


function About() {
    return (
        <>
        <Paper elevation={3} sx={{ m: 5, p: 5, borderColor: "primary.light", backgroundColor: "secondary.light"}}>
            <Typography variant="h5" sx={{ color: "primary.dark", textDecoration:"underline", pb: 3 }}>
                The Full(er) Story
            </Typography>
            <Typography variant="h6" sx={{ pb: 2 }}>
                I graduated with a Bachelor of Music degree from Roosevelt University primed for a career as an opera singer. How did I end up here? Read on, my friend!
            </Typography>
            <Typography variant="h6" sx={{ pb: 2 }}>
            As a budding music entrepreneur, I got bitten by the technology bug early on as I dabbled in Wordpress to build an online presence and worked at a Digital Marketing firm to hone my skills. From there, my career has been a true hybrid of technological skills and creative endeavors, working Operations and Production through Executive level roles at an arts nonprofit to create community-informed and technologically innovative performance experiences. It wasn't long before I realized it was time to take the full plunge and become a full-time web developer.
            </Typography>
            <Typography variant="h6" sx={{ pb: 2 }}>
                I will earn a Bootcamp Certificate of Full State Web Development from Northwestern University in September 2022, and I can't wait to put my skills to the test.
            </Typography>
            <Typography variant="h6" sx={{ pb: 2 }}>
                My life as a performing artist has made me nimble, team-oriented, and well aquainted with meeting strict deadlines. I love collaborating with others and am a great communicator, problem solver, and lifelong learner with a positive "can do" attitude in all situations.
            </Typography>
            <Typography variant="h6" sx={{ pb: 3 }}>
            As a lifelong learner, I approach all of my undertakings with determination and curiosity. At my computer, you'll often find me exploring new technologies and resources in an ever-evolving pursuit of self development.
            </Typography>
            <Link style={{textDecoration: 'none'}} to={`/react-portfolio/work`}>
                <Typography variant="h5" sx={{ color: "primary.dark", "&:hover": {
      color: 'primary.light'} }}>
                View My Work  <ArrowCircleRightIcon />
                </Typography>
            </Link>
        </Paper>
        </>
        
    )
}


export default About;