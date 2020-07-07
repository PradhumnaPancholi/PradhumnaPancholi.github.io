import { Grid, Link, Typography } from '@material-ui/core';
import React from 'react';

const About = () => {
    return(
        <div className='about'>
            <Typography className='section-header'>About</Typography>
            <hr className='under-line'/>
            <Grid container>
                <Grid item sm={12} md={6}>
                    <div className='profile-img-container'>
                        <img className='profile-img' src='https://avatars0.githubusercontent.com/u/29339287?s=460&v=4' />
                    </div>
                </Grid>
                <Grid item sm={12} md={6}>
                    <div className='intro-container'>
                        <p>Hi, I am software developer based in Toronto, Canada. I started my career in software development in 2017 when I enrolled myself in Computer Programming(COPR) at Georgian College of Applied Arts & Technology. I graduated in September 2019 and have been working as an independent contractor since. I have worked in Java, C#, ASP.NET MVC, ASP.Net Core, Arduino, JavaScript, and Swift. However, most of my recent experience have been in JavaScript(React, Node, Express) and Ethereum (Solidity). I am also currently enrolled (after-hours) in User Interface Research Design (Specialization) at University Of Minnisota.</p>
                        <div className='social-media-icons'>
                            <Link target='_blank' href='https://github.com/PradhumnaPancholi/'>
                                <i class="fab fa-github-square"></i>
                            </Link>
                            <Link target='_blank' href='https://www.behance.net/pnpancholicf55'>
                                <i class="fab fa-behance-square"></i>
                            </Link>
                            <Link target='_blank' href='https://medium.com/@pradhumnapancholi'>
                                <i class="fab fa-medium"></i>
                            </Link>
                            <Link target='_blank' href='https://dev.to/pradhumnapancholi'>
                                <i class="fab fa-dev"></i>
                            </Link>
                            <Link target='_blank' href='https://www.geekstuffpro.tech/'>
                                <i class="fab fa-blogger"></i>
                            </Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default About