import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import toast from 'react-hot-toast'
import './Login.css'
import { useState } from 'react';
const Login = () => {
    const [error, setError] = useState()
    const { userLoginWithEmailAndPass, loginWithGoogle, loginWithGithub } = useContext(AuthContext)
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const navigate = useNavigate()
    // login with email and password 
    const handleUserLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        userLoginWithEmailAndPass(email, password)
            .then(res => {
                const user = res.user
                console.log(user)
                toast.success('You are successfully login')
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
    }


    // login with google sign in method 
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(res => {
                const user = res.user
                toast.success('You are login successfully!!!')
                navigate(from, { replace: true })
            })
            .catch(e => {
                console.error(e)
                toast.error(e.message)
                setError(e.message)
            })
    }

    // login with github

    const handleGithubLogin = () => {
        loginWithGithub()
            .then(res => {
                const user = res.user
                toast.success('You are login successfully!!!')
                navigate(from, { replace: true })
            })
            .catch(e => {
                console.error(e)
                toast.error(e.message)
                setError(e.message)
            })
    }
    return (
        <>
            <Form onSubmit={handleUserLogin} className='mx-auto shadow-lg p-5 border  rounded-lg customize-form'>
                <h3 className='text-center text-danger'>Please Login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                {
                    error &&
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                }
                <br />
                <Button className='mt-2 px-4' variant="outline-danger" type="submit">
                    Login
                </Button>
                <p>Don't have an account?? Please <Link to='/register'>Register</Link></p>
                <ButtonGroup className='w-100' vertical>
                    <Button onClick={handleGoogleLogin} className='w-100' variant="outline-danger">Login with Google</Button>
                    <Button onClick={handleGithubLogin} className='w-100' variant="outline-dark">Login with Github</Button>
                </ButtonGroup>
            </Form>

        </>

    );
}

export default Login;