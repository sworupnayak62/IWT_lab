import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";





export const Question = () => {
    let navigate = useNavigate()

    const [text,setText]= useState("");

    function getQuestion() {
        axios.get("http://localhost:3000/api/Questions/Get/Question?id=1&qid=3", { crossdomain: true}).then(response => {
            setText(JSON.stringify(response.data.QuestionData[0].Question))
        })
    }

  return (
    <div className='row'>
        <div className='col-6'>
            <div className='row'>
                <button onClick={getQuestion}>Save</button> 
                <div className='col-4'>
                    <h5>{text}</h5>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <h5>Question1</h5>
                </div>
                <div className='col-3'>
                    <h5>Question1</h5>
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <h5>Question1</h5>
                </div>
            </div>
        </div>
        <div className='col-5'></div>
    </div>
  )
}

export default Question
