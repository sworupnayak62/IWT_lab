import React from 'react'
import Navbar from "./Navbar";
import "./Home.css";
import imgbg from "./home.png";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
          <div className='row'>
            <div className='col-6 '>Hi</div>
            <div className='col-6 '>
                <img src={imgbg} className='img-fluid' alt='/'></img>
            </div>
            
          </div>
      </div>
        
    </>
  )
}

export default Home