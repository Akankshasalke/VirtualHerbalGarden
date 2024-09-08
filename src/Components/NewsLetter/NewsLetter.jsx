
import React from 'react' ;
import './NewsLetter.css';


const NewsLetter=()=>{

    
    return(
        <div className='newsletter' >
            <h1>Get Info about Herbal Plants on your Email</h1>
            <p>Subscribe to our newsletter</p>
            <div>
                <input type="email" placeholder='Your Email id' />
                <button>Subscribe</button>
            </div>
         
        </div>
    );
}

export default NewsLetter;
