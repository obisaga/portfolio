import React, { useState, useEffect } from 'react';
import '../styles/three.css'



const Three = () => {

    return (
        <>
            <div className="containerOne">

                <div className="navUp">
                    <p className="fontPOne">GER</p>
                    <p className="fontPOne">⁞</p>

                </div>

                <div className="middleSec">


                    <p className="fontSLogo">olga</p>
                    <img className="logoOne" src="..\src\assets\czarny.png" alt="logo" />
                    <p className="fontSLogo"> bisaga</p>

                </div>



                <div class="navDown">
                    <p class="fontSOne">UX/UI Designer ⁞ Full Stack Web Developer</p>
                    <div class="group-right">
                        <p class="fontDOne">PORTFOLIO</p>
                        <p class="fontDOne">RESUME</p>
                    </div>
                </div>


            </div>


        </>
    )

};
export default Three











