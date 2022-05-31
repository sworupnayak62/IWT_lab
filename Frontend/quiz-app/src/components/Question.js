import React, { useState,useRef } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import axios from "axios";
import "./Question.css";
import imgbg from "./Img/BAckground.png"



export const Question = () => {
    let navigate = useNavigate()
    const location = useLocation()
    const ref = useRef(null) 

    const [qstn,setQuestion]= useState("");
    const [opt1,setOption1]= useState("");
    const [opt2,setOption2]= useState("");
    const [opt3,setOption3]= useState("");
    const [opt4,setOption4]= useState("");
    const [ans,setAnswer]= useState("");
    const [mark,setMark]= useState(0);

    function getQuestion(qid) {

        const id = location.state.id
        axios.get("http://localhost:3000/api/Questions/Get/Question?id="+`${id}`+"&qid="+`${qid}`, { crossdomain: true}).then(response => {
            setQuestion(JSON.stringify(response.data.QuestionData[0].Question))
            setOption1(JSON.stringify(response.data.QuestionData[0].Option1))
            setOption2(JSON.stringify(response.data.QuestionData[0].Option2))
            setOption3(JSON.stringify(response.data.QuestionData[0].Option3))
            setOption4(JSON.stringify(response.data.QuestionData[0].Option4))
            setAnswer(JSON.stringify(response.data.QuestionData[0].Answer))
        })
    }
    let answer = ""
    // let mark = 0

    const handleClick = value => () => {
        answer = value

    }

    function checkAnswer() {
        console.log(answer)
        console.log(ans)
        if (answer === ans){
            setMark(mark + 1)
        }
    }

    function changeColor(id) {
        
    }

  return (
      <div className='container Question-box'>
    <div className='row'>
        <div className='col me-5 q-box'>
            
            <div className='card border-0'>
                <div className='card-header p-4 rounded-3'>
                    <h2 className=' fw-semibold'>{qstn}</h2>
                </div>
                <div className='card-body border-0 '>
                    <button className='option btn border-start-0 my-4 p-2 mt-5 rounded-0  border-end-0 text-start px-4' onClick={handleClick(opt1)}><h4 className='fw-semibold'>A:{opt1}</h4></button>
                    <button className='option btn border-start-0 my-4 p-2 rounded-0  border-end-0 text-start px-4' onClick={handleClick(opt2)}><h4 className='fw-semibold'>B:{opt2}</h4></button>
                    <button className='option btn border-start-0 my-4 p-2 rounded-0  border-end-0 text-start px-4' onClick={handleClick(opt3)}><h4 className='fw-semibold'>C:{opt3}</h4></button>
                    <button className='option btn border-start-0 my-4 p-2 mb-5 rounded-0  border-end-0 text-start px-4' onClick={handleClick(opt4)}><h4 className='fw-semibold'>D:{opt4}</h4></button>
                    <button className='btn btn-primary my-5' id='save' onClick={() => {
                        checkAnswer()
                    }}><h4 className='fw-semibold'>Save</h4></button>
                </div>
            </div>
        </div>
        <div className='col-4 qno'>
            <div className='row'>
                <div className='col d-flex align-items-center justify-content-center ms-5 shadow-lg p-3 mb-5 bg-body rounded'>
            <button onClick={() => getQuestion(1)} className="btn m-3 py-3 fs-4 fw-semibold" id='btn1'>1</button>
            <button onClick={() => getQuestion(2)} className="btn m-3 py-3 fs-4 fw-semibold" id='btn2'>2</button>
            <button onClick={() => getQuestion(3)} className="btn m-3 py-3 fs-4 fw-semibold" id='btn3'>3</button>
            <button onClick={() => getQuestion(4)} className="btn m-3 py-3 fs-4 fw-semibold" id='btn4'>4</button>
            <button onClick={() => getQuestion(5)} className="btn m-3 py-3 fs-4 fw-semibold" id='btn5'>5</button>
            </div>
            </div>
            <div className=' row submit'>  
                <button className='btn m-4 ms-5' onClick={ () => navigate("/mark", {state: {Mark: mark}})} ><h4 className='fs-3 fw-semibold'>Final Submit</h4></button>
            </div>
        </div>
    </div>
    </div>

  )
}

export default Question
