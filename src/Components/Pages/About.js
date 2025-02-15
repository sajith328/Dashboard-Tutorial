import React from 'react';
import { Row, Col, Container} from 'react-bootstrap'
import './About.css';




export const About = ()  => (


    <div className='page-wrapper'>
           <div className='container-work'>
        <h1>Latest case study </h1>
        <div className='pages-about'>
            <ul className='links-work'>
                <li><a href='#'>ALL</a></li>
                <li><a href='#'>UI Design</a></li>
                <li><a href='#'>Webflow</a></li>
                <li><a href='#'>Marketing</a></li>
                <li><a href='#'>Content</a></li>
            </ul>
        </div>
    </div>
    <main className='main-work'>
        <div className='work-header'>
            <div className='header-work'>
                <div className='card-gird-work'>
                    <div className='work'>
                        <img src='/Images/mobile figma.png'/>
                    </div>
                    <div className='work'>
                        <img src='/Images/mobile one.png'/>
                    </div>
                    <div className='work'>
                        <img className='' src='/Images/lotptop figma.jpeg'/>
                    </div>
                    <div className='work'>
                        <img src='/Images/Project.png'/>
                    </div>
                    <div className='work'>
                        <img src='/Images/new baba.png'/>
                    </div>
                    <div className='work'>
                        <img src='/Images/dashboard.png'/>
                    </div>
                    <div className='work'>
                        <img src='/Images/white.png'/>
                    </div>
                    <div className='work'>
                        <img src='/Images/laptop black.png'/>
                    </div>
                    <div className='work'>
                        <img src='/Images/background one.png'/>
                    </div>
                    <div className='work'>
                        <img src='/Images/picture one.png'/>
                    </div>
                </div>
            </div>
        </div>
        <button className='button-work'>Load more project...</button>
    </main>
    </div>
    
)

export default About



