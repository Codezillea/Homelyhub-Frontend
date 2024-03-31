import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


import "../../CSS/PropertyDetails.css";
import MapComponent from "./MapComponent"
import { getPropertyDetails } from '../../Store/PropertyDetails/propertyDetails-action';
import { PropertyImage } from './PropertyImage';
import { PropertyAmenities } from './PropertyAmenities';
import { BookingForm } from './BookingForm';



export const PropertyDetails = () => {

    const dispatch = useDispatch();

    const { id } = useParams();

    const { propertydetails } = useSelector((state) => state.propertydetails); //this propertydetails is from the store.js





    useEffect(() => {
        dispatch(getPropertyDetails(id))
    }, [dispatch, id]);

    const { propertyName,
        address,
        images,
        description,
        maximumGuest,
        amenities,
        price,

        currentBookings,
        extraInfo
    } = propertydetails;


    return (
        <div className='property-container'>
            {
                propertyName &&
                (
                    <>
                        <p className='property-header'>{propertyName}</p>
                        <h6 className='property-location'>
                            <span className='material-symbols-outlined'>home</span>
                            <span className='location'>{`${address.area} , ${address.city} , ${address.pincode} , ${address.state}`}</span>
                        </h6>
                        <PropertyImage images={images} />
                        <div className="middle-container row">
                            <div className="des-and-amenities col-md-8 col-sm-12 col-12">
                                <h2 className='property-description-header'>Description</h2>
                                <p className='property-description'>
                                    {description}
                                    <br /> <br />
                                    Max number of Guests : {maximumGuest}
                                    <br /><br />
                                </p>
                                <hr />
                                <PropertyAmenities amenities={amenities} />
                                <br /><br />


                            </div>
                            <div className="property-payment col-md-4 col-sm-12 col-12">
                                <BookingForm
                                    key={id}
                                    propertyId={id}
                                    price={price}
                                    propertyName={propertyName}
                                    address={address}
                                    maximumGuest={maximumGuest}
                                    currentBookings={currentBookings}
                                />
                            </div>

                        </div>
                        <hr />
                        <div className="property-map">
                            <div className="map-image-exinfo-container row">
                                <div className="map-image-container col-md-6 col-sm-12 col-12">
                                    <h2 className='map-header'>Where you will be</h2>
                                    <MapComponent address={address} />
                                </div>
                                <div className="extra-info col-md-6 col-sm-12 col-12">
                                    <h2 className='extra-heanding'>Want to Know more about this place..?</h2>
                                    <p className='extra-description'>{extraInfo}</p>
                                </div>
                            </div>
                        </div>



                    </>
                )

            }


        </div>
    )
}
