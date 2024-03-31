import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';//installed antd (design) library of react.
import {  useDispatch } from 'react-redux';

import { getAllProperties } from '../../Store/Property/property-action';
import { propertyAction } from '../../Store/Property/property-slice';


export const Search = () => {
    const { RangePicker } = DatePicker;//Destructuring 'RangePicker' from the DatePicker functionality.
    const [keyword, setKeyword] = useState({});
     // storing data range value
    const [dateRange, setDateRange] = useState([]);

    const dispatch = useDispatch();

    function searchHandler(e)
    {
        e.preventDefault();
        dispatch(propertyAction.updateSeachParameters(keyword));
        dispatch(getAllProperties());

        setKeyword({
            city : "",
            guests : "",
            dateIn : "",
            dateOut : "",
        });
        setDateRange([])
    }





    function returnDates(date, dateString) { //date and dateString are built-in
        //setting the date range value in state
        setDateRange([date[0], date[1]]);
        //updating the keyword object with date range
        updateKeyword("dateIn", dateString[0]);
        updateKeyword("dateOut", dateString[1]);
       
       
       
    }
  
    //function to update a specific field in the keyword state object.
    const updateKeyword = (field, value) => {
        setKeyword((prevKeyword) => ({ ...prevKeyword, [field]: value }));
      

    }

    return (
        <>
            <div className="searchbar">
                {/* Input Field for Searching Destinations */}
                <input
                    onChange={(e) => updateKeyword("city", e.target.value)}
                     className="search" id="Search destinations" type="text" 
                     placeholder="Search Destinations" value={keyword.city} 
               />


                {/* Date Range Picker */}

                <Space direction="vertical" size={12} className="search">
                    
                    <RangePicker value={dateRange} disabledDate={(current)=>{return current && current.isBefore(Date.now(),"day");}} 
                    format="YYYY-MM-DD" 
                    picker="date" className="date_picker" onChange={returnDates} />
                </Space>
             

                {/* Input Field for adding guests */}

                <input type="number" className="search" 
                id="addguest" placeholder="Add guest" 
                value={keyword.guests}
                onChange={(e)=>updateKeyword("guests",e.target.value)} />

                {/* Search icon*/}
                <span className="material-symbols-outlined searchicon"
                onClick={searchHandler}>
                    search
                </span>

        
            </div>
        </>
    )
}
