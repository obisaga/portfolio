import React from 'react';
import NavUp from '../components/NavUp';
import NavDown from '../components/NavDown';
import '../styles/stylesheet.css';

const Five = () => {
    return (
        <div className='pageFive'>
            <NavUp />
            <div className="containerFive">
                <div className="pageNumber pageNumber5">05</div>
                <div className='navPage5'>
                    <div>
                        <img className="logoMenu" src="..\src\assets\czarne3.png" alt="logo" />
                    </div>
                    <div className="listPage5">
                        <div>
                            <p className='numberPage5'>01</p>
                            <p className='numberPage5'>02</p>
                            <p className='numberPage5'>03</p>
                            <p className='numberPage5'>04</p>
                            <p className='numberPage5'>05</p>
                        </div>
                        <div>
                            <p className='menuItem5 mI'>HOME</p>
                            <p className='menuItem5 mI'>ABOUT</p>
                            <p className='menuItem5 mI'>SKILLS</p>
                            <p className='menuItem5 mI'>WORKS</p>
                            <p className='menuItem5 mI'>CONTACT</p>
                        </div>
                    </div>
                </div>

                <div className='contact'>
                    <p className='header'>let's<br />connect! </p>
                    <div className="contactLinks">
                        <p className="links">
                            <span className="stretched">Xing</span><br />
                            <span className="stretched-medium">LinkedIn</span><br />
                            <span className="stretched-small">GitHub</span>
                        </p>
                        <p className="links mail">o.bisaga@gmail.com</p>
                    </div>



                </div>
            </div>
            <NavDown />
        </div>
    );
};

export default Five;
