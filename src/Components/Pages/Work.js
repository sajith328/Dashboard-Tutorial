import React from 'react';
import { Row, Col, Container} from 'react-bootstrap'
import './Work.css';




export const Home = ()  => (
    /* Home section */

    <div>
        {/* Work-width */}
        <div className='Work-width'>
            <div className='container'>
                <div className='container-1'>
                    <div className='Work-content-photo'>
                        <div className='Title-Nav'>
                        <h1 className='About-Title'>Latest case study</h1>
                        <ul className='Work-nav'>
                            <nav className='Work-items'>
                                <li className='#'>All</li>
                                <li className='#'>UI Design</li>
                                <li className='#'>Webflow</li>
                                <li className='#'>Marketing</li>
                                <li className='#'>Content</li>
                            </nav>
                        </ul>
                        </div>

                        <div className='Work-Cards'>
                            <div className='work-C-flex'>
                            <img class="image-Scroll" src="/Images/Project (4).png"/>
                            <img class="image-Scroll" src="/Images/Project (5).png"/>
                            </div>
                            <div className='work-C-flex'>
                            <img class="image-Scroll" src="/Images/Project (3).png"/>
                            <img class="image-Scroll" src="/Images/Dribbble (1).png"/>
                            </div>
                            <div className='work-C-flex'>
                            <img class="image-Scroll" src="/Images/Dribbble (2).png"/>
                            <img class="image-Scroll" src="/Images/Photo (2).png"/>
                            </div>
                            <div className='work-C-flex'>
                            <img class="image-Scroll" src="/Images/Photo (1).png"/>
                            <img class="image-Scroll" src="/Images/Project (1).png"/>
                            </div>
                            <div className='work-C-flex'>
                            <img class="image-Scroll" src="/Images/Project (2).png"/>
                            <img class="image-Scroll" src="/Images/Project.png"/>
                            </div>
                        </div>
                        <div className='button-service'>
                            <button className='button-primary button-work'>
                            <i class="fa fa-briefcase"></i>Load more project...
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Work-width */}
    </div>
		

)

export default Home;



