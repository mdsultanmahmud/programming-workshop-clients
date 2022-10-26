import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
const CourseContent = ({course}) => {
    const {index, name, picture, balance,ratings,title,lecture,about,timeDuration } = course 
    console.log(course)
    return (
        <Card className='shadow-lg'>
          <Card.Img style={{height:'200px'}} variant="top" src={picture} />
          <Card.Body>
            <Card.Title className='text-danger'>{name}</Card.Title>
            <Card.Text>
              {about.slice(0, 200) +'...'}
            </Card.Text>
            <div className='text-muted d-flex justify-content-between'>
                <strong>Lecture: {lecture}</strong>
                <strong>Duration: {timeDuration}h</strong>           
                </div>
            <Button variant="outline-danger px-4 mx-auto d-block mt-3"><Link to={`/courses/${index}`} className='link'>Details</Link></Button>
          </Card.Body>
        </Card>
      );
    }
export default CourseContent;