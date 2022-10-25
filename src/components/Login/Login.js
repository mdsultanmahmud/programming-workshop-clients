import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
const Login = () => {
    return (
        <>
            <Form className='w-50 mx-auto shadow-lg p-5 border rounded-lg'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  type="password" placeholder="Password" />
                </Form.Group>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                <br />
                <Button className='mt-2' variant="danger" type="submit">
                    Login
                </Button>
                <p>Don't have an account?? Please <Link to='/register'>Register</Link></p>
                <ButtonGroup className='w-100' vertical>
                    <Button className='w-100'  variant="outline-danger">Login with Google</Button>
                    <Button className='w-100'  variant="outline-dark">Login with Github</Button>
                </ButtonGroup>
            </Form>

        </>

    );
}

export default Login;