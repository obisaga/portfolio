import React, { useState, useEffect } from 'react';
import NavUp from '../components/NavUp';
import NavDown from '../components/NavDown';
import '../styles/stylesheet.css'; // Zakładając, że CSS jest w tym pliku

const Two = () => {
    const [gradientAngle, setGradientAngle] = useState(113);

    const handleMouseMove = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const angle = Math.atan2(y - window.innerHeight / 2, x - window.innerWidth / 2) * (180 / Math.PI) + 180;
        setGradientAngle(angle);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        // Usuń nasłuchiwanie przy demontażu komponentu
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className='pageTwo' style={{ '--gradient-angle': `${gradientAngle}deg` }}>
            <NavUp />
            <div className="containerTwo">
                <div className="list">
                    <div>
                        <p className='number'>01</p>
                        <p className='number'>02</p>
                        <p className='number'>03</p>
                        <p className='number'>04</p>
                        <p className='number'>05</p>
                    </div>
                    <div>
                        <p className='menuItem'>HOME</p>
                        <p className='menuItem'>ABOUT</p>
                        <p className='menuItem'>SKILLS</p>
                        <p className='menuItem'>WORKS</p>
                        <p className='menuItem'>CONTACT</p>
                    </div>
                </div>
                <div className='about'>
                    <p className='description'>
                        Hi! My name is Olga and I am currently based in Osnabruck, Germany.
                        I have a strong vision to help others and I want to achieve that with the use of new technologies and art.
                        I have a strong vision to help others and I want to achieve that with the use of new technologies and art.
                    </p>
                </div>
            </div>
            <NavDown />
        </div>
    );
};

export default Two;
