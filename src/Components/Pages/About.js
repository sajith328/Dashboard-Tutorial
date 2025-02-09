import React from 'react';
import { Row, Col, Container} from 'react-bootstrap'
import './About.css';




export const About = ()  => (


    <div className='page-wrapper'>
           <div className='container-work'>
        <h1>Latest case study</h1>
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
    /* Home section */
            // <div>   
            //     {/* About section */}

            //             <Container>
            //                 <Row>
            //                     <h2 className="section-title">Introducing Thomas R. Thompson</h2>
            //                 </Row>
            //             </Container>

            //             <Container>      
            //                 <Row>
            //                     <section class="height-50vh center-aligned">
            //                         <img class="image" src="/Images/Tom4.png" />     
            //                     </section>
            //                 </Row> 
            //             </Container>
            //             <Container>
            //                 <Row>
            //                     <h2 className="about        ">My name is Tom, and in this video I show you how to develop a react website.

            //                     The website will function as an SPA "single page app" and consist of a header, with selectable menu, home page, services page, and about page.  
            //                     Routers and hooks will be used in development.  We be using Visual Studio Code as our 
            //                     Integrated Development Environment (IDE).  If you do not have VisualStudio Code installed 
            //                     goto https://code.visualstudio.com/download and follow the instructions. If you do not have Node.js on your computer you will need to install
            //                     it from https://nodejs.org/en/download/ .  Included with Node.js is Node.js pachage manager (NPM).
            //                     </h2>
            //                 </Row>
            //             </Container>

            //             <Container>
            //             <h2 className="about">  A complete copy of this code is available for upload from github. At https://github.com/thomasrthompsonllc/youtube_react_website
            //             </h2>
            //             </Container>
                
            //             <Container>
            //             <h2 className="about">  If you have questions or comments you may contact me at tom@thomasrthompsonllc.com or if you want to connect
            //             on linkedin use -  linkedin.com/in/tomatthomasrthompsonllc
            //             </h2>
            //             </Container>
            //         </div>
)

export default About



