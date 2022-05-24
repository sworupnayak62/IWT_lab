import React from 'react'
import Navbar from "./Navbar";
import "./Home.css";
import imgbg from "./home.png";
import { useNavigate } from 'react-router-dom';




export const Home = () => {
  let navigte = useNavigate();
  return (
    <div>
      <Navbar />
      <div className='container'>
          <div className='row'>
            {/* <div className='col-6'>s</div> */}
            <div className='col-6  d-flex justify-content-center align-items-center start-btn'> <button type="button" className="btn btn-primary" 
            onClick={() =>
              navigte("/subject")
            }>Start</button> </div>

            
            <div className='col-6 '>
                <img src={imgbg} className='img-fluid' alt='/'></img>
            </div>
            
          </div>
      </div>
        
    </div>
  )
}

export default Home