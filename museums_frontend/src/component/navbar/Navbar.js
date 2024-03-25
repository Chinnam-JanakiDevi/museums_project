// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';

// import Home from '../home/Home';
// import About from '../about/About';
// import Museums from '../Museums/Museums';
// import Login from '../login/Login';
// import Registration from '../registration/Registration';
// import './Navbar.css';
// function Navbar() {


//   return (
//     <>
//       {/* <div className="abc">
//         <div className='head'>
//           <h1>Museums</h1>
//         </div>
//         <div className="search">
//           <form action="#">
//             <input type="text" placeholder=" Enter city/state" name="search"></input>
//             <button>
//               <i className="fa fa-search" style={{ fontSize: '18px' }}></i>
//             </button>
//           </form>
//         </div>
//         <div>
//           <Link to="/Home" >Home</Link>
//           <Link to="/About" >About</Link>
//           <Link to="/Museums" >Museums</Link>
//           <Link to="/Registration" style={{ marginTop: '4px' }}>
//             <button style={{ backgroundColor: 'brown', padding: '7px', color: 'azure' }}>
//               <i className="fa-solid fa-registered"></i>Register
//             </button>
//           </Link>
//           <Link to="/Login" style={{ marginTop: '4px' }}>
//             <button style={{ backgroundColor: 'brown', padding: '7px', color: 'azure' }}>
//               <i className="fa fa-fw fa-user"></i>Login
//             </button>
//           </Link>
//         </div>
//       </div> */}
//       <div class="topnav">

//         {/* <div className="topnav-centered">
//           <div className="search">
//             <form>
//               <input type="text" placeholder=" Enter city/state" name="search"></input>
//               <button>
//                 <i className="fa fa-search" style={{ fontSize: '18px' }}></i>
//               </button>
//             </form>

//           </div>
//         </div> */}


//         <div class="topnav-right">
//           <Link to="/Home" >Home</Link>
//           <Link to="/About" >Hotels</Link>
//           <Link to="/Museums" >Museums</Link>
//           <Link to="/Museums" >Map</Link>
//           <Link to="/Registration" >
//             <button style={{ backgroundColor: 'brown', color: 'azure' }}>
//               <i className="fa-solid fa-registered"></i>Register
//             </button>
//           </Link>
//           <Link to="/Login" >
//             <button style={{ backgroundColor: 'brown', color: 'azure' }}>
//               <i className="fa fa-fw fa-user"></i>Login
//             </button>
//           </Link>
//         </div>

//       </div>

//       <Routes>
//       <Route exact path="/" element={<Home />} />
//         <Route exact path="/Home" element={<Home />} />
//         <Route exact path="/About" element={<About />} />
//         <Route exact path="/Museums" element={<Museums />} />
//         <Route exact path="/Login" element={<Login />} />
//         <Route exact path="/Registration" element={<Registration />} />
//       </Routes>
//     </>
//   );
// }

// export default Navbar;

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from '../home/Home';
import About from '../about/About';
import Museums from '../Museums/Museums';
import Login from '../login/Login';
import Registration from '../registration/Registration';
import Map from '../map/Map';
import Tourism from '../tourism/Tourism';
import Places from '../touristplaces/Places';
import './Navbar.css';
function Navbar() {


  return (
    <>

      <div class="topnav">
        <div class="topnav-right">
          <Link to="/Home" >Home</Link>
          <Link to="/About" >Hotels</Link>
          <Link to="/Museums" >Museums</Link>
          <Link to="/Places" >Tourist Places</Link>
          <Link to="/Map" >Hotels Map</Link>
          <Link to="/TourismMap" >Tourism Map</Link>
          {/* <Link to="/Registration" >
            <i className="fa-solid fa-registered"></i>Register
          </Link> */}
          <Link to="/Login" >
            <i className="fa fa-fw fa-user"></i>SignIn/SignUp
          </Link>
        </div>

      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Places" element={<Places />} />
        <Route exact path="/Map" element={<Map />} />
        <Route exact path="/Museums" element={<Museums />} />

        <Route exact path="/TourismMap" element={<Tourism />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default Navbar;

