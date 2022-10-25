import React from 'react';
import CourseContent from '../CourseContent/CourseContent';
import CourseTitle from '../CourseTitle/CourseTitle';

const Courses = () => {
    return (
        <div className='flex flex-wrap'>
            <div className=''>
                <CourseTitle></CourseTitle>
            </div>
            <div className=''>
                <CourseContent></CourseContent>
            </div>
        </div>
    );
};

export default Courses;