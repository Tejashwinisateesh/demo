import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./Login.css";
// import Home from './Home';

function Login() {
      const navigate = useNavigate()
      const [code,setCode]=useState([])


      const handleInputChange = (event) => {
        setCode(event.target.value);
      };

      const handleButtonClick = () => {

        if (code === 'MMT0908') {
          navigate('/Home')

        } else {
          window.alert("Incorrect code")
        } 
      }

  return (
    <>
      <div className="container">
        <div>
        </div>
        <div className="card ">
          <form classname="form-inline">
            <div className="form-group">
              <div className="row m-4">
                <div className="col-lg-12 col-md-12 col-sm-12">
                {/* <h3>Black Cats Tourism</h3> */}
                <label  className="header">Enter the code</label>
                </div>
              </div>
              <div className="row d-flex">
              <input className="form-control"  placeholder="Enter the code"  value={code} onChange={handleInputChange}/>
              <button type="button" class="btn" onClick={handleButtonClick}>Start <i class='fas fa-play'></i></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
