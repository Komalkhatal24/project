import { Link } from 'react-router-dom';
import React from 'react';
import './login.css';
import img from './images/LoginAvatar 1.png';

function Login()
{

   return(

    <>
       <div className="main-div">
         <h1 className='heading'>Welcome back to <span className='color-primary'> StudyMonk</span></h1>
         <div className="sub-div">
            <div className="left-login">
               <img src={img} alt="graphic" />
            </div>
            <div className="right-login">
               <form>
            <h1>Login Here</h1>
            <input type='email'placeholder='Email'></input>
            <input
             type='password'placeholder='Password'></input>
             <div className='login'>
               <button>Login</button>
             </div>

             <p>Don't have an account? <Link to="/register">Register</Link></p>
             </form>
            </div>
           
         </div>
      
       </div>

    </>

   )



};
export default Login;
