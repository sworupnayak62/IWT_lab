import React from 'react'
import "./Question"
import { useLocation } from 'react-router-dom'
import Navbar from "./Navbar"
import "./Mark.css"

export const Mark = () => {
    const location = useLocation()
    const mark = location.state.Mark

  return (
    <>
      <Navbar />
      <div className='d-flex justify-content-center align-items-center'>
      <div className='card card-mark border-0 mark-box'>
        <div className='card-header fs-1'><h1 className='text-center'>Your Mark</h1></div>
        <div className='card-body'>
          <h1>{mark}/5</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default Mark