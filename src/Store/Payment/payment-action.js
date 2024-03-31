import axios from "axios";
import { CardNumberElement } from "@stripe/react-stripe-js";
import { toast } from "react-toastify"
import { createBooking } from "../../Store/Booking/booking-action"
import { setPaymentDetails } from "./payment-slice";

export const processPayment = (
    {
        totalAmount,
        stripe,
        elements,
        checkInDate,
        checkOutDate,
        propertyName,
        address,
        maximumGuest,
        bookingId,
        propertyId,
        nights,
        dispatch,
        navigate
    }
) => {
    return async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            toast.error("Stripe is not initialized")
            console.error("Stripe is not initialized");
            return;
        }

        const cardNumberElement = elements.getElement(CardNumberElement) //retrieving credit/debit card number;
        try {
            const response = await axios.post("/api/v1/rent/user/checkout-session",
                {
                    amount: totalAmount,
                    currency: 'inr',
                    paymentMethodTypes: ["card"],
                    checkInDate,
                    checkOutDate,
                    propertyName,
                    address,
                    maximumGuest,
                    bookingId,
                    propertyId,
                    nights
                },
                {
                    headers:
                    {
                        "Content-Type": "application/json"
                    }
                }
            );

            const data = response.data;
            
            await stripe.confirmCardPayment( data.clientSecret,  //stripe.confirmCardPayment() is method to confirm payment.This method sends a request to Stripe's Server to confirm payment
                {  // data.clientSecret - This is the client secret obtained from the server. The client secret is a unique identifier for a PaymentIntent. It is used to authenticate the client-side request to confirm the payment.
                    payment_method:
                    {
                        card : cardNumberElement
                    }
                });

                dispatch( createBooking(
                    {
                        booking : bookingId,
                        property : propertyId,
                        price : totalAmount,
                        guests : maximumGuest,
                        fromDate : checkInDate,
                        toDate : checkOutDate,
                        nights
                    }
                ))
                dispatch(
                    setPaymentDetails(
                        {
                            checkInDate,
                            checkOutDate,
                            totalPrice : totalAmount,
                            propertyName,
                            address,
                            maximumGuest,
                            nights

                        }
                    )
                    );
                    navigate("/user/booking")

        }
        catch(error)
        {
            toast.error("Error processing payment : ",error)
            console.error("Error processing payment : ",error)
        }
       

    }

}