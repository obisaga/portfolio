import React, { useState, useEffect } from 'react';
import NavUp from '../components/NavUp'
import NavDown from '../components/NavDown'



const Two = () => {

    return (

        <div className='pageTwo'>
<NavUp/>


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

                    <p className='description'>Hi! My name is Olga and I am currently based in Osnabruck, Germany.
                        I have a strong vision to help others and I want to achieve that with the use of new technologies and art.
                        I have a strong vision to help others and I want to achieve that with the use of new technologies and art.
                    </p>

                </div>




            </div>







            <NavDown/>
        </div>
    )

};
export default Two











