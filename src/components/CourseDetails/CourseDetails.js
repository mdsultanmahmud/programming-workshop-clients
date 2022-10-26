import React from 'react';
import { useLoaderData } from 'react-router-dom';
import  {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CourseDetails.css'
const CourseDetails = () => {
    const course = useLoaderData()
    const {index, name, picture, balance,ratings,title,lecture,about,timeDuration, authorName} = course
    console.log(course)
    return (
        <div className='course-details'>
            <img className='img-fluid' src={picture} alt="" />
            <h2><strong>Course Name: </strong> {name}</h2>
            <h3><strong>Course Title: </strong> {title}</h3>
            <h4 className='text-danger'><strong>Instructor Name: </strong>{authorName}</h4>
            <p className='text-muted'><strong>Read about this Course: </strong>{about} </p>
            <p className='text-danger text-uppercase'><strong>Price: $</strong>{balance}</p>
            <div className='course-info'>
                <p className='text-muted text-uppercase'><strong>Total Class: </strong>{lecture}</p>
                <p className='text-muted text-uppercase'><strong>Total Time: </strong>{timeDuration}h</p>
                <p className='text-muted text-uppercase'><strong>Ratings: </strong>{ratings}</p>
            </div>
            <Button className='w-50 my-3 mx-auto d-block' variant="outline-danger"><Link >Add To Cart</Link></Button>
        </div>
    );
};

export default CourseDetails;