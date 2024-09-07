
import React from 'react' ;
import './veda.css';
import exclusive_img from '../Assets/ayurveda.png';
import veda_logo from '../Assets/Ayurveda-Logo.png';


const veda=()=>{

    
    return(
        <div className='vedas'>
         <div className="vedas-left">
           <img src={veda_logo} alt=""  width={150}/>
            <h2>Herbal plants nurture and restore balance with Ayurveda’s wisdom</h2>
            
            

         </div>
         <div className="vedas-right">
            <img src={exclusive_img} alt="" />

         </div>
        </div>
    );
}

export default veda;
