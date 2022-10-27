import React from 'react';
import blogOne from '../../image/cors.png'
import blogTwo from '../../image/firebase.gif'
import blogThree from '../../image/private.jpg'
import blogFour from '../../image/node.png'
const Blog = () => {
    return (
        <div className='container'>
            <div className="blog-item  border shadow-lg rounded p-3 my-4 d-md-flex d-sm-block align-items-center">
                <div className='w-100'>
                    <img className='mx-auto d-block' style={{ width: '90%' }} src={blogOne} alt="" />
                </div>
                <div className='w-100'>
                    <h4 className='text-muted'>what is cors?</h4>
                    <p>
                        In cases where cross-domain scripting is desired, Cross-origin resource sharing (CORS) allows web developers to work around the same-origin policy. CORS adds HTTP headers which instruct web browsers on how to use and manage cross-domain content. The browser then allows or denies access to the content based on its security configuration
                    </p>
                </div>
            </div>



            <div className="blog-item  border shadow-lg rounded p-3 my-4 d-md-flex d-sm-block align-items-center">
                <div className='w-100'>
                    <h4 className='text-muted'> Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p>
                        It’s easy to start a project with Firebase or add a Firebase to your project. It allows real-time database connection, which means multiple users can see the changes in the data when the data gets created or edited. Data transmission is handled with web sockets so you don’t have to send requests to get new data, you only need to subscribe once.
                        The same applies for file storage. Quick setup authentication via the major providers (Google, Twitter, Facebook, GitHub). Https by default - secure http traffic without setting up certificates. Any static html/javascript content can be hosted.
                    </p>
                    <p>
                        There are some different authentication system: Auth0, MongoDB, Passport, Okta..
                    </p>
                </div>
                <div className='w-100'>
                    <img className='mx-auto d-block' style={{ width: '90%' }} src={blogTwo} alt="" />
                </div>
            </div>


            <div className="blog-item  border shadow-lg rounded p-3 my-4 d-md-flex d-sm-block align-items-center">
                <div className='w-100'>
                    <img className='mx-auto d-block' style={{ width: '90%' }} src={blogThree} alt="" />
                </div>
                <div className='w-100'>
                    <h4 className='text-muted'>How does the private route work?</h4>
                    <p>
                        Protected routes are those routes that only grant access to authorized users.
                        Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.

                        The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.
                    </p>
                </div>
            </div>



            <div className="blog-item  border shadow-lg rounded p-3 my-4 d-md-flex d-sm-block align-items-center">
                <div className='w-100'>
                    <h4 className='text-muted'> What is Node? How does Node work?</h4>
                    <p>
                        Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.
                    </p>
                    <p>
                        Node JS Platform does not follow Request/Response Multi-Threaded Stateless Model. It follows Single Threaded with Event Loop Model. Node JS Processing model mainly based on Javascript Event based model with Javascript callback mechanism.Event Loop uses Single Thread only. It is main heart of Node JS Platform Processing Model.Even Loop checks any Client Request is placed in Event Queue. If no, then wait for incoming requests for indefinitely.
                    </p>
                </div>
                <div className='w-100'>
                    <img className='mx-auto d-block' style={{ width: '90%' }} src={blogFour} alt="" />
                </div>
            </div>

        </div>
    )
}


export default Blog;