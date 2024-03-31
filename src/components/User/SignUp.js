import React, { useEffect, useState } from 'react'
import {toast} from "react-toastify";

import { userActions } from '../../Store/User/user-slice';
import { getSignUp } from '../../Store/User/user-action';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export const SignUp = () => {

    const navigate = useNavigate();
    const { isAuthenticated , errors } = useSelector((state)=>state.user);
    const dispatch = useDispatch(); 

    const [user , setUser ] = useState(
        {
            name : "",
            email : "",
            password : "",
            passwordConfirm : "",
            phoneNumber : "",


        }
    );

    const { password , passwordConfirm } = user;

    const onChange = (e) =>
    {
        setUser( {...user, [e.target.name]: e.target.value , })
    }

    const submitHandler = async (e)=>
    {
        e.preventDefault();
        
        if(password !== passwordConfirm)
        {
            toast.error("Passwords does not match");
            return ;
        }
        dispatch(getSignUp(user));
        

    }

    useEffect( ()=>{
        if( errors && errors.length >0)
        {
            toast.error(errors);
            dispatch(userActions.clearError());

        }
        else if(isAuthenticated)
        {
            navigate("/");
            toast.success(" Signned Up successfully")

        }
    },[dispatch,errors,isAuthenticated,navigate]);
   return (
    <>

    <div className="row wrapper">
        <form 
        onSubmit={submitHandler}
        encType='multipart/form-data'
        className='col-20 col-lg-5'
        >
            <h1 className='mb-3'> Register</h1>
            {["name","email","password","passwordConfirm","phoneNumber"].map(
                (field)=>( 
                   
                    <div   className="form-group">
                        <label htmlFor={`${field}_field`}>
                            {field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>

                        <input 
                        type={field.includes("password")? "password":"text"  }
                        id={`${field}_field`}
                        name={field}
                        className='form-control'
                        value={user[field]}
                        onChange={onChange}
                         />
                    </div>


                )
            )}
            <button
            id="regiter_button"
            type="submit"
            className='loginbutton btn-block py-3'
            >
                REGISTER
            </button>


        </form>
    </div>
    
    
    </>
  )
}
