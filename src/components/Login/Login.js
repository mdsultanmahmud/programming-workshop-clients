import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import toast from 'react-hot-toast'
import './Login.css'
const Login = () => {
    const {userLoginWithEmailAndPass, loginWithGoogle, loginWithGithub} = useContext(AuthContext)


    // login with email and password 
    const handleUserLogin = (event) =>{
        event.preventDefault()
        const form = event.target 
        const email = form.email.value 
        const password = form.password.value 
        userLoginWithEmailAndPass(email, password)
        .then(res =>{
            const user = res.user 
            console.log(user)
            toast.success('You are successfully login')
            form.reset()
        })
        .catch(e => console.error(e))
    }


    // login with google sign in method 
    const handleGoogleLogin = () =>{
        loginWithGoogle()
        .then(res =>{
            const user = res.user 
            toast.success('You are login successfully!!!')
        })
        .catch(e =>{
            console.error(e)
            toast.error(e.message)
        })
    }

    // login with github
    
    const handleGithubLogin = () =>{
        loginWithGithub()
        .then(res =>{
            const user = res.user 
            toast.success('You are login successfully!!!')
        })
        .catch(e =>{
            console.error(e)
            toast.error(e.message)
        })
    }
    return (
        <>
            <Form onSubmit={handleUserLogin} className='mx-auto shadow-lg p-5  rounded-lg customize-form'>
                <h3 className='text-center text-danger'>Please Login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password'  type="password" placeholder="Password" />
                </Form.Group>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                <br />
                <Button className='mt-2 px-4' variant="outline-danger" type="submit">
                    Login
                </Button>
                <p>Don't have an account?? Please <Link to='/register'>Register</Link></p>
                <ButtonGroup className='w-100' vertical>
                    <Button onClick={handleGoogleLogin} className='w-100'  variant="outline-danger">Login with Google</Button>
                    <Button onClick={handleGithubLogin} className='w-100'  variant="outline-dark">Login with Github</Button>
                </ButtonGroup>
            </Form>

        </>

    );
}

export default Login;