import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Card = ({ image, address, name, price, id }) => {



    return <figure className='property' >
        <Link to={`/propertylist/${id}`} >
            <img src={image} alt="Propertyimg" />
        </Link>
        <h4>{name}</h4>
        <figcaption>
            <main className='propertydetails'>
                <h5>{name}</h5>
                <h6>
                    <span className='material-symbols-outlined houseicon'>home_pin</span>
                    {address}
                </h6>
                <p>
                    <span className='price'>₹{price}</span>   per night
                </p>
            </main>
        </figcaption>

    </figure>


}
