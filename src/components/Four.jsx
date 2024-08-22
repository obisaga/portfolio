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
                        <img className="logoMenu" src="..\src\assets\czarne3.png" alt="logo" />
                    </div>
                    <div className="listPage3">
                        <div>
                            <p className='numberPage4'>01</p>
                            <p className='numberPage4'>02</p>
                            <p className='numberPage4'>03</p>
                            <p className='numberPage4'>04</p>
                            <p className='numberPage4'>05</p>
                        </div>
                        <div>
                            <p className='menuItem4 mI'>HOME</p>
                            <p className='menuItem4 mI'>ABOUT</p>
                            <p className='menuItem4 mI'>SKILLS</p>
                            <p className='menuItem4 mI'>WORKS</p>
                            <p className='menuItem4 mI'>CONTACT</p>
                        </div>
                    </div>
                </div>



                
                <div className='worksSection'>
                    <div>
                        <ul className='worksHeader'>WORKS</ul>
                        <li className='worksListing'>E-commerce Jewellery Shop</li><br/>
                        <li className='worksListing'>Contact Form</li><br/>
                        <li className='worksListing'>Website Designs</li><br/>
                        <li className='worksListing'>Branding</li><br/>
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
