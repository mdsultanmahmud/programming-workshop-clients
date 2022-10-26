import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/UserContext';
import regis from '../../image/registration.jpg'
import toast from 'react-hot-toast';
import './Register.css'
import { useState } from 'react';
const Register = () => {
    const [error, setError] = useState('Fill the form properly')
    const { createUser, updateUserProfile } = useContext(AuthContext)

    // created user 
    const hendleRegister = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photourl = form.photourl.value
        const email = form.email.value
        const password = form.password.value
        const profile = {
            displayName: name,
            photoURL: photourl
        }
        createUser(email, password)
            .then(res => {
                const user = res.user
                // update user profile here
                updateUserProfile(profile)
                    .then(res => {
                        //user profile successfully updated
                    })
                    .catch(e => {
                        console.error(e)
                    })
                console.log(user)
                toast.success('Your are successfully created an account!!')
                form.reset()
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
    }


    return (
        <div className='m-2'>
            <h2 className='text-danger text-center text-uppercase'>Registration with us</h2>
            <hr />
            <div className='form-design'>
                <div>
                    <img src={regis} alt="" />
                </div>
                <div>

                    <Form onSubmit={hendleRegister} className='border rounded shadow-lg border-danger p-4 m-4'>
                        <Form.Group className="mb-3" >
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control className='border border-danger' name='name' type="text" placeholder="Your Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Your Photo</Form.Label>
                            <Form.Control className='border border-danger' name='photourl' type="text" placeholder="Photo URL" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className='border border-danger' name='email' type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className='border border-danger' name='password' type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Text className=" text-danger">
                                {error}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button className='px-4' variant="danger" type="submit">
                            Register
                        </Button>
                    </Form></div>
            </div>
        </div>
    );
}
export default Register;