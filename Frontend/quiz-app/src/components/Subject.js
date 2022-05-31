import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import "./Subject.css"


export const Subject = () => {
    let navigate = useNavigate();
  return (
      <div className='container-fluid'>
        <Navbar />
        <div>
            <div className='row d-flex align-items-center justify-content-center subject-box'>
            <div className="card col-4 subject m-4 p-0 border-0">
                <button type='button' className='btn' 
                onClick={() =>navigate("/question",{
                    state:{ id:1 }})}>
                    <div className="card-body">
                    <h3>English</h3>
                </div></button>
            </div>
            <div className="card col-4 subject m-4 p-0 border-0">
                <button type='button' className='btn' 
                onClick={() =>navigate("/question",{
                    state:{id:2}})}>
                    <div className="card-body">
                    <h3>Mathematics</h3>
                </div></button>
            </div>
            <div className="card col-4 subject m-4 p-0 border-0">
                <button type='button' className='btn' 
                onClick={() =>navigate("/question",{
                    state:{id:3}})}>
                    <div className="card-body">
                    <h3>Physics</h3>
                </div></button>
            </div>
            
            <div className="card col-4 subject m-4 p-0 border-0">
                <button type='button' className='btn' 
                onClick={() =>navigate("/question",{
                    state:{id:4}})}>
                    <div className="card-body">
                    <h3>Chemistry</h3>
                </div></button>
            </div>
            <div className="card col-4 subject m-4 p-0 border-0">
                <button type='button' className='btn' 
                onClick={() =>navigate("/question",{
                    state:{id:5}})}>
                    <div className="card-body">
                    <h3>Biology</h3>
                </div></button>
            </div>
            </div>
            </div>
        </div>

    //   </div>
  )
}

export default Subject