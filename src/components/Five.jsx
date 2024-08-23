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
                    <p className='header'>
                        let's<br />connect!
                       
                        
                    </p>
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



// import React, { useState, useEffect } from 'react';
// import NavUp from '../components/NavUp';
// import NavDown from '../components/NavDown';
// import '../styles/stylesheet.css';

// const Five = () => {
//     const [gradientAngle, setGradientAngle] = useState(90); 

//     const handleMouseMove = (e) => {
//         const x = e.clientX;
//         const y = e.clientY;
//         const angle = Math.atan2(y - window.innerHeight / 2, x - window.innerWidth / 2) * (180 / Math.PI) + 180;
//         setGradientAngle(angle);
//     };

//     useEffect(() => {
//         window.addEventListener('mousemove', handleMouseMove);

//         // Usuń nasłuchiwanie przy demontażu komponentu
//         return () => window.removeEventListener('mousemove', handleMouseMove);
//     }, []);
//     return (
//         <div className='pageFive'>
//             <NavUp />
//             <div className="containerFive">
//                 <div className="pageNumber pageNumber5">05</div>
//                 <div className='navPage5'>
//                     <div>
//                         <img className="logoMenu" src="..\src\assets\czarne3.png" alt="logo" />
//                     </div>
//                     <div className="listPage5">
//                         <div>
//                             <p className='numberPage5'>01</p>
//                             <p className='numberPage5'>02</p>
//                             <p className='numberPage5'>03</p>
//                             <p className='numberPage5'>04</p>
//                             <p className='numberPage5'>05</p>
//                         </div>
//                         <div>
//                             <p className='menuItem5 mI'>HOME</p>
//                             <p className='menuItem5 mI'>ABOUT</p>
//                             <p className='menuItem5 mI'>SKILLS</p>
//                             <p className='menuItem5 mI'>WORKS</p>
//                             <p className='menuItem5 mI'>CONTACT</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='contact' style={{ '--gradient-angle': `${gradientAngle}deg` }}>
//                     <p className='header'>let's<br />connect! </p>
//                     <div className="contactLinks">
//                         <p className="links">
//                             <span className="stretched">Xing</span><br />
//                             <span className="stretched-medium">LinkedIn</span><br />
//                             <span className="stretched-small">GitHub</span>
//                         </p>
//                         <p className="links mail">o.bisaga@gmail.com</p>
//                     </div>



//                 </div>
//             </div>
//             <NavDown />
//         </div>
//     );
// };

// export default Five;