import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "../../CSS/BookingDetails.css";
import {PropertyImage} from "../PropertyDetails/PropertyImage";
import { fetchBookingDetails } from "../../Store/Booking/booking-action";

const BookingDetails = () => {
  const dispatch = useDispatch();
  const { bookingId } = useParams();
  const { bookingDetails } = useSelector((state) => state.booking);

  useEffect(() => {
    dispatch(fetchBookingDetails(bookingId));
  }, [dispatch, bookingId]);

  if (!bookingDetails || !bookingDetails.property) {
    return <div>Loading...</div>;
  }

  const { property } = bookingDetails;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="details-container">
      <p className="details-header">{property.propertyName}</p>
      <h6 className="details-location">
        <span className="material-symbols-outlined">location_on</span>
        <span className="location">
          {property.address.area}, {property.address.city},{" "}
          {property.address.pincode}, {property.address.state}
        </span>
      </h6>
      <div className="details-information-container">
        <div className="details-information">
          <h5>Booking Information</h5>
          <section className="booking-stay-information">
            <span className="details">
              <span className="material-symbols-outlined stay-icon">
                bedtime
              </span>
              {bookingDetails.numberOfnights} nights
            </span>
            <span className="details">
              <span className="material-symbols-outlined stay-icon">
                calendar_month
              </span>
              {formatDate(bookingDetails.fromDate)}
            </span>
            <span className="material-symbols-outlined stay-icon">
              arrow_forward
            </span>
            <span className="details">
              <span className="material-symbols-outlined stay-icon">
                calendar_month
              </span>
              {formatDate(bookingDetails.toDate)}
            </span>
          </section>
        </div>
        <div className="details-total-price-container">
          <div className="details-total-price">
            <p className="price-header">Total Price</p>
            <span className="price-in-number">
              &#8377; {bookingDetails.price}
            </span>
          </div>
        </div>
      </div>
      <div className="images">
      <div className="propertyimg-container">
        <PropertyImage images={property.images} />
      </div>
      </div>
     
    </div>
  );
};

export default BookingDetails;
