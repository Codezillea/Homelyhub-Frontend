import React from 'react'
import NotFoundImg from "../components/NotFound.jpg"
import { Link } from 'react-router-dom'
export const NotFound = () => {
  return (
    <div className="">
<div className=' align-items-center' style={{"text-align":"center","margin-top":"100px"}}>
        <h5 style={{fontSize:"50px"}}>Page Not Found</h5>
        <img  src={NotFoundImg} style={{"width":"50%","margin-left":"auto","margin-right":"auto"}} alt="" />
        <button className='btn btn-outline-success' ><Link className='text-dark' to="/">Back to home</Link></button>
    </div>
    </div>
    
  )
}
