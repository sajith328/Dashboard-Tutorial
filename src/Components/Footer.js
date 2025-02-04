import React from 'react';
import './Footer.css';
const Footer = () => {
    return(
       
        <div className="footer-container">
       {/*    <h1>Footer HOURS</h1> */}
            <div className="container">
                    <div className='footer-content'>
                        <div className='footer-one'>
                            <div className='footer-flex1'>
                                <div className='footer-image'>
                                <img class="Footer-col" src="/Images/Image.png"/>
                                </div>
                                <div className='footer-text'>
                                <h5 className='Title-h5'>STAY IN TOUCH</h5>
                                <h1 className='Title-H1'>You want to meet with<br/> me, Book appoinments!</h1>
                                <p className='Text-P'>Integer nec tellus nisi. Orci varius natoque penatibus et <br/> magnis dis parturient montes, nascetur ridiculus mus.</p>

                                <div className='Footer-Email'>
                                    <i class='fas fa-envelope-square'></i>
                                    <input type='Email' name='Email' placeholder='Email Address'></input>
                                    <button className='Title-h6'>Book Appointments</button>
                                </div>
                                <hr/>

                                <div className='footer-icons-follow'>
                                <h3 className='Title-H3'>FOLLOW ME ON SOCIAL MEDIA</h3>
                                <div className='footer-icons'>
                                <div className='rows-icons'>
                                    <div className='cards-icons'>
                                    <i class='fab fa-linkedin-in'></i>
                                    <i class='fa fa-twitter'></i>
                                    <i class="fa fa-instagram"></i>
                                    <i class='fab fa-whatsapp'></i>
                                    <i class="fa fa-facebook-square"></i>
                                    <i class='fab fa-medium-m'></i>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                    
                            </div>
                        </div>
                    </div>
                    <p className="col-sm">
                            &copy; 2022 Kalervo Pohjamo from Finland.
                            {/* &copy;{new Date().getFullYear()} © 2022 Kalervo Pohjamo from Finland. */}
                    </p>
            </div>
           
        </div>
    )

}
export default Footer;