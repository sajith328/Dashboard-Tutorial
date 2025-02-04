import React from 'react';
import { Row, Col, Container} from 'react-bootstrap'
import './About.css';




export const About = ()  => (
    /* Home section */
            <div>   
                 <div className='container'>
                     <div className='container-1'>
                        <div className='About-width'>
                            <div className='row-1'>
                                <div className='col'>
                                <div className='About-content-icons'>
                                    <h1 className='About-Title'>Passionate Visual Designer, Webflow Developer and part time freelancer with a keen eye for details.</h1>
                                    <div className='About-icons'>
                                        <h6 className='About-title-h6'>Follow me</h6>
                                        <i class="fa fa-dribbble"></i>
                                        <i class="fa fa-wikipedia-w"></i>
                                        <i class="fa fa-instagram"></i>
                                        <i class="fa fa-twitter"></i>
                                    </div>
                                </div>
                                </div>
                                <div className='col'>
                                <div className='About-content-icons'>
                                    <p className='About-P'>
                                    I specialize in UI/UX & Graphic Design and my passion is all about building elegant and professional user interfaces and websites. I also do branding and identity design such as logo design, and business cards, along with photo editing.
                                    </p>
                                    <div className='About-button'>
                                        <button className='button-primary'>
                                        Request Quotation <i class="fa fa-long-arrow-right"></i>
                                        </button>
                                        <button className='button-primary button-second'>
                                        <i class="fa fa-download"></i> Download Resume
                                        </button>
                                    </div>
                                </div>
                                </div>
                            </div> 
                        </div>
                     </div>

                     {/* slider-wrapper */}
                     <div className='container-1'>
                        <div className='slider-wrapper'>
                            <div className='Card-list'>
                            <i class="fa fa-long-arrow-left"></i>
                                <div className='Card-item'>
                                 <img class="image-Scroll" src="/Images/Photo.png"/>
                                </div>
                            <i class="fa fa-long-arrow-right"></i>
                            </div>
                            <div className='radius-Slider'>
                                <div className='Radius-list Radius-1'></div>
                                <div className='Radius-list Radius-2'></div>
                                <div className='Radius-list Radius-3'></div>
                                <div className='Radius-list Radius-4'></div>
                                <div className='Radius-list Radius-5'></div>
                                <div className='Radius-list Radius-6'></div>
                            </div>
                        </div>
                     </div>

                     {/* End-slider-wrapper */}



                     {/* About-Resuem */}
                     <div className='About-Resuem'>
                        <div className='container-1'>
                            <div className='row-2'>
                                <div className='col'>
                                    <div className='Resuem-flex'>
                                        <div className='Title-Hr-flex'>
                                        </div>
                                        <div className='Title-content-Details'>
                                            <h5 className='Text-P-R'>2021 - Present • UK</h5>
                                            <h2 className='Study-Details'>Website Design Course</h2>
                                            <p className='Study-P'>Bachelor's Degree in Computer Science<br/> ABC Technical Institute, Jefferson,<br/> Missouri.</p>
                                        </div>
                                        <div className='Title-content-Details'>
                                            <h5 className='Text-P-R'>2016 - 2019 • Cambridge University</h5>
                                            <h2 className='Study-Details'>Bachelor of Philosophy (B. Phil.)</h2>
                                            <p className='Study-P'>Coursework - Git, WordPress, Javascript, <br/>iOS, Android.</p>
                                        </div>
                                        <div className='Title-content-Details'>
                                            <h5 className='Text-P-R'>2010 - 2014 • Oxford University</h5>
                                            <h2 className='Study-Details'>Bachelor of Engineering (B. Eng.)</h2>
                                            <p className='Study-P'>Bachelor's Degree in Computer Science<br/> ABC Technical Institute, Jefferson, <br/>Missouri.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='Resuem-flex'>
                                        <div className='Title-Hr-flex-1'>
                                        </div>
                                        <div className='Title-content-Details'>
                                            <h5 className='Text-P-R two'>2019 - Present • Google</h5>
                                            <h2 className='Study-Details'>Bachelor of Philosophy (B. Phil.)</h2>
                                            <p className='Study-P'>Collaborate with creative and<br/> development teams on the execution of<br/> ideas.</p>
                                        </div>
                                        <div className='Title-content-Details'>
                                            <h5 className='Text-P-R two'>2016 - 2019 • Apple</h5>
                                            <h2 className='Study-Details'>Bachelor of Philosophy (B. Phil.)</h2>
                                            <p className='Study-P'>Monitored technical aspects of the front-<br/>end delivery for projects.</p>
                                        </div>
                                        <div className='Title-content-Details'>
                                            <h5 className='Text-P-R two'>2010 - 2014 • Nasa</h5>
                                            <h2 className='Study-Details'>Bachelor of Philosophy (B. Phil.)</h2>
                                            <p className='Study-P'>Optimize your website and apps<br/> performance using latest technology.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='Resuem-flex'>
                                        <div className='Title-Hr-flex-2'>
                                        </div>
                                        <div className='Logo-box1'>
                                            <div className='logo-flex'>
                                            <img class="image-logo" src="/Images/Tools.png"/>
                                            <img class="image-logo" src="/Images/Tools (1).png"/>
                                            <img class="image-logo" src="/Images/Tools (2).png"/>
                                            </div>
                                            <div className='logo-flex'>
                                            <img class="image-logo" src="/Images/Tools (3).png"/>
                                            <img class="image-logo" src="/Images/Tools (4).png"/>
                                            <img class="image-logo" src="/Images/Tools (5).png"/>
                                            </div>
                                            <div className='logo-flex'>
                                            <img class="image-logo" src="/Images/Tools (6).png"/>
                                            <img class="image-logo" src="/Images/Tools (7).png"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                     <hr/>
                     {/* End-About-Resuem */}

                     {/* About-Awards */}
                     <div className='About-Awards'>
                        <div className='container-1'>
                            <div className='row-1'>
                                <div className='Awards-box-both'>
                                <div className='Awards-Cards'>
                                    <div className='img-backgorund'>
                                    <img class="image-Awards" src="/Images/w (2).png"/>
                                    </div>
                                    <div className='Awards-flex-Logo'>
                                        <h2 className='Awards-Title-h2'>Awwwards Judge ‘19-20</h2>
                                        <p className='Awards-P'>Awwwards is a professional web design and development competition body. It aims to<br/> recognize and promote.</p>
                                    </div>
                                </div>
                                <div className='Awards-Cards'>
                                    <div className='img-backgorund'>
                                    <img class="image-Awards" src="/Images/w (1).png"/>
                                    </div>
                                    <div className='Awards-flex-Logo'>
                                        <h2 className='Awards-Title-h2'>Site of the Years for Lewis</h2>
                                        <p className='Awards-P'>Lewis University offers practical, goal-oriented education for undergraduate student,<br/> graduate.</p>
                                    </div>
                                </div>
                                </div>

                                <div className='Awards-box-both'>
                                    <h1 className='Awrads-title-h1'>My achievments</h1>
                                    <p className='Awards-P1'>Sed semper, felis at facilisis auctor, justo eros vulputate nulla, dapibus <br/>suscipit augue ex id dui. Integer a elit id enim eleifend tristique sed vel sem. Donec  sodales urna sit amet mauris volutpat pellentesque. Suspendisse <br/>potenti. In ornare convallis nisi ut viverra.</p>
                                    <div className='Language'>
                                        <h5 className='Awards-H5'>LANGUAGE I CAN SPEAK</h5>
                                        <div className='L-details'>
                                            <h6 className='L-H6'> • English</h6>
                                            <h6 className='L-H6'> • Mandarin</h6>
                                            <h6 className='L-H6'> • Spanish</h6>
                                            <h6 className='L-H6'> • Hindi</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                     {/* End About-Awards */}

                 </div>

                                      {/* Services */}
                    <div className='Services'>
                        <div className='container'>
                        <div className='container-1'>
                            <div className='Services-Box'>
                                <div className='Services-Content'>
                                <h2 className='Services-h2'>Service I provide</h2>
                                <p className='Services-P'>I specialize in UI/UX & Graphic Design and my passion is all<br/> about building elegant and professional user interfaces.</p>
                                </div>
                                <div className='Service-Cards'>
                                    <div className='Cards-1'>
                                        <div className='Card-Radius'>
                                        <img class="image-Awards" src="/Images/logo-icon (2).png"/>
                                        </div>
                                        <h4 className='Service-h4'>User Interface Design</h4>
                                        <p className='Service-P1'>Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi.</p>
                                    </div>
                                    <div className='Cards-1'>
                                        <div className='Card-Radius'>
                                        <img class="image-Awards" src="/Images/logo-icon (1).png"/>
                                        </div>
                                        <h4 className='Service-h4'>Product Marketing</h4>
                                        <p className='Service-P1'>Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi.</p>
                                    </div>
                                    <div className='Cards-1'>
                                        <div className='Card-Radius'>
                                        <img class="image-Awards" src="/Images/logo-icon (3).png"/>
                                        </div>
                                        <h4 className='Service-h4'>Webflow Development</h4>
                                        <p className='Service-P1'>Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi.</p>
                                    </div>
                                    <div className='Cards-1'>
                                        <div className='Card-Radius'>
                                        <img class="image-Awards" src="/Images/logo-icon (4).png"/>
                                        </div>
                                        <h4 className='Service-h4'>Content Writing</h4>
                                        <p className='Service-P1'>Proin egestas, nisi vitae hendrerit maximus, mauris nunc facilisis odi.</p>
                                    </div>
                                </div>
                                <div className='button-service'>
                                <button className='button-primary'>
                                Request Quote <i class="fa fa-arrow-circle-right"></i>
                                </button>
                                </div>
                            </div>
                        </div>
                        </div>
                     </div>
                     {/* End Services */}

                     {/* Personal-Project */}
                     <div className='Personal-Project'>
                        <div className='container'>
                            <div className='container-1'>
                                <div className='Services-Content'>
                                <h2 className='Services-h2'>Personal Project</h2>
                                </div>
                                <div className='Peronal-Cards-row'>
                                    <div className='Project'>
                                    <img class="image-Project" src="/Images/Rectangle 31.png"/>
                                    <div className='Project-T-P'>
                                        <h2 className='Project-Title'>Drawing (2016 - 2022)</h2>
                                        <p className='Project-P'>Aliquam hendrerit quis nisl eget varius. Duis <br/>viverra vel quam sed posuere. Praesent <br/>tempor cursus semeu.</p>
                                    </div>
                                    </div>
                                    <div className='Project'>
                                    <img class="image-Project" src="/Images/Rectangle 31 (1).png"/>
                                    <div className='Project-T-P'>
                                        <h2 className='Project-Title'>Photography</h2>
                                        <p className='Project-P'>Etiam cursus dolor vel ipsum vulputate<br/> tincidunt. Nunc metus nisl, posuere nec<br/> cursus a, faucibus in elit. </p>
                                    </div>
                                    </div>
                                    <div className='Project'>
                                    <img class="image-Project" src="/Images/Rectangle 31 (2).png"/>
                                    <div className='Project-T-P'>
                                        <h2 className='Project-Title'>Pinterest SEO Marketing</h2>
                                        <p className='Project-P'>Pellentesque ullamcorper risus nec<br/> condimentum fermentum. Nullam vitae <br/>efficitur ex.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                     {/* End Personal-Project */}

                     {/* Frame-Dribbble */}
                     <div className='Frame-Dribbble'>
                        <div className='container'>
                            <div className='container-1'>
                                <div className='Title-Scroll'>
                                <h2 className='Services-h2'>Latest Dribbble Shots</h2>
                                <div className='Frame-radius'>
                                <i class="fa fa-long-arrow-left"></i>
                                <i class="fa fa-long-arrow-right"></i>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='Frame-Image-H'>
                            <div className='img-text-in'>
                            <img class="image-Photo" src="/Images/Photo (2).png"/>
                            </div>
                            <img class="image-Photo" src="/Images/Dribbble (1).png"/>
                            <div className='img-text-in'>
                            <img class="image-Photo" src="/Images/Photo (1).png"/>
                            </div>
                            <img class="image-Photo" src="/Images/Dribbble (2).png"/>
                            <div className='img-text-in'>
                            <img class="image-Photo" src="/Images/Photo (5).png"/>
                            </div>
                        </div>
                     </div>
                     {/* End Frame-Dribbble */}
     
            </div>
)

export default About



