import React from 'react';
import Button from 'react-bootstrap/Button'
import home from '../../image/home.jpg'
import { Link, useLoaderData } from 'react-router-dom';
import './Home.css'
import CourseDemo from '../CourseDemo/CourseDemo';
import CoreFeature from '../CoreFeature/CoreFeature';
const Home = () => {
    const projects = useLoaderData()
    return (
        <div >
            {/* main page design  */}
            <div style={{ width: '100vw' }} className='d-sm-block d-md-flex align-items-center column-reverse my-5'>
                <div className='w-100 p-3'>
                    <img style={{ width: '90%', height: '350px' }} src={home} alt="" />
                </div>
                <div className='w-100 p-3'>
                    <h4 className='text-danger text-center text-uppercase home-title'>Learn From Programming Workshop</h4>
                    <p className='home-para'>
                        Technology Is Bringing A Massive Wave Of Evolution On Learning Things In Different Ways.
                    </p>
                    <Button className=' px-5 mb-2 mx-lg-3 ' variant="outline-danger">Get Started</Button>
                    <Button className=' px-5' variant="outline-dark"><Link className='link' to='/courses'>View Courses</Link></Button>
                </div>
            </div>
            <div>
                <h3 className='text-center text-uppercase text-danger  my-4 '>Our Project</h3>
                <hr />
            <div className='demo-container'>
                {
                    projects.map(project => <CourseDemo
                        key={project.index}
                        project={project}
                    ></CourseDemo>)
                }
            </div>
            </div>
            <CoreFeature></CoreFeature>
        </div>
    );
};

export default Home;