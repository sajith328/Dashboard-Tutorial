import React from 'react';
import './Footer.css';
const Footer = () => {
    return(
       
    //     <div className="footer-container">
      
    //    {/*    <h1>Footer HOURS</h1> */}
    //         <div className="container">
    //             <div className="row">
    //                 {/* Column1 */}
    //                 <div className="col">
    //                     <h4>Your Company Name</h4>
    //                     <ul className="list-unstyled">

    //                     <li>Email - your email</li>
    //                     <li>Phone - 000-000-0000</li>
                       
    //                     </ul>
    //                 </div>
    //                 {/* Column2*/}
    //                 <div className="col">
    //                     <h4>Address</h4>
    //                     <ul className="list-unstyled">
    //                     <li>You</li>
    //                     <li>Some street</li> 
    //                     <li>some state</li> 
    //                     </ul>
    //                 </div>
    //                 {/* Column3 */}
    //                 <div className="col">
    //                     <h4>Hours</h4>
    //                     <ul className="list-unstyled">
    //                     <li>Monday - Friday</li>
    //                     <li>8:00am - 4:00pm</li> 
                        
    //                     </ul>
    //                 </div>
    //             </div>
    //             <hr />
    //             <div className="row">
    //                 <p className="col-sm">
    //                         &copy;{new Date().getFullYear()} Your Name | All rights reserved

    //                 </p>



    //             </div>
    //         </div>
           
    //     </div>

    <section className='footer'>
        <div className='footer-row'>
            <div className='footer-col'>
                <p>Looking for a Neurologists Doctor? Get in touch and let's chat!</p>
            </div>
            <div className='footer-col'>
                <p className='footer-small'>Looking for a Neurologists Doctor? Get in touch and let's chat!</p>
                <button className='footer-button'>Get in touch <img src='/Images/ArrowRight.png'/> </button>
            </div>
            <div className='footer-rows'>
                <div className='footer-col'>
                    <img className='logo-img' src='/Images/Logo (3).png'/>
                </div>
                <div className='footer-col'>
                    <h6>Location</h6>
                    <p className='footer-text'>4517 Washington Ave. Manchester, Kentucky 39495</p>
                </div>
                <div className='footer-col'>
                    <h6>Quick Links</h6>
                    <ul className='links'>
                        <li><a href='#'>About</a></li>
                        <li><a className='active' href='#'>CV</a></li>
                        <li><a href='#'>Events</a></li>
                        <li><a href='#'>Article</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h6>Follow me</h6>
                    <div className='footer-icons'>
                        <img src='/Images/Social Media.png'/>
                        <img src='/Images/Social Media (2).png'/>
                        <img src='/Images/Social Media (3).png'/>
                        <img src='/Images/Social Media (4).png'/>
                        <img src='/Images/Social Media (5).png'/>

                    </div>
                </div>
            </div>
        </div>
    </section>
    )

}
export default Footer;