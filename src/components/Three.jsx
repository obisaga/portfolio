import React from 'react';
import NavUp from '../components/NavUp';
import NavDown from '../components/NavDown';

import '../styles/stylesheet.css';

const Three = () => {
    return (
        <div className='pageThree'>
            <NavUp />
            <div className="containerThree">
                <div className="pageNumber pageNumber3">03</div>
                <div className='navPage3'>
                    <div>
                        <img className="logoMenu" src="..\src\assets\czarne3.png" alt="logo" />
                    </div>
                    <div className="listPage3">
                        <div>
                            <p className='numberPage3'>01</p>
                            <p className='numberPage3'>02</p>
                            <p className='numberPage3'>03</p>
                            <p className='numberPage3'>04</p>
                            <p className='numberPage3'>05</p>
                        </div>
                        <div>
                            <p className='menuItem mI'>HOME</p>
                            <p className='menuItem mI'>ABOUT</p>
                            <p className='menuItem mI'>SKILLS</p>
                            <p className='menuItem mI'>WORKS</p>
                            <p className='menuItem mI'>CONTACT</p>
                        </div>
                    </div>
                </div>
                <div className='aboutSkill'>
                    <div>
                        <ul>Graphic Design</ul>
                        <li>Website wireframes</li>
                        <li>Logo & brand identity</li>
                        <li>Business cards</li>
                        <li>Book covers</li>
                        <li>Posters, patterns etc.</li>
                        <li className='liSpecial'><span className="colorChange">Tools:</span> Photoshop CorelDraw InDesign <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Figma Blender</li>
                    </div>
                    <div>
                        <ul>Web Development</ul>
                        <li><span className="colorChange">Frontend:</span> JavaScript + React HTML CSS</li>
                        <li><span className="colorChange">Backend:</span> Node.js + Express</li>
                        <li><span className="colorChange">Databases:</span> MongoDB PostgreSQL</li>
                        <li><span className="colorChange">CMS:</span> Contentful</li>
                    </div>
                    <img className="diagonal1" src="..\src\assets\lancuch.png" alt="diagonal" />
                </div>
            </div>
            <NavDown />
        </div>
    );
};

export default Three;
