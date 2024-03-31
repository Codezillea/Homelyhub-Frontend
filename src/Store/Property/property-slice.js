import { createSlice } from "@reduxjs/toolkit";//Slice is a collecction of reducer functions and actions for managing piece of states.

const propertySlice = createSlice({

  //Slice name
  name: "property",
  //InitialState for the slice
  initialState: {

    properties: [],
    totalProperties: 0,
    searchParams: {}, //parameters used to search.
    error: null,//error state
    loading: false //loading State for the property


  },
  //reducers functions to handle different functions
  reducers: {
    getRequest(state) {
      state.loading = true;//here we are requesting the backend to fetch datas from it so loading is set as true when there is a fetch request . 
    },

    //Action to update properties state with fetch data .

    getProperties(state, action)//reducers function which is responsible for updating state when there is dispatch action.
    {
      state.properties = action.payload.data;  // data is a object from backend array of objects
      state.totalProperties = action.payload.all_properties; //all_properties,loading is also a variable in backend 
      state.loading = false; //This inidactes that the process of fetching datas from the backend is completed so it is set as false .

    },


    //Action to update search parameters    

    updateSeachParameters(state, action) {

      state.searchParams = Object.keys(action.payload).length === 0 ? {} : { //Object.keys() is a built-in JavaScript method that returns an array of a given object's own enumerable property names, in the same order as we get with a normal loop.
        ...state.searchParams,//adds another parameter to the exisitig SearchParams object
        ...action.payload
      }

    },

    //Action to update error state

    getErrors(state, action) {
      state.error = action.payload;

    }


  }

})

export const propertyAction = propertySlice.actions; //Action Creater and for accessing the slice inside functions . Provides a convenient way to access and dispatch the action creators associated with the reducers defined in your slice.

export default propertySlice;

