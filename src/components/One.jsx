import React, { useState, useEffect } from 'react';
import NavUp from '../components/NavUp';
import NavDown from '../components/NavDown';
import '../styles/stylesheet.css'; // Zakładając, że CSS jest w tym pliku

const One = () => {
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
        <>
            <NavUp />
            <div className="middleSection" style={{ '--gradient-angle': `${gradientAngle}deg` }}>
                <p className="fontLogo1">olga</p>
                <img className="logoOne" src="..\src\assets\czarne3.png" alt="logo" />
                <p className="fontLogo2">bisaga</p>
            </div>
            <NavDown />
        </>
    );
};

export default One;
