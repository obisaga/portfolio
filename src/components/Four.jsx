import React from 'react';
import NavUp from '../components/NavUp';
import NavDown from '../components/NavDown';
import '../styles/stylesheet.css';

const Four = () => {
    return (
        <div className='pageFour'>
            <NavUp />
            <div className="containerFour">
                <div className="pageNumber pageNumber4">04</div>
                <div className='navPage3'>
                    <div>
                        <img className="logoPage3" src="..\src\assets\czarne3.png" alt="logo" />
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
                            <p className='menuItem'>HOME</p>
                            <p className='menuItem'>ABOUT</p>
                            <p className='menuItem'>SKILLS</p>
                            <p className='menuItem'>WORKS</p>
                            <p className='menuItem'>CONTACT</p>
                        </div>
                    </div>
                </div>
                <div className='worksSection'>
                    <div>
                        <ul className='worksHeader'>WORKS</ul>
                        <li className='worksListing'>E-commerce Jewellery Shop</li>
                        <li className='worksListing'>Contact Form</li>
                        <li className='worksListing'>Website Designs</li>
                        <li className='worksListing'>Branding</li>
                        <li className='worksListing'>Logo Ideas</li>
                         </div>
                   
                    <img className="diagonal2" src="..\src\assets\lancuch.png" alt="diagonal" />
                </div>
            </div>
            <NavDown />
        </div>
    );
};

export default Four;
