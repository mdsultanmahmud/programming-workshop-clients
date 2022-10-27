import React from 'react';
import { useState } from 'react';
import {useLoaderData, useNavigate } from 'react-router-dom';
import './Checkout.css'
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import toast from 'react-hot-toast';
const Checkout = () => {
    const {user} = useContext(AuthContext)
    const course = useLoaderData()
    const { index, name, picture, balance, ratings, title, lecture, about, timeDuration, authorName } = course
    const navigate = useNavigate()
    const confirmCourse = () =>{
        toast.success('You are successfully purchuse!!')
        navigate('/')
    }
    return (
        <div className='cart-container'>
            <h3 className='text-danger text-center text-uppercase'>You Have to Pay {balance} for this course.</h3>
            <hr />
            <div className='d-flex flex-wrap justify-content-between'>
                <div>
                    <h4 className='text-white'><strong>Course Name:</strong> {name}</h4>
                    <p className='text-white'><strong>Price:</strong> ${balance}</p>
                </div>
                <div>
                    <p className='text-white'><strong>Lecture:</strong> {lecture}</p>
                    <p className='text-white'><strong>Instructor:</strong> {authorName}</p>
                </div>
                <div>
                    <p className='text-danger'><strong>Your Name:</strong> {user?.displayName}</p>
                    <p className='text-danger'><strong>Your Email:</strong> {user?.email}</p>
                </div>
            </div>
            <Button onClick={confirmCourse} className='w-50 d-block mx-auto' variant="danger">Confirm</Button>
        </div>
    );
};

export default Checkout;