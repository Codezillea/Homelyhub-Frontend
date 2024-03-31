import axios from "axios";
import { accomodationActions } from "./accomodation-slice";

export const createAccomodation = ( accomadationData)=>async (dispatch)=>
{
    try{
        dispatch(accomodationActions.getAccomodationRequest());
        const response = await axios.post("/api/v1/rent/user/newAccommodation",accomadationData);

        if(!response)
        {
            throw Error("Could not get any Accomodation")
        }

        

    }
    catch(error)
    {
          dispatch(accomodationActions.getErrors(error.response.data.message));

    }
}

export const getAllAccomodation = ()=>async(dispatch)=>
{
    try{
        dispatch(accomodationActions.getAccomodationRequest());
        const response = await axios.get("/api/v1/rent/user/myAccommodation");
        const data = response.data.data;
        console.log(data)
       
       
        
        dispatch(accomodationActions.getAccomodation(data));
        
    }
    catch(error)
    {
        dispatch(accomodationActions.getErrors(error.response.data.message));
    }
}