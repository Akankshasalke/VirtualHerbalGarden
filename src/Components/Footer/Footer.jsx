
import React from 'react' ;
import './Footer.css';
import footer_logo from '../Assets/logo.jpg';
import inst_icon from '../Assets/instagram_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';



const Footer=()=>{

    
    return(
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt=""  width={80}/>
                <p>Herbal Garden</p>
                <ul className='footer-links'>
                    <li>Herbal Garden</li>
                    <li>About</li>
                    <li>Contact</li>
                    
                </ul>
                <div className="footer-social-icon">
                    <div className="footer-icons-container">
                        <img src={inst_icon} alt="" />
                        
                    </div>
                    <div className="footer-icons-container">
                        <img src={whatsapp_icon} alt="" />
                        
                    </div>
                </div>
                <div className="footer-copyright">
                    <hr />
                    <p>Copyright @2024-All Rights Reserved</p>
                </div>
            </div>
         
        </div>
    );
}

export default Footer;
