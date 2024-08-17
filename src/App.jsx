import React from 'react';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';


import './styles/stylesheet.css';
import './styles/responsiveness.css';

function App() {
  return (
    <div className="app">
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
    </div>
  );
}

export default App;



// import { Routes, Route} from "react-router-dom";
// import One from './components/One'
// import Two from './components/Two'
// import Three from './components/Three'
// import Four from './components/Four'
// import './styles/stylesheet.css'
// import './styles/responsiveness.css'


// function App() {

//   return (
//     <>


// <Routes>    
// <Route path="/home/" element={<One />} />
// <Route path="/about" element={<Two />} />
// <Route path="/skills" element={<Three />} />
// <Route path="/works" element={<Four />} />
// </Routes>

//     </>
//   )
// }

// export default App
