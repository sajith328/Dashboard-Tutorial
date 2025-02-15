import React from 'react';
import { Row, Col, Container} from 'react-bootstrap'
import './Services.css';



export const Services = ()  => (
    /* Home section */

    <div>  
   
            
            
        <div className='section-header wid-auto'>

            <div className='text-header'>
                <h1 className='size-48 color-blue'>Service I provide</h1>
                <h6 className='color-small'>I specialize in UI/UX & Graphic Design and my passion 
                    is all <br></br> about building elegant and professional user interfaces.
                </h6>
            </div>

            <div className='card-service-outter all-flex'>
                <div className='card-service-inner'>
                    <div className='card-service'>

                        <div className='img-service wid-auto'>
                            <img src='/Images/service-photo-1.png'></img>
                        </div>

                        <div className='card-service-text'>
                            <h6 className='color-blue text-align'>User Interface Design</h6>
                            <p className='text-align'>Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi.</p>
                        </div>
                    </div>
                </div>

                <div className='card-service-inner'>
                    <div className='card-service'>

                        <div className='img-service wid-auto'>
                            <img src='Images/service-photo-2.png'></img>
                        </div>

                        <div className='card-service-text'>
                            <h6 className='color-blue text-align'>Product Marketing</h6>
                            <p className='text-align'>Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi.</p>
                        </div>
                    </div>
                </div>

                <div className='card-service-inner'>
                    <div className='card-service'>

                        <div className='img-service wid-auto'>
                            <img src='Images/service-photo-3.png'></img>
                        </div>

                        <div className='card-service-text'>
                            <h6 className='color-blue text-align'>Webflow Development</h6>
                            <p className='text-align'>Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi.</p>
                        </div>
                    </div>
                </div>

                <div className='card-service-inner'>
                    <div className='card-service'>

                        <div className='img-service wid-auto'>
                            <img src='Images/service-photo-4.png'></img>
                        </div>

                        <div className='card-service-text'>
                            <h6 className='color-blue text-align'>Content Writing</h6>
                            <p className='text-align'>Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi.</p>
                        </div>
                    </div>
                </div>
            </div>

            <button>Request Quote <i class='fas fa-arrow-circle-right'></i></button>

        </div>

        <div className='section-face-tools'>
            <div className='text-tools-use wid-auto text-align'>
                <h4 className='color-blue'>Tools I Use</h4>

                <div className='outter-tools all-flex'>

                    <div className='tools-footer-padding'>
                        <div className='card-tools text-align'>
                            <img src='/Images/tool-1.png'></img>
                            <h6 className='color-blue'>Slack</h6>
                        </div>
                    </div>

                    <div className='tools-footer-padding'>
                        <div className='card-tools text-align'>
                            <img src='/Images/tool-2.png'></img>
                            <h6 className='color-blue'>Figma</h6>
                        </div>
                    </div>

                    <div className='tools-footer-padding'>
                        <div className='card-tools text-align'>
                            <img src='/Images/tool-3.png'></img>
                            <h6 className='color-blue'>Sketch</h6>
                        </div>
                    </div>

                    <div className='tools-footer-padding'>
                        <div className='card-tools text-align'>
                            <img src='/Images/tool-4.png'></img>
                            <h6 className='color-blue'>Photoshop</h6>
                        </div>
                    </div>

                    <div className='tools-footer-padding'>
                        <div className='card-tools text-align'>
                            <img src='/Images/tool-5.png'></img>
                            <h6 className='color-blue'>Illustrator</h6>
                        </div>
                    </div>

                    <div className='tools-footer-padding'>
                        <div className='card-tools text-align'>
                            <img src='/Images/tool-6.png'></img>
                            <h6 className='color-blue'>Adobe XD</h6>
                        </div>
                    </div>

                    <div className='tools-footer-padding'>
                        <div className='card-tools text-align'>
                            <img src='/Images/tool-7.png'></img>
                            <h6 className='color-blue'>Notion</h6>
                        </div>
                    </div>

                    <div className='tools-footer-padding'>
                        <div className='card-tools text-align'>
                            <img src='/Images/tool-8.png'></img>
                            <h6 className='color-blue'>Webflow</h6>
                        </div>
                    </div>

                </div>
            </div>
        </div>
            
        <div className='section-chest'>

            <div className='work-width wid-auto all-flex'>
                <div className='col-left'>
                    <h2 className='color-blue'>Working process</h2>
                    <h6>I specialize in UI/UX & Graphic Design and my passion is all about building elegant and professional user interfaces.</h6>
                </div>

                <div className='col-right all-flex'>

                    <div className='contain-left'>
                        <div className='background-same all-flex'>
                            <img src='Images/icon-img-1.png'></img>
                            <h6>1. Project Introduction</h6>
                        </div>

                        <div className='background-same all-flex'>
                            <img src='Images/icon-img-3.png'></img>
                            <h6>3. Webflow Developments</h6>
                        </div>
                    </div>

                    <div className='contain-right'>
                        <div className='background-same all-flex'>
                            <img src='Images/icon-img-2.png'></img>
                            <h6>2. Visual Design</h6>
                        </div>

                        <div className='background-same all-flex'>
                            <img src='Images/icon-img-4.png'></img>
                            <h6>4. Revision & Delivery</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        <div className='section-knee wid-auto all-flex'>
            <div className='col-skill-left'>
                <h1 className='color-blue size-48'>My Skills & Expertise</h1>
                <h5>Pellentesque luctus tristique velit, ut condimentum <br></br> tortor 
                    egestas suscipit. Fusce sem leo, eleifend eu quam non, vestibulum 
                    consequat lorem.
                </h5>

                <div className='skill-precent margin-top-20'>
                    <h6 className='color-blue'>Webflow CMS</h6>
                    <div className='precent-style background-lightblue'>
                        <div className='height-16-precent background-blue'></div>
                    </div>
                </div>

                <div className='skill-precent margin-skill-10'>
                    <h6 className='color-blue'>Animation</h6>
                    <div className='precent-style background-lightred'>
                        <div className='height-16-precent background-red'></div>
                    </div>
                </div>

                <div className='skill-precent margin-skill-10'>
                    <h6 className='color-blue'>Design Sense</h6>
                    <div className='precent-style background-lightgreen'>
                        <div className='height-16-precent background-green'></div>
                    </div>
                </div>
            </div>

            <div className='col-skill-right all-flex'>
                <div className='circle-ball text-align'>
                    <div className='tranlate-50-text'>
                        <img src='/Images/Social Media-1.png'></img>
                        <h6>Dribbble</h6>
                        <h5>379k Followers</h5>
                    </div>
                </div>

                <div className='circle-instagram text-align'>
                    <div className='tranlate-50-text'>
                        <img src='/Images/Social Media-3.png'></img>
                        <h6>Instagram</h6>
                        <h5>127k Followers</h5>
                    </div>
                </div>

                <div className='circle-twitter text-align'>
                    <div className='tranlate-50-text'>
                        <img src='/Images/Social Media-2.png'></img>
                        <h6>Twitter</h6>
                        <h5>97k Followers</h5>
                    </div>
                </div>
            </div>
        </div>

        <div className='sction-img-chin all-flex'>
            <div className='section-chin wid-auto'>
                <div className='card-width-50'>
                    <div className='header-text-h1 all-flex'>
                        <h1 className='color-blue'>What my clients
                        say about my work!</h1>

                        <img src='Images/Play Video.png'></img>
                    </div>

                    <div className='text-decsript'>
                        <h6 className=''>“Great Designer, does great work and is very flexible with 
                            change. if you’re a programmer and are looking for UI/UX designer is 
                            definitely well qualified for the job.”
                        </h6>

                        <p><strong className='color-blue'>James Quincey</strong> CEO of Coca ColA</p>
                    </div>

                    <div className='icon-section-chin all-flex'>
                        <i class='fas fa-chevron-left'></i>
                        <div className='border-radius-dot-width'></div>
                        <div className='border-radius-dot'></div>
                        <div className='border-radius-dot'></div>
                        <div className='border-radius-dot'></div>
                        <i class='fas fa-chevron-right orange-arrow'></i>
                    </div>

                </div>
            </div>
        </div>

        <div className='background-white-section-toe'>
            <div className='section-toe wid-auto text-align'>
                <h1 className='color-blue size-48'>I work with 524+ big <br></br>
                companies worldwide.</h1>

                <h6>I specialize in UI/UX & Graphic Design and my passion is all about <br></br>
                    building elegant and professional user interfaces.
                </h6>

                <div className='img-company-logo all-flex'>
                    <img src='Images/Company Logo.png'></img>
                    <img src='Images/Company Logo-1.png'></img>
                    <img src='Images/Company Logo-2.png'></img>
                    <img src='Images/Company Logo-3.png'></img>
                    <img src='Images/Company Logo-4.png'></img>
                    <img src='Images/Company Logo-5.png'></img>
                </div>

                <div className='img-company-logo all-flex'>
                    <img src='Images/Company Logo-6.png'></img>
                    <img src='Images/Company Logo-7.png'></img>
                    <img src='Images/Company Logo-8.png'></img>
                    <img src='Images/Company Logo-9.png'></img>
                    <img src='Images/Company Logo-10.png'></img>
                    <img src='Images/Company Logo-11.png'></img>
                </div>
            </div>
        </div>

    </div>
    
        
						



		

)

export default Services;



