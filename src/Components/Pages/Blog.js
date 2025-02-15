import React from 'react';
import { Row, Col, Container} from 'react-bootstrap'
import './Blog.css';




export const Home = ()  => (
    /* Home section */

    
    <div>  

        <div className='background-blog-wite '>

            <div className='text-blog text-align'>
                <h1 className='size-48 color-blue weight-600'>Article & Blog</h1>
                <h6>Morbi risus elit, fringilla in cursus a, molestie non dui. Nunc <br></br> accumsan gravida risus, ac semper libero mollis ut.</h6>
            </div>

            <div className='card-blog-book all-flex wid-auto'>
                <div className='card-blog-inner'>
                    <div className='blog-card-text'>
                        <img src='Images/blog-img-1.jpg'></img>
                        <div className='text-view'>
                            <h6 className='h6-style'>Dec 18, 2020 <span>•</span><span>5 min read</span></h6>
                            <h3 className='color-blue'>Simple Design Tips for Crafting Better UI Cards</h3>
                            <h6 className='h6-style'>It’s a situation every designer knows; we work on a feature, 
                                we release it, but always we say to ourselves:
                            </h6>

                            <a href="">Read More <i class='fas fa-arrow-right'></i></a>
                        </div>
                    </div>
                </div>

                <div className='card-blog-inner'>
                    <div className='blog-card-text'>
                        <img src='Images/blog-img-2.jpg'></img>
                        <div className='text-view'>
                            <h6 className='h6-style'>Nov 22, 2006 <span>•</span><span>5 min read</span></h6>
                            <h3 className='color-blue'>How to choose the right colors when creating a website?</h3>
                            <h6 className='h6-style'>Many of us hope the PM will take care of it, 
                                and we will continue to improve the features we release.
                            </h6>

                            <a href="">Read More <i class='fas fa-arrow-right'></i></a>
                        </div>
                    </div>
                </div>

                <div className='card-blog-inner'>
                    <div className='blog-card-text'>
                        <img src='Images/blog-img-3.jpg'></img>
                        <div className='text-view'>
                            <h6 className='h6-style'>Sep 01, 2000 <span>•</span> <span>5 min read</span></h6>
                            <h3 className='color-blue'>Travelling as a way of self-discovery and progress</h3>
                            <h6 className='h6-style'>It’s a situation every designer knows; we work on a feature, 
                                we release it, but always we say to ourselves:
                            </h6>

                            <a href="">Read More <i class='fas fa-arrow-right'></i></a>
                        </div>
                    </div>
                </div>

                <div className='card-blog-inner'>
                    <div className='blog-card-text'>
                        <img src='Images/blog-img-4.jpg'></img>
                        <div className='text-view'>
                            <h6 className='h6-style'>Jul 11, 2015 <span>•</span><span>5 min read</span></h6>
                            <h3 className='color-blue'>How to design your site footer like we did</h3>
                            <h6 className='h6-style'>It’s a situation every designer knows; we work on a feature, 
                                we release it, but always we say to ourselves:
                            </h6>

                            <a href="">Read More <i class='fas fa-arrow-right'></i></a>
                        </div>
                    </div>
                </div>

                <div className='card-blog-inner'>
                    <div className='blog-card-text'>
                        <img src='Images/blog-img-5.jpg'></img>
                        <div className='text-view'>
                            <h6 className='h6-style'>Jan 31, 2000 <span>•</span><span>5 min read</span></h6>
                            <h3 className='color-blue'>Why choose a theme that looks good with WooCommerce</h3>
                            <h6 className='h6-style'>It’s a situation every designer knows; we work on a feature, 
                                we release it, but always we say to ourselves:
                            </h6>

                            <a href="">Read More <i class='fas fa-arrow-right'></i></a>
                        </div>
                    </div>
                </div>

                <div className='card-blog-inner'>
                    <div className='blog-card-text'>
                        <img src='Images/blog-img-6.jpg'></img>
                        <div className='text-view'>
                            <h6 className='h6-style'>Aug 27, 2019 <span>•</span><span>5 min read</span></h6>
                            <h3 className='color-blue'>How to write content about your photographs</h3>
                            <h6 className='h6-style'>It’s a situation every designer knows; we work on a feature, 
                                we release it, but always we say to ourselves:
                            </h6>

                            <a href="">Read More <i class='fas fa-arrow-right'></i></a>
                        </div>
                    </div>
                </div>

                <div className='card-blog-inner'>
                    <div className='blog-card-text'>
                        <img src='Images/blog-img-7.jpg'></img>
                        <div className='text-view'>
                            <h6 className='h6-style'>Feb 10, 2018 <span>•</span><span>5 min read</span></h6>
                            <h3 className='color-blue'>Helping a local business reinvent itself</h3>
                            <h6 className='h6-style'>It’s a situation every designer knows; we work on a feature, 
                                we release it, but always we say to ourselves:
                            </h6>

                            <a href="">Read More <i class='fas fa-arrow-right'></i></a>
                        </div>
                    </div>
                </div>

                <div className='card-blog-inner'>
                    <div className='blog-card-text'>
                        <img src='Images/blog-img-8.jpg'></img>
                        <div className='text-view'>
                            <h6 className='h6-style'>Mar 02, 2019 <span>•</span><span>5 min read</span></h6>
                            <h3 className='color-blue'>Lessons and insights from 8 years of Pixelgrade</h3>
                            <h6 className='h6-style'>It’s a situation every designer knows; we work on a feature, 
                                we release it, but always we say to ourselves:
                            </h6>

                            <a href="">Read More <i class='fas fa-arrow-right'></i></a>
                        </div>
                    </div>
                </div>

                <div className='card-blog-inner'>
                    <div className='blog-card-text'>
                        <img src='Images/blog-img-9.jpg'></img>
                        <div className='text-view'>
                            <h6 className='h6-style'>Mar 22, 2013 <span>•</span><span>5 min read</span></h6>
                            <h3 className='color-blue'>Caring is the new marketing</h3>
                            <h6 className='h6-style'>It’s a situation every designer knows; we work on a feature, 
                                we release it, but always we say to ourselves:
                            </h6>

                            <a href="">Read More <i class='fas fa-arrow-right'></i></a>
                        </div>
                    </div>
                </div>

                <div className='card-blog-inner'>
                    <div className='blog-card-text'>
                        <img src='Images/blog-img-10.jpg'></img>
                        <div className='text-view'>
                            <h6 className='h6-style'>Apr 09, 2011 <span>•</span><span>5 min read</span></h6>
                            <h3 className='color-blue'>Where to grow your business as a photographer: site or social media?</h3>
                            <h6 className='h6-style'>It’s a situation every designer knows; we work on a feature, 
                                we release it, but always we say to ourselves:
                            </h6>

                            <a href="">Read More <i class='fas fa-arrow-right'></i></a>
                        </div>
                    </div>
                </div>

                <div className='card-blog-inner'>
                    <div className='blog-card-text'>
                        <img src='Images/blog-img-11.jpg'></img>
                        <div className='text-view'>
                            <h6 className='h6-style'>Sep 27, 2016 <span>•</span><span>5 min read</span></h6>
                            <h3 className='color-blue'>How does writing influence your personal brand?</h3>
                            <h6 className='h6-style'>It’s a situation every designer knows; we work on a feature, 
                                we release it, but always we say to ourselves:
                            </h6>

                            <a href="">Read More <i class='fas fa-arrow-right'></i></a>
                        </div>
                    </div>
                </div>

                <div className='card-blog-inner'>
                    <div className='blog-card-text'>
                        <img src='Images/blog-img-12.jpg'></img>
                        <div className='text-view'>
                            <h6 className='h6-style'>Aug 28, 2004 <span>•</span><span>5 min read</span></h6>
                            <h3 className='color-blue'>Starting your traveling blog with Vasco</h3>
                            <h6 className='h6-style'>It’s a situation every designer knows; we work on a feature, 
                                we release it, but always we say to ourselves:
                            </h6>

                            <a href="">Read More <i class='fas fa-arrow-right'></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <button className='text-align'><i class="fa fa-newspaper-o"></i> Load more blog...</button>
        </div>
                
    </div>
		

)

export default Home;



