import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseContent from '../CourseContent/CourseContent';
import CourseTitle from '../CourseTitle/CourseTitle';
import './Courses.css'
const Courses = () => {
    const courses = useLoaderData()
    return (
        <>
            <h4 className='text-center py-2 my-3'>All Course</h4>
            <hr />
        <div className='courses m-2 p-4'>
            <div  className='me-lg-3 p-2'>
              {
                courses.map(course => <CourseTitle
                    key={course.index}
                    course = {course}
                ></CourseTitle>)
              }
            </div>
            <div className=' course-customize'>
            {
                courses.map(course => <CourseContent
                    key={course.index}
                    course = {course}
                ></CourseContent>)
              }
            </div>
        </div>
        </>
    );
};

export default Courses;