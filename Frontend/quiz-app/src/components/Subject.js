import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import "./Subject.css"
import phy from "./Img/phy.png"
import eng from "./Img/eng.png"
import math from "./Img/math1.png"
import chem from "./Img/chemistry.png"
import bio from "./Img/bio1.png"



export const Subject = () => {
    let navigate = useNavigate();
  return (
      <div className='container-fluid'>
        <Navbar />
        <div>
            <div className='row d-flex align-items-center justify-content-center subject-box'>
            <div className="card col-4 subject m-4 p-0">
                <button type='button border-0' className='btn' 
                onClick={() =>navigate("/question",{
                    state:{ id:1 }})}>
                    <div className="card-body">
                    <h3>English</h3>
                </div></button>
                <img src={eng} className="img2"></img>
            </div>
            <div className="card col-4 subject m-4 p-0">
                <button type='button border-0' className='btn' 
                onClick={() =>navigate("/question",{
                    state:{id:2}})}>
                    <div className="card-body">
                    <h3>Mathematics</h3>
                </div></button>
                <img src={math} className="img1"></img>
            </div>
            <div className="card col-4 subject m-4 p-0">
                <button type='button border-0' className='btn' 
                onClick={() =>navigate("/question",{
                    state:{id:3}})}>
                    <div className="card-body">
                    <h3>Physics</h3>
                </div></button>
                <img src={phy} className="img1"></img>
            </div>
            
            <div className="card col-4 subject m-4 p-0">
                <button type='button border-0' className='btn' 
                onClick={() =>navigate("/question",{
                    state:{id:4}})}>
                    <div className="card-body">
                    <h3>Chemistry</h3>
                </div></button>
                <img src={chem} className="img2"></img>
            </div>
            <div className="card col-4 subject m-4 p-0">
                <button type='button border-0' className='btn' 
                onClick={() =>navigate("/question",{
                    state:{id:5}})}>
                    <div className="card-body">
                    <h3>Biology</h3>
                </div></button>
                <img src={bio} className="img1"></img>
            </div>
            </div>
            </div>
        </div>

    //   </div>
  )
}

export default Subject