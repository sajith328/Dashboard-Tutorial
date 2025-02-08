import React from 'react';
import './Footer.css';
const Footer = () => {
    return(

    <section className='footer'>
        <div className='footer-row'>
            <div className='footer-col'>
                <p>Looking for a Neurologists Doctor? Get in touch and let's chat!</p>
            </div>
            <div className='footer-col'>
                <p className='footer-small'>Looking for a Neurologists Doctor? Get in touch and let's chat!</p>
                <button className='footer-button'>Get in touch <img src='/Images/all right.png'/> </button>
            </div>
            <div className='footer-rows'>
                <div className='footer-col'>
                    <img className='logo-img' src='/Images/logo great.png'/>
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