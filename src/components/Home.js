import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate()


  const ViewPlace = () => {
     navigate('/Places')

  }
  const ViewTransport = () => {
    navigate('/Transport')

 }
 const ViewTravel = () => {
  navigate('/Travel')

}

const ViewFood = () => {
  navigate('/Food')

}

  return (
    <> 
    <div class="container-Home ">
   <div className='card1'>

   <div class="slide slide1">

<div class="content">

    <div class="icon1">

        <i class="fa fa-user-circle" aria-hidden="true"></i>
        <h3 className='placing'>Places</h3>

    </div>

</div>

</div>

<div class="slide slide2">

<div class="content">
    <h3 onClick={ViewPlace}> Click here to view the palces</h3>
</div>

</div>
   </div>
   <div className='card1'>
  
   <div class="slide slide1">

<div class="content">

    <div class="icon2">

    <i class="fa fa-user-circle" aria-hidden="true"></i>
    <h3 className='placing'>Food and Stay</h3>

    </div>

</div>

</div>

<div class="slide slide2">

<div class="content">

<h3 onClick={ViewFood}>Click here to view the Food and Stay</h3>

</div>

</div>
   </div>
   <div className='card1'>

   <div class="slide slide1">

<div class="content">

    <div class="icon3">

    <i class="fa fa-user-circle" aria-hidden="true"></i>
    <h3 className='placing'>Transport Details</h3>

    </div>

</div>

</div>

<div class="slide slide2">

<div class="content">

<h3 onClick={ViewTravel}>Click here to view the Transport</h3>
</div>

</div>
   </div>
   <div className='card1'>

<div class="slide slide1">

<div class="content">

 <div class="icon4">

 <i class="fa fa-user-circle" aria-hidden="true"></i>
 <h3 className='placing'>Up Coming Trips</h3>

 </div>

</div>

</div>

<div class="slide slide2">

<div class="content">

<h3 onClick={ViewTransport}>Click here to view the Upcoming Trips</h3>
</div>

</div>
</div>

</div>
    </>
  )
}
export default  Home;