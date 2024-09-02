// import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from './components/Header';
// import Home from './components/Home';
// import MovieDetail from './components/MovieDetail';
// import Login from './components/Login';

// export default function App() {
//   return (
//     <div className='app'>
//       <Router>
//         <Routes>
//           <Route path='/login' element={<Login/>}/>
//           <Route path='/' element={<><Header/><Home/></>}/>
//           <Route path="/movie/:id" element={<><MovieDetail/></>} /> 
//         </Routes>
//       </Router>
//     </div>
//   )
// }



import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Header from './components/Header';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import Login from './components/Login';
import { auth } from './Firebase'; 
import Signup from './components/Signup';

// This component handles authentication and redirects
function AuthWrapper({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login'); // Redirect to login if the user is not authenticated
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [navigate]);

  return children; // Render the children components 
}

export default function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<><AuthWrapper><Header/><Home/></AuthWrapper></>}/>
          <Route path="/movie/:id" element={<><MovieDetail/></>} /> 
        </Routes>
      </Router>
    </div>
  )
}

// export default function App() {
//   return (
//     <div className='app'>
//       <Router>
//         <Routes>
//           <Route path='/login' element={<Login />} />
          
//           {/* Wrap your protected routes with AuthWrapper */}
//           <Route path='/' element={<AuthWrapper>
//                 <Header />
//                 <Home />
//               </AuthWrapper>
//             } 
//           />
          
//           <Route path="/movie/:id" element={<MovieDetail />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }
