import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector} from "react-redux";

import "../../CSS/Profile.css";
import { ProgressSteps } from '../ProgressSteps';
import { LoadingSpinner } from "../LoadingSpinner";


export const Profile = () => {
    const { user,loading } = useSelector( (state)=>state.user)
  return (
    <>
    <ProgressSteps />
    {loading && <LoadingSpinner/>}

    { user && !loading && (
        <div className="row justify-content-around mt-5">
            <div className="col-6 col-md-6 profile">
                <div className="avatars">
                    <div className="avatar-profile text-center mr-2">
                        <img 
                        src={user.avatar.url}
                         alt="avatar"
                         className='rounded-circle  figure-img img-fluid'/>
                    </div>
                    <h3>Welcome User</h3>
                   
                </div>
                <div className="userinfo">
                    <h4>Full name </h4>
                    <p>{user.name}</p>

                    <h4> Email </h4>
                    <p>{user.email}</p>

                    <h4>Phone Number </h4>
                    <p>{user.phoneNumber}</p>

                    <div className="buttons">
                        <Link
                         to="/editprofile"
                        className='btn btn-block my-5 '
                        id="edit_profile">
                            Edit Profile
                        </Link>
                        
                        <Link
                         to="/user/updatepassword" 
                        className="btn btn-block my-5 mx-4">
                            Change Password
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    )}


    </>
  )
}

