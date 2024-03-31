import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate,useParams } from 'react-router-dom';

import { resetPassword } from '../../Store/User/user-action';

export const ResetPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useParams();
    console.log(useParams());
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const submitHander = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            toast.error("Password does not match");
        }
        else
        {dispatch(resetPassword({ password, passwordConfirm }, token));
        toast.success("Password have been changed successfully");
        navigate("/login");}
    }
    return (
        <>
            <div className="row wrapper " >
                <div className="col-10 col-lg-5">
                    <form onSubmit={submitHander} className='shadow-lg'>
                        <h1 className='password_title'> Reset Password </h1>
                        <div className="formgroup mt-4">
                            <label htmlFor="password_field">
                                New Password
                            </label> 
                            <input
                               type="password"
                               id="password_field"
                               className='form-control'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                        </div>

                        <div className="formgroup mt-3">
                            <label htmlFor="confrim_password_field">
                                New Password Confirm
                            </label> 
                            <input
                               type="password"
                               id="confirm_password_field"
                               className='form-control'
                                value={passwordConfirm}
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                            />

                        </div>
                        <button
                         id="new_password_button"
                        type="submit"
                        className='btn-block py-3 password-btn mt-4'>Reset Password</button>

                    </form>
                </div>
            </div>
        </>
    )
}
