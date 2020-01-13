import { Grid, Typography } from '@material-ui/core';
import React from 'react';

const About = () => {
    return(
        <div className='about'>
            <Typography className='about-header'>About</Typography>
            <hr className='under-line'/>
            <Grid container spacing={2}>
                <Grid item sm={12} md={6}>
                    <div className='profile-img-container'>
                        <img className='profile-img' src='https://avatars0.githubusercontent.com/u/29339287?s=460&v=4' />
                    </div>
                </Grid>
                <Grid item sm={12} md={6}>
                    <div className='intro-container'>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <div className='social-media-icons'>
                            <i class="fab fa-github-square"></i>
                            <i class="fab fa-behance-square"></i>
                            <i class="fab fa-medium"></i>
                            <i class="fab fa-dev"></i>
                            <i class="fab fa-blogger"></i>
                        </div>
                        
                        
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default About