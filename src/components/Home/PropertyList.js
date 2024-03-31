import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import { propertyAction } from '../../Store/Property/property-slice';
import { getAllProperties } from '../../Store/Property/property-action';
import { Card } from "./Card";

export const PropertyList = () => {

    const [currentPage,setCurrentPage] = useState({page : 1}); //eslint-disable-line

    const [datas, setDatas]=useState([]);//eslint-disable-line

    const {properties,totalProperties} =  useSelector(
        (state)=>state.properties //this properties is from the store.js
    );

    const lastPage = Math.ceil(totalProperties/12);//eslint-disable-line

    const dispatch =  useDispatch(); //accessing  dispatch functions.

    useEffect(()=>{

        const fetchProperties = async (page)=>{
            dispatch(propertyAction.updateSeachParameters(page));
            dispatch(getAllProperties());



        }
        fetchProperties(currentPage )
        
    },[currentPage,dispatch])
  
  
  return (
    <>
  
    {properties.length === 0 ? (<p className="not_found">Property Not found...</p>):(
        <div className='propertylist '>
        {properties.map( (property)=>(
            <Card  
            id={property._id}
            key={property._id}
             image={property.images[0].url}
             name={property.propertyName}
             address={`${property.address.city},${property.address.state},${property.address.pincode}`}
             price={property.price}
             />
        ))}
        
    </div>
        
    )}

    {/*Pagination Control*/}

    <div className="pagination">
        {/* previous  button */}
        <button className='previous_btn'
        onClick={ ()=> setCurrentPage((prev)=>({
            
            page: prev.page - 1
        }))}
        disabled={currentPage.page===1 //disabling the previous buttin if you're in first page 
        }>
            <span className="material-symbols-outlined ">arrow_back_ios_new</span>
        </button>

        {/* next  button */}

        <button  className='next_btn' 
         onClick={ ()=> setCurrentPage((prev)=>({
            
            page: prev.page + 1 
        }))}
        disabled={currentPage.page===2} //diabling the previous buttin if you're in first page 
                        
     > <span className="material-symbols-outlined ">arrow_forward_ios</span></button>

    </div>
   
  </>
  )
}
