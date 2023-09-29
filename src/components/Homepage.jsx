import React from 'react';
import './homepage.css';
// import logo from './images/logo.png'
import { Link } from 'react-router-dom';
import image from './images/image.png'

function Homepage() {
  return (
    <div>
      <nav className='navbar'>
        <div className='left-nav'>
          <h1 className='heading'>
           CampusXchange
           {/* <marquee>Let's connect Together...</marquee> */}
          </h1>
          {/* <div classname='all'>
          <marquee>Let's connect Together...</marquee>
          </div> */}
        </div>
        <div className='right-nav'>
          <ul>
            

            <Link to="/LoginPage">
              <li>Login</li>
            </Link>
            <Link to="/register"> 
              <li>Signup</li>
             </Link>
          </ul>
        </div>
      </nav>
      <hr />
      <div classname='all'>
          <marquee>Let's connect Together...</marquee>
          </div>
      <div className='main-content'>
        <div className='left-content'>
          <h1>"CampusXchange "<span className='voilet'> innovative networking platform </span> </h1>
          <p> This platform provides a dynamic space for students to create and maintain comprehensive profiles, interact with their peers, and share a wide range of content, including posts, achievements, interview experiences, blogs, and more. </p>
        </div>
        <div className='right-content'>
          <img src={image} alt="image can't be loaded" />

        </div>
      </div>
   

      </div>



  )
}
export default Homepage
