import React from 'react';
import { Link } from 'react-router-dom';
const CourseTitle = ({course}) => {
    const {index, name} = course
    return (
        <div>
            <h4 className='course-name'><Link  to={`/courses/:${index}`}>{name}</Link></h4>
            <hr />
        </div>
    );
};

export default CourseTitle;