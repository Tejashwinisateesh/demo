import React from 'react';
import './Travel.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom'

 function Travel() {
  const navigate = useNavigate()
  const mapStyles = {
    height: '100vh',
    width: '100%',
  };
  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const back = ()=>{
    navigate('/Home')
  }



  return (
    <>
    <div className='container-Travel'>
<div className='body'>
<button className='btn' onClick={back}>Back</button>
  <a href='https://www.google.com/maps/dir/Bengaluru,+Karnataka/Pune,+Maharashtra/Bhimashankar_jyotirlinga,+Bhimashankar,+Nigdale,+Maharashtra/Malshej+Ghat,+Maharashtra/Harihar+Fort,+Harshewadi,+Maharashtra/Trimbakeshwar+Jyotirling+Mandir,+Trimbak,+Maharashtra/Nashik,+Maharashtra/Shirdi,+Maharashtra/Shani+Shingnapur,+Maharashtra/Ellora+Caves,+Aurangabad,+Maharashtra/@17.897316,73.0912044,8.21z/data=!4m62!4m61!1m5!1m1!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!2m2!1d77.5945627!2d12.9715987!1m5!1m1!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!2m2!1d73.8567437!2d18.5204303!1m5!1m1!1s0x3bdd59fec9f5aab5:0x72883bb2a973dfad!2m2!1d73.5359402!2d19.071939!1m5!1m1!1s0x3bdd6c46320a44b9:0x82a69ed0c7c7a95c!2m2!1d73.774552!2d19.340625!1m5!1m1!1s0x3bdd8aa3cbdc02b5:0x16fa7d9ad92945af!2m2!1d73.4721591!2d19.9052223!1m5!1m1!1s0x3bddeb013af2e74b:0x716282a3a46b04cc!2m2!1d73.5308182!2d19.9322293!1m5!1m1!1s0x3bddd290b09914b3:0xcb07845d9d28215c!2m2!1d73.7898023!2d19.9974533!1m5!1m1!1s0x3bdc5ba7461768af:0xd802d2c2943c99c!2m2!1d74.4762124!2d19.7645364!1m5!1m1!1s0x3bdc9947273cd64f:0x8fa72555d843e2f3!2m2!1d74.8581505!2d19.3809105!1m5!1m1!1s0x3bdb93bd138ae4bd:0x574c6482cf0b89cf!2m2!1d75.1770869!2d20.0267844!3e0?entry=ttu'> <button className='button' >Click here to view the Map</button> </a>

  
</div>
    {/* <div className='card5'>
<h4>Travel Details</h4>
<h6>Flight Charges = 3003 Rs </h6>
<h6>Train Charges = 700 Rs</h6>
<h6>Car Rental = 1700 Rs</h6>
<h6>Petrol = 1500 Rs </h6>
<h6>Food = 1000 Rs</h6>
<h6>Toll = 96 Rs </h6>
<h5>Total = 7999 Rs</h5>
</div> */}
    </div>
    </>
  )
}

export default Travel;