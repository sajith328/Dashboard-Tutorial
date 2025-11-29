import React from 'react';
import { Row, Col, Container} from 'react-bootstrap'
import './Home.css';

function Home() {
    return(
        <>
        {/* Container */}
        <div className='container'>
            <div className='box-one'>
                 <div className='one-content'>
                <h4>NEW COLLETION</h4>
                <h1><span>BEST</span> <br></br>SHOES</h1>
                <h5>OUR CHOICE OF MAN AND WOMAN RUNNING TRAINERS</h5>
                <p>There's no such thing as the perfect running shoe. When it comes to running, all sorts of thing come into play-your biomechanics, your weight, the surface you run on and the shape of your feet.</p>
                <div className='button-now'>
                    Shop now
                </div>
            </div>
            <div className='text-off'>
                <h1>50%</h1>
                <h4>DISCOUNT</h4>
            </div>
            <div className='media-one'>
                <img src='/Images/instagram.svg'/>
                <img src='/Images/facebook.svg' />
                <img src='/Images/twitter.svg'/>
            </div>
            </div>
        </div>
        <div className='container-two'>
            <div className='box-two'>
                <div className='picture-two'>
                   <div>
                    <div className='two-picture'>
                     <img src='/Images/camila-damasio-mWYhrOiAgmA-unsplash.jpg' />
                    </div>
                    <div className='two-picture'>
                     <img src='/Images/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg' />
                    </div>
                   </div>
                   <div className='shoes-two'>
                    <img src='/Images/marcus-kroegler-s3PnN1z4bLo-unsplash.jpg' />
                   </div>
                </div>
                <div className='text-two'>
                    <h5>Us About</h5>
                    <h1>We Provide high<br></br> quality shoes.</h1>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className='button-iconssss'>Explore More</div>
                </div>
            </div>
        </div>
        <main className='header-main'>
           <div className='container-header'>
             <h1>FEATURED AND<br></br> RARE <span>PRODUCTS</span></h1>
            <div className='header-gird'>
                <div className='gird-header'>
                    <div className='card-vm'>
                        <div className='around-card'>
                            <img src='/Images/pngwing.com.png'/>
                        </div>
                         <div className='card-body'>
                            <h5>LeBron witness 6</h5>
                            <h6>$800</h6>
                        </div>
                    </div>
                    <div className='card-vm'>
                        <div className='around-card'>
                             <img src='/Images/pngegg (1).png'/>
                        </div>
                         <div className='card-body'>
                            <h5>PG</h5>
                             <h6>$860</h6>
                        </div>
                    </div>
                    <div className='card-vm'>
                        <div className='around-card'>
                             <img src='/Images/pngwing.com.png'/>
                        </div>
                        <div className='card-body'>
                            <h5>PG 7</h5>
                             <h6>$750</h6>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </main>
        <div className='container-four'>
           <div className='four-trending'>
            <div className='text-contentt'>
                 <h1>Trending Now</h1>
            </div>
            <div className='box-four'>
                <div className='picture-four'>
                    <img src='/Images/feet-1840619.jpg' />
                     <div className='text-four'>
                        <h1>Nike Air 270</h1>
                    </div>
                </div>
                 <div className='picture-four'>
                    <img src='/Images/mathias-reding-KD6w6xL8OIg-unsplash.jpg' />
                    <div className='text-four'>
                        <h1>Nike Air 270</h1>
                    </div>
                </div>
            </div>
           </div>
        </div>
        <div className='container-five'>
            <div className='box-five'>
                <div className='img-bbox'>
                  <img className='img-1' src='/Images/vecteezy_colored-grunge-circle-brush-ink-frame_21975749.png' />
                  <img className='img-2' src='/Images/freepik_br_b36bb0a7-0ed7-45fe-85da-adf63e8a1155.png' />
                </div>
                <div className='form-five'>
                    <div className='five-form'>
                        <h1>OUR NEWSLETTER</h1>
                        <form action='#'>
                         <div className='input-field'>
                          <input type='text' required />
                          <div className='telegram-icon'>
                            <img className='icon-telegram' src='/Images/telegram.svg' />
                          </div>
                         </div>
                         </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;
