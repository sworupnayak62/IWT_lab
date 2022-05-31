import React from 'react'
import "./Login.css"
import img2 from "../Img/Img-2.png"
import "./Signup"

export const Signup = () => {
  return (
    <div className="container-fluid signup-box">
        <div className='shadow-lg p-3 mb-5 bg-body rounded box'>
          <div className='row d-flex justify-content-center align-items-center mt-5'>
            <div className='col-5'>
              <form action="" method="post" className='ps-2'>
               <div className="form-h1">
                    <h1>SIGN UP</h1>
                  </div>
                  <input type="text" className="form-control my-4" placeholder="Full Name"></input>
                  <input type="email" className="form-control my-4" placeholder="@email"></input>
                  <input type="password" className="form-control my-4" placeholder="Password"></input>
                  <button className='btn btn-primary fs-4 px-4'>SignUp</button>

                  <div className='form-text fs-4 mt-4'>Already have an Account?<a href='./'>LogIn</a></div>
              </form>
            </div>
            <div className='col'>
              <img src={img2} className="img-fluid"></img>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Signup