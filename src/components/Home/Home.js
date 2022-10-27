import React from 'react';
import Button from 'react-bootstrap/Button'
import home from '../../image/home.jpg'
import { Link } from 'react-router-dom';
import './Home.css'
import CourseDemo from '../CourseDemo/CourseDemo';
import CoreFeature from '../CoreFeature/CoreFeature';
const Home = () => {
    return (
        <div >
            {/* main page design  */}
            <div style={{ width: '100vw', height:'80vh' }} className='d-sm-block d-md-flex align-items-center column-reverse'>
                <div className='w-100 p-3'>
                    <img style={{ width: '100%', height: '350px' }} src={home} alt="" />
                </div>
                <div className='w-100 p-3'>
                    <h4 className='text-danger text-uppercase home-title'>Learn From Programming Workshop</h4>
                    <p className='home-para'>
                        Technology Is Bringing A Massive Wave Of Evolution On Learning Things In Different Ways.
                    </p>
                    <Button className='w-50 ' variant="outline-danger">Get Started</Button>
                    <Button className='w-50' variant="outline-dark"><Link className='link' to='/courses'>View Courses</Link></Button>
                </div>
            </div>
            <CourseDemo></CourseDemo>
            <CoreFeature></CoreFeature>
        </div>
    );
};

export default Home;