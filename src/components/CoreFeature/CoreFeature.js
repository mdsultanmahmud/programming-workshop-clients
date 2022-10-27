import React from 'react';
import './CoreFeature.css'
import { FaBootstrap, FaSass,FaCss3Alt, FaHtml5,FaReact,FaAngular,FaVuejs,FaDesktop } from 'react-icons/fa'
const CoreFeature = () => {
    return (
        <div className='p-5 mt-5'>
            <h2 className='text-danger text-center'>Programming Workshop Core Feature</h2>
            <p className='text-center text-muted'>We Provide Impressive Freatures For your Website. You can easily manage Your website. You will love it.</p>
            <div className='feature-container'>
                <div className=' shadow-lg border rounded p-3 d-flex justify-content-center align-items-center anim'>
                    <div data-aos='zoom-in' className='text-center'>
                         <FaBootstrap style={{width:'70px', height:'70px'}}></FaBootstrap>
                        <h3 className='text-muted'>Bootstrap</h3>
                    </div>
                </div>
                <div className=' shadow-lg border rounded p-3 d-flex justify-content-center align-items-center anim'>
                    <div data-aos='zoom-in' className='text-center'>
                         <FaSass style={{width:'70px', height:'70px'}}></FaSass>
                        <h3 className='text-muted'>Sass</h3>
                    </div>
                </div>
                <div className=' shadow-lg border rounded p-3 d-flex justify-content-center align-items-center anim'>
                    <div data-aos='zoom-in' className='text-center'>
                         <FaCss3Alt style={{width:'70px', height:'70px'}}></FaCss3Alt>
                        <h3 className='text-muted'>CSS3</h3>
                    </div>
                </div>
                <div className=' shadow-lg border rounded p-3 d-flex justify-content-center align-items-center anim'>
                    <div data-aos='zoom-in' className='text-center'>
                         <FaHtml5 style={{width:'70px', height:'70px'}}></FaHtml5>
                        <h3 className='text-muted'>HTML5</h3>
                    </div>
                </div>
                <div className=' shadow-lg border rounded p-3 d-flex justify-content-center align-items-center anim'>
                    <div data-aos='zoom-in' className='text-center'>
                         <FaReact style={{width:'70px', height:'70px'}}></FaReact>
                        <h3 className='text-muted'>REACT JS</h3>
                    </div>
                </div>
                <div className=' shadow-lg border rounded p-3 d-flex justify-content-center align-items-center anim'>
                    <div data-aos='zoom-in' className='text-center'>
                         <FaAngular style={{width:'70px', height:'70px'}}></FaAngular>
                        <h3 className='text-muted'>ANGULAR JS</h3>
                    </div>
                </div>
                <div className=' shadow-lg border rounded p-3 d-flex justify-content-center align-items-center anim'>
                    <div data-aos='zoom-in' className='text-center'>
                         <FaVuejs style={{width:'70px', height:'70px'}}></FaVuejs>
                        <h3 className='text-muted'>VUE JS</h3>
                    </div>
                </div>
                <div className=' shadow-lg border rounded p-3 d-flex justify-content-center align-items-center anim'>
                    <div data-aos='zoom-in' className='text-center'>
                         <FaDesktop style={{width:'70px', height:'70px'}}></FaDesktop>
                        <h3 className='text-muted'>Responsive</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreFeature;