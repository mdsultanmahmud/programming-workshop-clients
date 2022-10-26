import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';
import errorImg from '../../image/error.jpg'
const ErrorPage = () => {
    const error = useRouteError()
    console.error(error)
        return (
        <div className='d-flex justify-content-center align-items-center' style={{width:'100vw', height:'100vh'}}>
           <div style={{width:'50vh'}}>
           <img  style={{width:'300px', height:'300px'}} src={errorImg} alt="" />
            <h3>You are throwing a wrong url</h3>
            <p>There are no page for this url, please check your url and going to right webpage. Go to <Link to='/'>home page</Link></p>
           </div>
        </div>
    );
};

export default ErrorPage;