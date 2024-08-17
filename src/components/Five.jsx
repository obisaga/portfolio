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
                <div className='navPage3'>
                    <div>
                        <img className="logoPage3" src="..\src\assets\czarne3.png" alt="logo" />
                    </div>
                    <div className="listPage5">
                        <div>
                            <p className='numberPage3'>01</p>
                            <p className='numberPage3'>02</p>
                            <p className='numberPage3'>03</p>
                            <p className='numberPage3'>04</p>
                            <p className='numberPage3'>05</p>
                        </div>
                        <div>
                            <p className='menuItem'>HOME</p>
                            <p className='menuItem'>ABOUT</p>
                            <p className='menuItem'>SKILLS</p>
                            <p className='menuItem'>WORKS</p>
                            <p className='menuItem'>CONTACT</p>
                        </div>
                    </div>
                </div>
            
                <div className='contact'>
                <p className='header part1'>let's </p>
                <p className='header part2'>connect!</p>
                <p className='mail'>o.bisaga@gmail.com</p>
                {/* <img className="img2" src="..\src\assets\bigcitylife.png" alt="logo" /> */}
                   
                   
                </div>
            </div>
            <NavDown />
        </div>
    );
};

export default Five;
