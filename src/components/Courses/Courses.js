import React from 'react';
import CourseContent from '../CourseContent/CourseContent';
import CourseTitle from '../CourseTitle/CourseTitle';

const Courses = () => {
    return (
        <div className='flex flex-wrap'>
            <div className='flex-none'>
                <CourseTitle></CourseTitle>
            </div>
            <div className='flex-auto'>
                <CourseContent></CourseContent>
            </div>
        </div>
    );
};

export default Courses;