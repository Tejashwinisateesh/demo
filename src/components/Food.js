import React from 'react';
import './Food.css';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

 function Food() {
 
  const navigate = useNavigate()
  const back = ()=>{
    navigate('/Home')
  }

  return (
    <>

  <div className='container-Food'>
    <div className='Food-Image'>
      <button className='btn' onClick={back}>Back</button>
    </div>
     </div>

    </>
  )
}
export default Food;