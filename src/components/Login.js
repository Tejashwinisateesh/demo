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
      <div className="container-fluid"> 
          <form classname="form-inline">
            <div className="form-group">
            <div class="header">
              <a >Black Cats Tourism</a>
              <input className="form-control"  placeholder="Enter the code"  value={code} onChange={handleInputChange}/>
              <button type="button" class="btn1" onClick={handleButtonClick}>Start <i class='fas fa-play'></i></button>
               </div>
            </div>
          </form>
        </div>
    </>
  );
}

export default Login;
