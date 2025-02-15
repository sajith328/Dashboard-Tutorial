import React from 'react';
import { Row, Container} from 'react-bootstrap'
import './Contact.css';
export const Contact = ()  => (
    /* Home section */

    <div>  

        <div className='contact-container'>
            <div className='contact-width-500 wid-auto'>
                <img src='Images/404-page.png'></img>

                <div className='contact-404-page text-align'>
                    <h1 className='color-blue size-48'>Page not found...</h1>
                    <h5>Something went wrong. It’s look that your requested could not be found.
                         It’s look like the link is broken or the page is removed.
                    </h5>

                    <button><i class="fa fa-home"></i> Go to home</button>
                </div>
            </div>
        </div>

    </div>
		

)

export default Contact



