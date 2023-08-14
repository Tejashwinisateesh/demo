import React from "react";
import './Places.css';
import Waterfalls from '../images/Malshej_Falls.jpg';
import BhimaTemple from '../images/bhima.jpeg';
import Trimbakeshwar from '../images/Trimbakeshwar.jpeg';
import Shiridi from '../images/shiridi.jpeg';
import Ellora from '../images/ellora.jpeg';
import Harihara from '../images/harihara.jpg';
import Shani from '../images/Shani.jpg';
import Grishneshwara from '../images/grishneshwara.jpeg';
import kallu from '../images/waterfallKallu.jpeg';
import { useNavigate } from 'react-router-dom';
import Home from "./Home";
function Places() {
  const navigate = useNavigate()
  const back = ()=>{
    navigate('/Home')
  }

  return (
    <>
      <div className="container-Home">
          {/* <button onClick={back}>
            Back
          </button> */}
      <div class="grid-container">
  <div class="grid-item">
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <div className="back">Bhimashankara</div>
      <img src={BhimaTemple} alt="Avatar" className="avatar"/>
    </div>
    <div class="flip-card-back">
      <h1>Bhimashankara</h1> 
    <p>Bhimashankara is famous for Bhimashankar Temple which is one among 12 Jyotirling.Also it is famous for wildlife enthusiast circuit as it has beautiful wildlife sanctuary,that is home for Indian Gaint squirrels and some rare and close to extinction species of birds. </p>
    </div>
  </div>
</div>
  </div>
  <div class="grid-item">
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <div  className="back">Malshej Ghat</div>
      <img src={Waterfalls} alt="Avatar" className="avatar"/>
    </div>
    <div class="flip-card-back">
      <h1>Malshej Ghat</h1> 
      <p>Nestled in the western Ghats of Maharashtra,Malshaja Ghat is a popular hill station and a mountain pass.With the numerous waterfall,lakes,mountains and verdant flora  and fauna.Malshej Ghat is a famous spot among trekkers,hikers and nature lovers.</p> 
   
    </div>
  </div>
</div>
  </div>
  <div class="grid-item">
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <div  className="back">Trimbakeshwar</div>
      <img src={Trimbakeshwar} alt="Avatar" className="avatar"/>
    </div>
    <div class="flip-card-back">
      <h1>Trimbakeshwar</h1> 
      <p>Trimbakeshwar Temple of lord shiva ia a famous temple in Nashik.This is only Jyotirling located in India.It is not only honors lord shiva but also honors other two gods in Holy Trinity(Vishnu and Brahma) </p> 
      
    </div>
  </div>
</div>
  </div>
  <div class="grid-item">
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <div  className="back">Shirdi</div>
      <img src={Shiridi} alt="Avatar" className="avatar"/>
    </div>
    <div class="flip-card-back">
      <h1>Shirdi</h1> 
      <p>A famous small town situated in Ahmednagar district of Maharashtra,Shirdi is considered to be one of the sacred place in India.Also known as land of Sai, it is famous for the shrine of Shirdi Saibaba which is the main attraction of the city.</p>
    </div>
  </div>
</div>
  </div>
  <div class="grid-item">
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <div  className="back">Ellora</div>
      <img src={Ellora} alt="Avatar" className="avatar"/>
    </div>
    <div class="flip-card-back">
      <h1>Ellora</h1> 
      <p>The Ellora caves are authentic in terms of the forms and designs, materials, substance,locations and setting 
        of paintings,rock cut arhitecture,sculptures and unfinished temples of three different faiths i,e Buddhism,Brahmanism and Jaiunism </p> 
      
    </div>
  </div>
</div>
  </div>
  <div class="grid-item">
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <div  className="back">Harihar Fort</div>
      <img src={Harihara} alt="Avatar" className="avatar"/>
    </div>
    <div class="flip-card-back">
      <h1>Harihar Fort</h1> 
      <p>Harihar fort / Harshagad is a fort located 40 km from Nashik City, 48 km from Igatpuri, 40 km from Ghoti in Nashik district, of Maharashtra, India. It is an important fort in Nashik district, and was constructed to look upon the trade route through Gonda Ghat.</p> 
    </div>
  </div>
</div>
  </div>
  <div class="grid-item">
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <div  className="back">Shani Shingnapur</div>
      <img src={Shani} alt="Avatar" className="avatar"/>
    </div>
    <div class="flip-card-back">
      <h1>ShaniShingapur</h1> 
      <p>Shingapur is called Shani Shingnapur paying reverence to the name of Shani Dev. The fascinating fact about Shingnapur village is that there are no locks on any house here. It is believed that Shani Dev himself protects this village from all calamities and thefts.</p> 
    </div>
  </div>
</div>
  </div>
  <div class="grid-item">
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <div  className="back">Grishnashwar</div>
      <img src={Grishneshwara} alt="Avatar" className="avatar"/>
    </div>
    <div class="flip-card-back">
      <h1>Grishnashwar</h1> 
      <p>Grishnashwar Temple dedicated to Lord shiva is one of the holiest pilgrimage sites in India.Loacted about 35km away 
        from the city of Aurangabad and about 2km away from the UNESCO-listed Ellora caves, it is home to the 12th and the </p> 
    </div>
  </div>
</div>
  </div>
  <div class="grid-item">
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <div  className="back">Kallu Falls</div>
      <img src={kallu} alt="Avatar" className="avatar"/>
    </div>
    <div class="flip-card-back">
      <h1>Kallu Falls</h1> 
      <p>
Kalu Waterfall is the highest and largest waterfall in Malshej Region. Kalu waterfall in one of the less explored places in Maharashtra. Kalu waterfall can be seen from Malshej Ghat main road but its structure is such that 90% of the falls is hidden.</p> 
    </div>
  </div>
</div>
  </div>
</div>
      </div>
    </>
  );
}

export default Places;
