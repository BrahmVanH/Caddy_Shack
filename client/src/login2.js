import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from './utils/mutations';

export default function Login() {
	const [loginFormData, setLoginFormData] = useState({
		username: '',
		password: '',
	});

	const [validated] = useState(false);

	const [showAlert, setShowAlert] = useState(false);

	const [loginUser] = useMutation(LOGIN_USER);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserFormData({ ...loginFormData, [name]: value });
	};

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
			console.log(data);
		} catch (err) {
			console.error(err);
			setShowAlert(true);
		}
	};
	return (
		<div className='row register-form'>
			<div className='col-md-8 offset-md-2'>
				<Form noValidate validated={validated} onSubmit={handleFormSubmit}>
					<Alert
						dismissible
						onClose={() => setShowAlert(false)}
						show={showAlert}
						variant='danger'>
						Something went wrong with your signup!
					</Alert>
					<Form.Group className='row form-group'>
						<div className='col-sm-4 label-column'>
							<Form.Label htmlFor='firstName' className='col-form-label'>
								Username
							</Form.Label>
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
						</div>
					</Form.Group>

					<Form.Group className='row form-group'>
						<div className='col-sm-4 label-column'>
							<Form.Label htmlFor='lastName' className='col-form-label'>
								Last Name
							</Form.Label>
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
						</div>
					</Form.Group>
					<Button
						disabled={
							!(
								userFormData.username &&
								userFormData.password 
							)
						}
						className='btn btn-light'
						type='submit'
						variant='success'>
						Submit
					</Button>
				</Form>
			</div>
		</div>
	);
}

<div>
	<section>
		<div className='myContainer container'>
			<div className='row d-flex justify-content-center'>
				<div className='col-12'>
					<div className='card mb-5'>
						<div className='card-body d-flex flex-column align-items-center'>
							<h1>Login</h1>
							<div className='bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4'>
								<svg
									className='bi bi-person'
									xmlns='http://www.w3.org/2000/svg'
									width='1em'
									height='1em'
									fill='currentColor'
									viewBox='0 0 16 16'>
									<path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z'></path>
								</svg>
							</div>

							<form className='text-center' method='post'>
								<div className='mb-3'>
									<input
										className='form-control'
										type='email'
										name='email'
										placeholder='Email'
									/>
								</div>
								<div className='mb-3'>
									<input
										className='form-control'
										type='password'
										name='password'
										placeholder='Password'
									/>
								</div>
								<div className='mb-3'>
									<button className='btn d-block w-100' type='submit'>
										<Link to='/Profile'>Login</Link>
									</button>
									<p className='noMember'>Not a Member Yet?</p>
									<button className='btn d-block w-100' type='submit'>
										<Link to='/signup'>Signup</Link>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>;