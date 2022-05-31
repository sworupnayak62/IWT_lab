import React from 'react'
import Navbar from "./Navbar";
import "./Home.css";
import imgbg from "./home.png";
import Login from './log/Login';
import { useNavigate } from 'react-router-dom';




export const Home = () => {
  let navigte = useNavigate();
  return (
    <div>
      <Navbar />
      <div className='m-0 d-flex justify-content-center align-items-center'>
          <div className='row'>
            <div className='col-5  d-flex justify-content-center align-items-center'>
              <div className='home-text'>
                <span className="Q">Q</span>
                <span className='uiz'>uiz</span>
                <span  className='M'>Mania</span>
                <div><h3>The Group-10 Quiz application by Sworup, Rakesh, Ayus & Risabh</h3></div>
              </div>
              
              
               
            </div>

            
            <div className='col login'>
                <Login />
            </div>
            
          </div>
      </div>
        
    </div>
  )
}

export default Home