import React from 'react';
import { Row, Col, Container} from 'react-bootstrap'
import './Home.css';




export const Home = ()  => (
    /* Home section */


    <div className='container'>
        <div className='container-1'>
            <div className='Head-width'>
              <div className='row'>
                <div className='col'>
                    <div className='width-content-1'>
                    <h1 className='Title-H1'>It’s Kalervo From Finland.</h1>
                    <p className='Text-P'>A man who only focus to build quality-full product that can help user without casting any money.</p>
                    <div className='rows-icons'>
                        <div className='cards-icons'>
                        <i class='fab fa-linkedin-in'></i>
                        <i class='fa fa-twitter'></i>
                        <i class='fab fa-whatsapp'></i>
                        <i class='fab fa-medium-m'></i>
                        </div>
                    </div>
                    </div>
                </div>
                 <div className='col'>
                    <div className='image-col-width'>
                    <img class="image-col" src="/Images/Man_Photo-removebg-preview.png"/>
                    </div>
                 </div>
                <div className='col'>
                    <div className='width-content-2'>
                    <h5 className='Title-h5'>FORMAL INTRODUCATION</h5>
                    <h3 className='Title-H3'>Hello, I’m Kalervo Pohjamo, CEO & Founder of Atlassian and Trello</h3>
                    <p className='Text-P1'>I’m founder & chief excuting officer at Atlassian Trello, & Confluence. In my life, I builded lot's of quality-full product that can help people.</p>
                    <button className='Title-h6'>
                            Read About me <i class="fa fa-arrow-circle-right"></i>
                    </button>
                    </div>
                </div>
              </div>
              <div>
              <div className='width-funfact'>
                <div className='background-one'>
                    <div className='background-flex-num'>
                        <div className='back-Num'>
                            <h3 className='Num-h3'>
                                19+
                            </h3>
                            <p className='Num-p'>
                            Years of Experience
                            </p>
                        </div>
                        <div className='back-Num'>
                            <h3 className='Num-h3'>
                                750+
                            </h3>
                            <p className='Num-p'>
                            Colleague/Team Members
                            </p>
                        </div>
                    </div>
                </div>
                <div className='background-found'>
                        <div className='Title-hr-flex'>
                            <h5 className='Hr-H5'>I’m Founder of</h5>
                            <img class="image-Hr" src="/Images/Arrow.png"/>
                        </div>
                        <div className='Hr-icons-flex'>
                        <img class="image-Hr" src="/Images/Toy-Candy1 (2).png"/>
                        <img class="image-Hr" src="/Images/Toy-Candy1.png"/>
                        <img class="image-Hr" src="/Images/Toy-Candy1 (4).png"/>
                        <img class="image-Hr" src="/Images/Toy-Candy1 (3).png"/>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>

        {/* Customer-Testimonial */}

        <div className='Customer-Testimonial'>
            <div className='container-1'>
               <div className='Customer-flex'>
               <div className='Customer-Cards'>
                    <div className='Customer-Content'>
                    <h5 className='Title-h5'>Customer testimonial</h5>
                    <h1 className='Title-H1'>Consumer thought <br/> about my product!</h1>

                    <div className='Signture-logo'>
                    <img class="image-col" src="/Images/Wow!.png"/>
                    <img class="image-col" src="/Images/Nice!.png"/>
                    <img class="image-col" src="/Images/Love.png"/>
                    </div>
                    </div>
                </div>
                <div className='Customer-Cards cards-box'>
                    <p className='Customer-text'>
                    Now that we've switched to a remote environment, with the use of Trello, we can now limit the number of meetings we have regarding specific projects and turn to Trello for updates instead.
                    </p>
                    <div className='flex-Desgin'>
                        <div className='photo-design'>
                        <img class="image-radius-1" src="/Images/Image-1.png"/>
                        <div className='design-text'>
                            <h6 className='design-title'>Kevin Gilbert</h6>
                            <p className='design-p'>Product Designer at Google</p>
                        </div>
                        </div>
                        <div className='design-radius'>
                            <div className='radius-1 radius-2'></div>
                            <div className='radius-1 radius-3'></div>
                            <div className='radius-1 radius-4'></div>
                            <div className='radius-1 radius-5'></div>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </div>

        {/* End Customer-Testimonial */}


        {/* Read-About */}

        <div className='Read-About'>
            <div className='container-1'>
                <div className='Read-flex'>
                    <div className='Read-Left-three'>
                        <div className='IN-One'>
                         <i class='fab fa-linkedin-in'></i>
                         <p className='Read-P'>LINKEDIN</p>
                         <h3 className='Read-title'>379k Followers</h3>
                            <div className='Medius-Two'>
                            <img class="image-vector" src="/Images/Vector.png"/>
                            <i class='fab fa-medium-m'></i>
                             <p className='Read-P'>MEDIUM</p>
                             <h3 className='Read-title'>127k Followers</h3>
                                <div className='Twitter-Three'>
                                <i class='fa fa-twitter'></i>
                                <p className='Read-P'>TWITTER</p>
                                <h3 className='Read-title'>97k Followers</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Read-right-content'>
                        <div className='Read-Content'>
                        <h5 className='Title-h5'>READ ABOUT ME</h5>
                    <h3 className='Title-H3'>I develop software that assists people digitally.</h3>
                    <p className='Text-P1'>Suspendisse dapibus odio ut libero vulputate, ut condimentum sem rhoncus. Mauris nisi tortor, dignissim id ipsum vitae, feugiat molestie nisl. Suspendisse aliquam nisl sed massa fringilla, non scelerisque tortor aliquam. Morbi ac arcu risus vestibulum ultrices enim.</p>
                    <div className='Read-icons'>
                    <button className='Title-h6'>Book Appointments</button>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* End Read-About */}



        {/* Team-Member */}
        <div className='Team-Member'>
            <div className='container-1'>
                <div className='Team-group'>
                    <div className='Team-flex'>
                        <div className='Cards-icons'>
                        <i class="fa fa-angle-left"></i>
                        </div>
                        <div className='Team-text'>
                        <h5 className='Title-h5'>TEAM MEMBERS</h5>
                        <h1 className='Title-H1'>Colleague & team members</h1>
                        </div>
                        <div className='Cards-icons'>
                        <i class="fa fa-angle-right"></i>
                        </div>
                    </div>

                    <div className='Slider-Cards'>
                        <div className='Images-list'>
                            <div className='images-items'>
                            <img class="image-col" src="/Images/team-2.png"/>
                            <div className='text-slider'>
                            <h3 className='Title-H3'>Cameron Williamson</h3>
                            <p className='Text-P1'>Assistant Manager</p>  
                            </div>
                            </div>
                            <div className='images-items'>
                            <img class="image-col" src="/Images/team.png"/>
                            <div className='text-slider'>
                            <h3 className='Title-H3'>Cameron Williamson</h3>
                            <p className='Text-P1'>Supporting Assistant</p>  
                            </div>
                            </div>
                            <div className='images-items'>
                            <img class="image-col" src="/Images/team-1.png"/>
                            <div className='text-slider'>
                            <h3 className='Title-H3'>Cameron Williamson</h3>
                            <p className='Text-P1'>Product Manager</p>  
                            </div>
                            </div>
                            <div className='images-items'>
                            <img class="image-col" src="/Images/team-3.png"/>
                            <div className='text-slider'>
                            <h3 className='Title-H3'>Cameron Williamson</h3>
                            <p className='Text-P1'>Head of Sales & Services</p>  
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='scroll-hozional'>
                        <div className='scroll-in-hozional'></div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Team-Member */}

        {/* Latest-Article */}
        <div className='Latest-Article'>
            <div className='container-1'>
                <div className='Team-text'>
                    <h5 className='Title-h5'>BLOGS</h5>
                    <h1 className='Title-H1'>Latest article</h1>
                </div>

                <div className='Latest-Blogs-Flex'>
                    <div className='Blogs-group'>
                        <div className='Blog-Cards  hover-1'>
                        <img class="image-Blogs" src="/Images/Blog1.png"/>
                        <div className='Blog-Content-group'>
                            <div className='funfact-text'>
                                <p className='blog-p1'>Jun 19 • 5 Min read <span>WEATHER</span></p>
                                <h3 className='Title-H3'>How to Beat the Heat: See It Coming (More<br/> than a Week Ahead!)</h3>
                                <p className='Blog-p2'>I wrote this in honor of Father’s Day. No matter your ethnicity read this with your father in mind and thank him for his love and support.</p>
                            </div>
                        </div>
                        </div>

                        <div className='Blog-Cards  hover-1'>
                        <img class="image-Blogs" src="/Images/Blog2.png"/>
                        <div className='Blog-Content-group'>
                            <div className='funfact-text'>
                                <p className='blog-p1'>May 11 • 7 Min read <span>APP</span></p>
                                <h3 className='Title-H3'>Ten fastest-growing apps in 2022 (including some you don’t know)</h3>
                                <p className='Blog-p2'>The fastest-growing apps in 2022 If there is one thing there’s no shortage of, it’s apps. Apps stores are bursting at the seams, making it tricky to</p>
                            </div>
                        </div>
                        </div>
                        
                        <div className='Blog-Cards  hover-1'>
                        <img class="image-Blogs" src="/Images/Blog3.png"/>
                        <div className='Blog-Content-group'>
                            <div className='funfact-text'>
                                <p className='blog-p1'>Jun 19 5 Min read <span>WEATHER</span></p>
                                <h3 className='Title-H3'>5 things to learn from type designers while dealing with visuals</h3>
                                <p className='Blog-p2'>Hello, Designers! Ever had this thought, “Something is wrong!” while dealing with visuals? If so, you are not alone. I have worked with different</p>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div className='Blog-Card hover-1'>
                    <img class="image-Cards-1" src="/Images/Blog.png"/>
                        <div className='Blog-Content-group'>
                            <div className='funfact-text'>
                                <p className='blog-p1'>Dec 28 • 7 Min read <span>WEATHER</span></p>
                                <h3 className='Title-H3'>The path to technical leadership: how to go from developer to team leader</h3>
                                <p className='Blog-p2'>If software development feels like it is only part of your professional purpose, perhaps you should consider becoming a tech lead. A tech lead could mean different things: a team lead (with no direct reports), or a manager. For example, an engineering manager is a person who is responsible for the team and its projects. That means they are also responsible for peoples’ careers, business growth, deliverables, deadlines, culture, code standards, technical debt, and more.</p>
                                <button className='Title-h6'>
                                Read More<i class="fa fa-arrow-circle-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Latest-Article */}

    </div>		
)

export default Home;



