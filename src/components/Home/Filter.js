import React, { useEffect, useState } from 'react';
import {  useDispatch } from 'react-redux';


import { FilterModal } from "./FilterModal";
import { getAllProperties } from '../../Store/Property/property-action';
import { propertyAction } from '../../Store/Property/property-slice';

export const Filter = () => {

  //state for controlling filter visibility
  const [ filter,setFilter ] = useState(false);
  const [ selectedFilters, setSelectedFilters ]=useState({});

  const dispatch = useDispatch();

  useEffect( ()=>{
    dispatch(propertyAction.updateSeachParameters(selectedFilters));
    dispatch(getAllProperties());
  },[selectedFilters,dispatch])

  // Function to  chnage filter popup
  const handleFilterChange= (filterName,value)=>
  {
    setSelectedFilters((prevFilters)=>(
      {...prevFilters,[filterName]:value}
    ))

  }
  return (
    <>
    <span onClick={()=>setFilter(!filter)} className='material-symbols-outlined filter'>tune</span>
    { filter&& <FilterModal
      selectedFilters={selectedFilters}
      onFilterChange ={handleFilterChange}
      setFilter={setFilter}/>}
   


    </>
  )
}
