import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import "./Login.css"
import img1 from "../Img/img-1.png"
import "./Signup"

export const Login = () => {
  const [UserEmail, setEmail] = useState('');
    const [UserPassword, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();


    const Auth = async (e) => {
      e.preventDefault();

      const data = JSON.stringify({
        "UserEmail":UserEmail,
        "UserPassword": UserPassword
      })

      console.log(data)

      try {
          await axios.post('http://localhost:3000/api/Users/Login',
            data,
            {"headers": {
              "content-type": "application/json",
              }});
          navigate("/subject")
      } catch (error) {
          if (error.response) {
              setMsg(error.response.data.msg);
          }
      }
  }


  return (
    
  
  
  
  <div className="container-fluid login-box">
        <div className='shadow-lg p-3 mb-5 bg-body rounded box'>
          <div className='row d-flex justify-content-center align-items-center'>
            <div className='col'>
              <img src={img1} className="img-fluid mt-5"></img>
            </div>
            <div className='col-5'>
              <form onSubmit={Auth} className='mt-4'>
               <div className="form-h1">
                    <h1>LOG IN</h1>
                  </div>
                  <input type="email" className="form-control my-4" placeholder="@email" value={UserEmail} onChange={(e) => setEmail(e.target.value)} ></input>
                  <input type="password" className="form-control my-4" placeholder="Password" value={UserPassword} onChange={(e) => setPassword(e.target.value)}></input>
                  <button type='Submit' className='btn btn-primary fs-4 px-4' >LogIn</button>

                  <div className='form-text fs-4 mt-4'>Create a new Account.<a href='./signup'>SignUp</a></div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login