import  axios  from "axios";

import { propertyAction } from "./property-slice";//Action creater

//action creator to fetch properties

export const getAllProperties =()=> async(dispatch,getState)=>{ //dispatch and getState is in-built
    try{
       
        dispatch(propertyAction.getRequest())//getRequest is from property slice file which sets loading as true.

        const { searchParams }=getState().properties;//retrieves searchparams for current state data object.

        
        
        const response = await axios.get( `/api/v1/rent/listing`,
        {
            params :{ ...searchParams},
           

        });
      

        if(!response) {
            throw new Error("Properties not fetched !")
        }
        
        const { data } =  response; //data is destructured from response any doubt console response for better understanding
        dispatch(propertyAction.getProperties(data))

    }
    catch(error){
        dispatch(propertyAction.getErrors(error.message));

    }
}
