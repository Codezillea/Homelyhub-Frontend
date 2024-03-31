import './App.css';
import { Flip, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { AllRoutes } from './routes/AllRoutes';
import { userActions } from './Store/User/user-slice';
import { currentUser } from './Store/User/user-action';


function App() {


  const dispatch = useDispatch();
  const { errors } = useSelector((state) =>  state.user);
  useEffect(()=>{
    if(errors){
      dispatch(userActions.clearError());
    }
    dispatch(currentUser());
  }, [errors, dispatch]);


  return (
    <div className="App">
     
       <AllRoutes/>
        <ToastContainer 
       position='bottom-center'
       draggable={true}
       transition={Flip}
       autoClose={3000}
       />
    
    </div>
  );
}

export default App;
