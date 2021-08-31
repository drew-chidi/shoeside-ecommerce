import React from 'react'
import classes from './Hero.module.css';
import Index from '../Navbar/Index';

const Hero = () => {

    return (
        <div className={classes.hero_container}>
            <Index />
            <div className={classes.background_div}>
                <h1>NO. 1 SHOE STORE</h1>
                <p>FREE DELIVERY WITHIN LAGOS</p>
                <button>SHOP NOW</button>
            </div>
        </div>
    )
}

export default Hero
