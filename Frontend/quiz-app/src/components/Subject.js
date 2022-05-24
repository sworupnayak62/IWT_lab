import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'


export const Subject = () => {
    let navigate = useNavigate();
  return (
      <>
        <Navbar />
        <div>
            <div className='row d-flex align-items-center justify-content-center'>
            <div className="card col-4">
                <button type='button' className='btn' 
                onClick={() =>navigate("/question")}>
                    <div className="card-body">
                    <h3>Subject1</h3>
                </div></button>
            </div>
            <div className="card col-4">
                <button type='button' className='btn' 
                onClick={() =>navigate("/question")}>
                    <div className="card-body">
                    <h3>Subject2</h3>
                </div></button>
            </div>
            <div className="card col-4">
                <button type='button' className='btn' 
                onClick={() =>navigate("/question")}>
                    <div className="card-body">
                    <h3>Subject3</h3>
                </div></button>
            </div>
            <div className="card col-4">
                <button type='button' className='btn' 
                onClick={() =>navigate("/question")}>
                    <div className="card-body">
                    <h3>Subject4</h3>
                </div></button>
            </div>
            <div className="card col-4">
                <button type='button' className='btn' 
                onClick={() =>navigate("/question")}>
                    <div className="card-body">
                    <h3>Subject5</h3>
                </div></button>
            </div>
            </div>
        </div>

      </>
  )
}

export default Subject