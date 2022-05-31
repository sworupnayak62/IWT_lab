import React, {useState} from 'react'
import "./Login.css"
import img1 from "../Img/img-1.png"
import "./Signup"

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    
  
  
  
  <div className="container-fluid login-box">
        <div className='shadow-lg p-3 mb-5 bg-body rounded box'>
          <div className='row d-flex justify-content-center align-items-center'>
            <div className='col'>
              <img src={img1} className="img-fluid mt-5"></img>
            </div>
            <div className='col-5'>
              <form action="./subject" method="" className='mt-4'>
               <div className="form-h1">
                    <h1>LOG IN</h1>
                  </div>
                  <input type="email" className="form-control my-4" placeholder="@email"></input>
                  <input type="password" className="form-control my-4" placeholder="Password"></input>
                  <button className='btn btn-primary fs-4 px-4' >LogIn</button>

                  <div className='form-text fs-4 mt-4'>Create a new Account.<a href='./signup'>SignUp</a></div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login