import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


import "../../CSS/Accomodation.css";
import {ProgressSteps} from "../ProgressSteps";
import MyAccomodation from "./MyAccomdation";
import { getAllAccomodation } from "../../Store/Accomodation/accomodation-action";
import {LoadingSpinner} from "../LoadingSpinner";

const Accomodation = () => {
  const dispatch = useDispatch();
  const { accomodation, loading } = useSelector((state) => state.accomodation);
  console.log("acc",accomodation);

  useEffect(() => {
    dispatch(getAllAccomodation());
  }, [dispatch]);
  console.log("acc",accomodation);
  return (
    <>
      <ProgressSteps accomodation />
      <div className="accom-container">
        <Link to="/accomodationform">
          <button className="add-new-place">+ Add new place</button>
        </Link>
        {loading && <LoadingSpinner />}
        {accomodation.length === 0 && !loading && (
          <p>Accomodation not available</p>
        )}
        {accomodation.length > 0 && !loading && (
          <MyAccomodation accomodation={accomodation} loading={loading} />
        )}
      </div>
    </>
  );
};

export default Accomodation;
