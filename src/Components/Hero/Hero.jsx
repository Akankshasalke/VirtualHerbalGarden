
import React from 'react' ;
import './Hero.css';
import plant_icon from '../Assets/plant.png';
import arrow_icon from '../Assets/arrow.png';
import hero_img from '../Assets/heroimg.webp';


const Hero=()=>{

    
    return(
        <div className='hero' >
            <div className="hero-left">
                
                <div>
                    <div className='plant-icon'>
                    <h2>Virutal Herbal Garden</h2>
                        <img src={plant_icon} alt="" />
                    </div>
                    <p>Nature's Remedies, </p>
                    <p>Just a Click Away</p>
                </div>
                <div className="hero-latest-btn">
                <div>Explore</div>
                <img src={arrow_icon} alt="" />
            </div>


            </div>

            <div className="hero-right">
                <img src={hero_img} alt="" width={450}/>

            </div>
         
        </div>
    );
}

export default Hero;
