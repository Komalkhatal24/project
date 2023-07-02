import './register.css'
import img from './images/RegisterAvatar 1.png';

import { Link } from 'react-router-dom';

function Register()
{

return(
    <>
     <div className="main-div">
     <h1 className='heading'>Welcome To <span> StudyMonk</span></h1>
        <div className="sub-div">
          <div className='left-div'>
            <h1 className='header'>Register</h1>
            <input type='text' placeholder=' Your Name'></input>
             <input type='email'placeholder=' Email'></input>
             
             <input type='password'placeholder=' Password'/>
            
              
             <input
             type='password'placeholder=' Re-type Password'></input>
             <button className='register'>Register</button>
            
            <div className='para'>
            Do you already have an account?
            <Link to="/login">
              
                 Login Here.
              
            </Link>
              </div>
           
           

          </div>
          <div className='right-div'>
            <img src={img} alt="" />
          </div>
        </div>
     </div>
    </>
)



};
export default Register;