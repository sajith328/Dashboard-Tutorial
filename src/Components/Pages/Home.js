import React from 'react';
import { Row, Col, Container} from 'react-bootstrap'
import './Home.css';




export const Home = ()  => (
    /* Home section */

    
   <div className='page-wrapper'>
        <div className='one-page'>
        <div className='container-one'>
            <div className='container-two '>
                <div className='div-text'>
                    <h6>💉 RALPH EDWARDS</h6>
                    <h1>27+ Years of<br></br> Neurologists Doctor.</h1>
                    <p>Phasellus blandit, metus sit amet euismod facilisis, ante justo mollis elit, eu suscipit tellus lorem non dolor aliquam faucibus odio tempus nibh.</p>
                    <div className='div-button'>
                        <div className='div-box'>Learn about me</div>
                        <div className='div-boxs'>Patient Success story</div>
                    </div>
                </div>
            </div>
            <div className='container-two'>
            <img class="background-photo" src="/Images/doctory.png" />
            </div>
            <div className='div-three'>
               <div className='div-doctry'>
                <img className='doctry-div' src='/Images/onebig.png'/>
                <div className='text-one'>
                    <h1>Hello, I’m Ralph Edwards.</h1>
                    <p>Phasellus blandit, metus sit amet euismod facilisis, ante justo mollis elit, eu suscipit tellus lorem non dolor. Aliquam faucibus odio tempus nibh fringilla tincidunt. Proin luctus dui odio, sed egestas erat condimentum non.</p>
                    <div className='one-button'>
                        <div className='box-yellow'>Send Message <img src='/Images/all right.png'/></div>
                        <div className='box-white'><img src='/Images/DownloadSimple.png'/>Download cv</div>
                    </div>
                </div>
               </div>
               <div className='dcotry-two'>
                <h6>Featured by:</h6>
                <div className='photo-three'>
                    <img src='/Images/big boss.png'/>
                    <img src='/Images/big logo.png'/>
                    <img src='/Images/Logo (2).png'/>
                </div>
               </div>
            </div>
        </div>
        </div>
        <main className='main'>
            <div className='main-text'>
            <h1>My Working History</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipiscing elit. Maecenas dapibus leo vel augue suscipit bibendum.</p>
            </div>
            <div className='contant-header'>
                <div className='header-content'>
                    <div className='card-grid-header'>
                        <div className='card'>
                            <div className='card-header'>
                                <img src='/Images/image new.png'/>
                            </div>
                            <div className='card-body'>
                                <h6>CURRENTLY WORKING</h6>
                                <h3>Singapore General Hospital</h3>
                                <p>Donec ut imperdiet augue, ac rhoncus arcu. In ac mauris commodo, ultrices felis vitae, tempor eros.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-header'>
                                <img src='/Images/big three.png'/>
                            </div>
                            <div className='card-body'>
                                <h6 className='color-one'>Jan,2019 to March,2021</h6>
                                <h3>University of Tokyo Hospital</h3>
                                <p>Donec ut imperdiet augue, ac rhoncus arcu. In ac mauris commodo, ultrices felis vitae, tempor eros.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-header'>
                                <img src='/Images/big four.png'/>
                            </div>
                            <div className='card-body'>
                                <h6 className='color-one'>Mar,2017 to Dec,2018</h6>
                                <h3>Johns Hopkins Hospital</h3>
                                <p>Donec ut imperdiet augue, ac rhoncus arcu. In ac mauris commodo, ultrices felis vitae, tempor eros.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='icon-div'>
                <img src='/Images/button on.png'/>
                <img src='/Images/button on.png'/>
            </div>
            </main>
            <div className='container-four'>
                <div className='div-blue'>
                   <div className='text-page'>
                   <h5>What my college says about me.</h5>
                    <p>“Life is unpredictable, not everything’s in our control. But as long as you with the right people you can handle anything.”</p>
                    <h6>MR. John Wick</h6>
                    <h6 className='text-small'>Psychiatrist Doctor</h6>
                   </div>
                    <div className='page-photo'>
                        <img src='/Images/team three.png'/>
                    </div>
                </div>
            </div>
                <div className='container-five'>
                    <div className='award-text'>
                        <h1>My Qualification & Awards</h1>
                        <p>Mauris porttitor eleifend odio, id venenatis orci ornare ac. Nullam id convallis nisl. Sed ullamcorper lacinia suscipit. </p>
                    </div>
                    <div className='page-award'>
                        <div className='award-one'>
                            <div className='award-two'>
                               <div className='award-four'>
                               <h6>Oxford University</h6>
                               <p>Jan, 2016 to Jan, 2021</p>
                               </div>
                               <div className='award-three'>
                               <h2>Bachelor of Medicine & Bachelor of Surgery
                                (MBBS)</h2>
                                <p>Donec ut imperdiet augue, ac rhoncus arcu. In ac mauris commodo, ultrices felis vitae, tempor eros.</p>
                               </div>
                            </div>
                            <div className='award-two'>
                               <div className='award-four'>
                               <h6>Oxford University</h6>
                               <p>Jan, 2016 to Jan, 2021</p>
                               </div>
                               <div className='award-three'>
                               <h2>Bachelor of Social Science</h2>
                                <p>Integer vel nulla condimentum, tempor risus eu, blandit urna. Quisque fringilla ex in urna pretium.</p>
                               </div>
                            </div>
                            <div className='award-two'>
                               <div className='award-four'>
                               <h6>Oxford University</h6>
                               <p>Jan, 2016 to Jan, 2021</p>
                               </div>
                               <div className='award-three'>
                               <h2>Bachelor of Science and Engineering</h2>
                                <p>Proin varius diam vitae neque ornare ullamcorper.</p>
                               </div>
                            </div>
                            <div className='award-two'>
                               <div className='award-four'>
                               <h6>Oxford University</h6>
                               <p>Jan, 2016 to Jan, 2021</p>
                               </div>
                               <div className='award-three'>
                               <h2>Bachelor of Communication</h2>
                                <p>Proin varius diam vitae neque ornare ullamcorper. Maecenas vehicula sem eu dui molestie aliquam.</p>
                               </div>
                            </div>
                            </div>
                        <div className='award-one'>
                            <div className='award-box'>
                                <div className='wrapper-one'>
                                    <div className='header-award'>
                                        <img src='/Images/award one.png'/>
                                        <span>01</span>
                                    </div>
                                    <div className='body-award'>
                                        <span>Lasker Award</span>
                                        <p>Donec ut imperdiet augue, ac rhoncus arcu. In ac mauris commodo.</p>
                                    </div>
                                </div>
                                <div className='wrapper-one'>
                                <div className='header-award'>
                                        <img src='/Images/award two.png'/>
                                        <span className='wrapper-yellow'>03</span>
                                    </div>
                                    <div className='body-award'>
                                        <span>Maxwell Finland Award</span>
                                        <p>Donec ut imperdiet augue, ac rhoncus arcu. In ac mauris commodo.</p>
                                    </div>
                                </div>
                                <div className='wrapper-two'>
                                <div className='header-award'>
                                        <img src='/Images/award three.png'/>
                                        <span>02</span>
                                    </div>
                                    <div className='body-award'>
                                        <span>John Howland Award</span>
                                        <p>Donec ut imperdiet augue, ac rhoncus arcu. In ac mauris commodo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-six'>
                    <div className='book-box'>
                    <div className='div-book'>
                        <div className='book-photo'>
                            <img src='/Images/book one.png'/>
                        </div>
                    </div>
                    <div className='book-div'>
                        <div className='book-text'>
                            <h1>The Highly Sensitive Person</h1>
                            <p>Are you easily overwhelmed by such things as bright lights, strong smells, coarse fabrics, or sirens nearby?</p>
                            <div className='book-profile'>
                                <img src='/Images/profile.png'/>
                                <div className='content-book'>
                                    <h6>Writen by:</h6>
                                    <h2>Kevin Gilbert</h2>
                                </div>
                            </div>
                            <h3>Your trait is normal.</h3>
                            <p>Do you make it a high priority to arrange your life to avoid upsetting or overwhelming situations?</p>
                            <h3>Your trait is normal.</h3>
                            <p>Do you make it a high priority to arrange your life to avoid upsetting or overwhelming situations?</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='container-seven'>
                    <div className='div-petient'>
                        <div className='petient-text'>
                            <h1>863+ Patients Success Stories</h1>
                            <p>Mauris porttitor eleifend odio, id venenatis orci ornare ac nullam id convallis nisl.</p>
                            <div className='petient-icon'>
                                <img src='/Images/button on.png'/>
                                <img src='/Images/button on.png'/>
                            </div>
                        </div>
                    </div>
                    <div className='div-petient'>
                        <div className='petient-box'>
                            <div className='petient-content'>
                            <img src='/Images/balck.png'/>
                                <p>When a military doctor tracks down his former fiancee's kidnapped niece, he discovers a complex human trafficking ring in Goa. He then weaves an intricate trap to capture the perpetrators.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-eight'>
                    <div className='show-box'>
                        <div className='show-text'>
                            <h1>Latest Event & Show</h1>
                            <p>Donec suscipit dictum risus sed dignissim. Fusce ex leo, lobortis sed ullamcorper in, rutrum eu enim.</p>
                        </div>
                        <div className='show-two'>
                            <div className='show-boxs'>
                                <div className='show-date'>
                                    <h6>8 Sep,2020</h6>
                                    <h6>125 Comments</h6>
                                </div>
                                <h4>BMA Events</h4>
                                <p>Quisque vitae ante dolor. Duis vehicula purus eget libero interdum ornare. Vestibulum ut risus nec odio rhoncus malesuada. Duis lobortis consectetur magna, in faucibus mauris congue tempor.</p>
                            </div>
                            <div className='show-boxs'>
                                <div className='show-date'>
                                    <h6>8 Sep,2020</h6>
                                    <h6>125 Comments</h6>
                                </div>
                                <h4>CESR seminar for SAS grade doctors</h4>
                                <p>Quisque vitae ante dolor. Duis vehicula purus eget libero interdum ornare. Vestibulum ut risus nec odio rhoncus malesuada. Duis lobortis consectetur magna, in faucibus mauris congue tempor.</p>
                            </div>
                        </div>
                    </div>
                </div>

   </div>		
		

)

export default Home;



