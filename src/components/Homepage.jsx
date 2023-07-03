import React from 'react';
import './homepage.css';
import image from './images/image.png';
import ATS from './images/ATS.png';
import SaveTime from './images/SaveTime.png';
import collab from './images/collab.png';
import candidate from './images/candidate.png';
import { Link } from 'react-router-dom';
import Footer from './Footer';


function Homepage() {
  return (
    <div>
        <nav className='navbar'>
           <div className='left-nav'>
            <h1 className='heading'>StudyMonk</h1>
           </div>
           <div className='right-nav'>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <Link to="/login">
            <li>Login</li>
            </Link>
            <Link to="/register">
            <li>Signup</li>
            </Link>
        </ul>
           </div>
        </nav>
        <hr/>
        <div className='main-content'>
            <div className='left-content'>
                <h1>Are You <span className='voilet'>tired</span> of traditional <span className='voilet'>recruitment</span> methods</h1>
                <p>say goodbye to endless paperwork,manual screening and time-consuming interviews .our online recruitment solution revoultionizes the way you hire, making it faster ,more efficient and hassle-free</p>
            </div>
            <div className='right-content'>
            <img src={image} alt="image can't be loaded"/>
                
            </div>
        </div>
        <div className='down'>
          <div className='title'>
            <h1 className='heading'>
              Benifits
            </h1>
          </div>
          <div className='down-content'>
            <div className='img-content'>
            <div className='img-co'>
              <img className='images' src={ATS} alt="image can't be loaded"/>
              <br/>
              <p> Streamline Your Hiring 
               Process With Our Cutting-edge ATS
              </p>
              </div>
              <div className='img-co'>
              <img className='images' src={SaveTime} alt="image can't be loaded"/>
              <br/>
              <p> Save time and effort by leveraging our 
               intelligent job matching technology
              </p>
              </div>
              <div className='img-co'>
              <img className='images' src={collab} alt="image can't be loaded"/>
              <br/>
              <p> Simplify Collaboration Between Hiring
               managers and HR professional
              </p>
              </div>

              <div className='img-co'>
              <img className='images' src={candidate} alt="image can't be loaded"/>
              <br/>
              <p> Effortlessly Schudable Interviews With 
            Candidate through Our integrated 
              System
              </p>
              </div>
              </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Homepage
