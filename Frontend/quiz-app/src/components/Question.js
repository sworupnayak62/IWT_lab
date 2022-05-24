import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Question = () => {
    let navigate = useNavigate()
  return (
    <div className='row'>
        <div className='col-6'>
            <div className='row'>
                <div className='col-4'>
                    <h5>Question1</h5>
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
