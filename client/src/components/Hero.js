import React from 'react';
import './Hero.css';
import Card from './UI/Card';
import Logo from './Logo';
import Navbar from './Navbar';

const Hero = (props) => {
    return (
        <div className='hero'>
            <Card>
                <div style={{ padding: '2.500em 0'}}>
                    <Logo />
                </div>
                <Navbar />
            </Card>
        </div>
    )
}

export default Hero
