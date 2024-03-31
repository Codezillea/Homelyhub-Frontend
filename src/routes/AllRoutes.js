import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';

import { Main } from "../components/Home/Main";
import { PropertyList } from '../components/Home/PropertyList';
import { PropertyDetails } from '../components/PropertyDetails/PropertyDetails';
import { Login } from '../components/User/Login';
import { SignUp } from '../components/User/SignUp';
import { Profile } from '../components/User/Profile';//eslint-disable-line
import { EditProfile } from '../components/User/EditProfile';
import { UpdatePassword } from '../components/User/UpdatePassword';
import { ForgotPassword } from '../components/User/ForgotPassword';
import { ResetPassword } from '../components/User/ResetPassword';
import { Payment } from '../components/Payment/Payment';
import MyBookings from '../components/MyBookings/MyBookings';
import BookingDetails from '../components/MyBookings/BookingDetails';
import { NotFound } from '../components/NotFound';
import AccomodationForm from '../components/Accomodation/AccomodationForm';
import Accomodation from '../components/Accomodation/Accomodation';

export const AllRoutes = () => {
    const stripePromise = loadStripe(
        "pk_test_51Ow32LSAotoVgyoTqsuxy5V4l1gIkFXI7oBtiBaEpEitT93WRULRO0UBP37dk0lohS3y8YoetlGJYkt7FC0yNRMV001kRD0NcC"
    )
    return (

        <Routes>

            <Route path="/" element={<Main />} exact>
                <Route index element={<PropertyList />} />        {/*Nested Routes used */}
                <Route
                    path="propertylist/:id"
                    id="property-details"
                    element={<PropertyDetails />}
                />
                <Route path="/login" id="login" element={<Login />} />

                <Route path="/signup" id="signup" element={<SignUp />} />

                <Route path="/profile" id="profile" element={<Profile />} />

                <Route path="/editprofile" id="editprofile" element={<EditProfile />} />

                <Route path="/user/updatepassword" id="updatepassword" element={<UpdatePassword />} />

                <Route path="/user/forgotpassword" id="forgotpassword" element={<ForgotPassword />} />

                <Route path="/user/resetPassword/:token" id="resetpassword" element={<ResetPassword />} />  {/*Elements component is a special wrapper provided by Stripe for integrating Stripe elements like CardElement, CardNumberElement, CardExpiryElement, CardCvcElement, etc., into your React application. */}

                <Route path="/payment/:propertyId" id="payment" element={
                    <Elements stripe={stripePromise}>
                        <Payment />
                    </Elements>
                } />

                <Route path="/user/booking" id="myBookings" element={<MyBookings />} />

                <Route path="/user/booking/:bookingId" id="bookingDetails" element={<BookingDetails />}/>

                <Route path="/accommodation" id="accomodation" element={<Accomodation />}/>

                <Route path="/accomodationform" id="accomodationForm" element={<AccomodationForm />}/>





            </Route>

            <Route path="*" id="NotFound" element={<NotFound />}/>
        </Routes>
    )
}
