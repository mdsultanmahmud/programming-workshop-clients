import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import regis from '../../image/registration.jpg'
import './Register.css'
const Register = () => {
    return (
        <div>
             <h2 className='text-danger text-center text-uppercase'>Registration with us</h2>
               <hr />
            <div className='form-design'>
                    <div>  
                        <img src={regis} alt="" />
                    </div>
                <div>

                    <Form className=' border p-4 m-4 mx-auto'>
                        <Form.Group className="mb-3" >
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Your Photo</Form.Label>
                            <Form.Control type="text" placeholder="Photo URL" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            Register
                        </Button>
                    </Form></div>
            </div>
        </div>
    );
}
export default Register;