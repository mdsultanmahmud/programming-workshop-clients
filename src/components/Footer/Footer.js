import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div  className='mt-5 row link-container'>
            <div className='col-sm-12 col-md-6 col-lg-4 p-5'>
                <h4 className='text-white text-center'>Programming Workshop</h4>
                <hr className='hor-line'></hr>
                <address className='text-muted'>
                329 Queensberry Street, North Melbourne VIC 3051, Australia.
                <br />
                123 456 7890
                mdsultanmahmud.bd00@gmail.com
                </address>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 p-5'>
                <h4 className='text-white text-center'>Topics</h4>
                <hr className='hor-line'></hr>
                    <Link>HTML</Link>
                    <br />
                    <Link>CSS</Link>
                    <br />
                    <Link>JavaScript</Link>
                    <br />
                    <Link>React JS</Link>
                    <br />
                    <Link>Vue Js</Link>
                    <br />
                    <Link>Angular JS</Link>
                    <br />
                    <Link>MongoDB</Link>
                    <br />
                    <Link>Android</Link>
                    <br />
                    <Link>Development Tools</Link>
                    <br />
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 p-5'>
                <h4 className='text-white text-center'>Support</h4>
                <hr className='hor-line'></hr>
                    <Link>Documentation</Link>
                    <br />
                    <Link>Forums</Link>
                    <br />
                    <Link>Language Packs</Link>
                    <br />
                    <Link>Release Status</Link>
                    <br />
                    <hr />
                    <div className='d-flex justify-content-around '>
                        <FaFacebook  className='icon'></FaFacebook>
                        <FaInstagram className='icon'> </FaInstagram>
                        <FaWhatsapp  className='icon'></FaWhatsapp>
                        <FaLinkedin  className='icon'></FaLinkedin>
                    </div>
            </div>
        </div>
    );
};

export default Footer;