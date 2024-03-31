import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../Store/User/user-action';
import { toast } from 'react-toastify';

import mailSentImg from "./mail.jpg"

export const ForgotPassword = () => {

    const [ email , setEmail ] = useState("");
    const [ emailSent , setEmailSent ] = useState(false); 
    const dispatch = useDispatch();
 

    const submitHandler = (e)=>
    {
        e.preventDefault();
        dispatch(forgotPassword(email));
        setEmailSent(true);
        toast.success("Email Sent Successfully");
      
    }


  return (
    <>
    <div className="row wrapper">
        <div className="col-10 col-lg-5 ">
            {
                !emailSent ?(
                    <form onSubmit={submitHandler}>
                        <h1 className='password_title'>Forgot Password</h1>
                        <div className="form-group">
                            <label htmlFor="email_field">Email</label>

                            <input 
                            type="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            id="email_field"
                            required
                            className='form-control' />
                            <button 
                            id="forgot_password_button"
                            type="submit"
                            className='btn-block py-3 mt-3 password-btn'


                            >
                                Send Email
                            </button>

                        </div>

                    </form>
                ):(
                    <div className=" row wrapper align-items-center mt-3">Email Sent ! Please Check your mailbox
                    <img style={{"width":"400px"}} src={mailSentImg} alt="" />
                    </div>
                    
                )
            }
        </div>
    </div>
    </>
  )
}
