import React from "react";
import "./Transport.css";
import { useNavigate } from "react-router-dom";
import "./Home";

function Transport() {
  const navigate = useNavigate();
  const back = () => {
    navigate("/Home");
  };
  return (
    <>
      <div className="container-Home">
          {/* <button onClick={back}>
            Back
          </button> */}
        <div className="card9">
          <h4>Up Coming Trip Details</h4>
          <h6>2023 November Shabrimala Yathra</h6>
          <h6>2024 March Gujurat Trip via Dwaraka or Kedarnath</h6>
          <h6>2024 July Madhya Pradesh Trip</h6>
          <h6>2025 February Kashi Yathra</h6>
        </div>
      </div>
    </>
  );
}
export default Transport;
