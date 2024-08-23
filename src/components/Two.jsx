import React from 'react';
import NavUp from '../components/NavUp';
import NavDown from '../components/NavDown';
import '../styles/stylesheet.css';

const Two = () => {
    return (
        <div className='pageTwo'>
            <NavUp />
            <div className="containerTwo">
                <div className="pageNumber pageNumber2">02</div>
                <div className='navPage2'>
                    <div>
                        <img className="logoMenu" src="..\src\assets\czarne3.png" alt="logo" />
                    </div>
                    <div className="listPage2">
                        <div>
                            <p className='numberPage2'>01</p>
                            <p className='numberPage2'>02</p>
                            <p className='numberPage2'>03</p>
                            <p className='numberPage2'>04</p>
                            <p className='numberPage2'>05</p>
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
                <div className='about'>
                    <p className='description'>
                        Hi! My name is Olga and I am currently based in Osnabruck, Germany.
                        I have a strong vision to help others and I want to achieve that with the use of new technologies and art.
                        In my free time I craft silver jewellery and enjoy forest walks.
                    </p>
                </div>
            </div>
            <NavDown />
        </div>
    );
};

export default Two
