import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { Card, Form, Button, Alert } from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/login.css";

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';


export default function Login() {
	const [loginFormData, setLoginFormData] = useState({
		username: '',
		password: ''
	});

	const [validated] = useState(false);

	const [showAlert, setShowAlert] = useState(false);

	const [loginUser] = useMutation(LOGIN_USER);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setLoginFormData({ ...loginFormData, [name]: value });
	};


	const handleSignupBtnClick = async (event) => {
		event.preventDefault();

		window.location.replace('/signup');
	}
	const handleFormSubmit = async (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		

		try {
			const { data } = await loginUser({
				variables: {
					...loginFormData,
				},
			});
			// Logs user in and stores token
			Auth.login(data.loginUser.token);
		
			window.location.assign('/profile');

		} catch (err) {
			console.error(err);
			setShowAlert(true);
		}
	};
	return (
<div className='myContainer container'>
			<div className='row d-flex justify-content-center py-5'  style={{minHeight: '492px', minWidth: '388px'}} >
				<div className='col-12'>
					<div className='card mb-4 p-3' style={{minWidth: '364px', minHeight: '430px'}} >
						<div className='card-body d-flex flex-column align-items-center'>
							<h1>Login</h1>
							<div className='bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4'>
								<svg
									className='bi bi-person'
									xmlns='http://www.w3.org/2000/svg'
									width='2em'
									height='2em'
									fill='currentColor'
									viewBox='0 0 16 16'>
									<path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z'></path>
								</svg>
							</div>
						</div>

		<div className='row register-form d-flex justify-content-center'>
			<div className='col-md-8'>
				<Form className='text-center' noValidate validated={validated} onSubmit={handleFormSubmit}>
					<Alert
						dismissible
						onClose={() => setShowAlert(false)}
						show={showAlert}
						variant='danger'
						className='m-auto'
						style={{maxWidth: '75%', fontSize: '.75rem', padding: '5px'}}
						>
						Incorrect username/password
					</Alert>
					<Form.Group className='my-3'>
							
							<Form.Control
								type='text'
								placeholder='username'
								name='username'
								onChange={handleInputChange}
								value={loginFormData.username}
								required
							/>
							<Form.Control.Feedback type='invalid'>
								Username is required!
							</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className='mb-3'>
						
							<Form.Control
								type='password'
								placeholder='password'
								name='password'
								onChange={handleInputChange}
								value={loginFormData.password}
								required
							/>
							<Form.Control.Feedback type='invalid'>
								Password is required!
							</Form.Control.Feedback>
					</Form.Group>
					
          <div className='mb-3 d-flex justify-content-around'>
					
              <Button
								
									className='btn d-block login-buttons'
									type='submit'
									>
										Login
							</Button>
				
              <Button className='btn d-block login-buttons' onClick={handleSignupBtnClick} type='button'>
                Sign Up
                </Button>
                
						</div>
					</Form>
			</div>
		</div>
		</div>
		</div>
		</div>
		</div>

	);
}



