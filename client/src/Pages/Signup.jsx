import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { Form, Button, Alert, Dropdown } from 'react-bootstrap';

import './assets/css/signup.css';


import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';

export default function Register() {
	const [userFormData, setUserFormData] = useState({
		firstName: '',
		lastName: '',
		username: '',
		password: '',
		age: '',
		gender: '',
		genderInterest: '',
		bio: '',
	});

	const [validated] = useState(false);

	const [showAlert, setShowAlert] = useState(false);

	const [createUser] = useMutation(CREATE_USER);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserFormData({ ...userFormData, [name]: value });
	};

	const handleGenderDropdownSelect = (eventKey) => {
		setUserFormData({ ...userFormData, gender: eventKey });
	};

	const handleGenderInterestDropdownSelect = (eventKey) => {
		setUserFormData({ ...userFormData, genderInterest: eventKey });
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		console.log(userFormData);

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		try {
			const userAge = parseInt(userFormData.age, 10);
			console.log(userAge);
			const { data } = await createUser({
				variables: {
					firstName: userFormData.firstName,
					lastName: userFormData.lastName,
					username: userFormData.username,
					password: userFormData.password,
					age: userAge,
					gender: userFormData.gender,
					genderInterest: userFormData.genderInterest,
					bio: userFormData.bio,
				},
				
				// ...userFormData, age: userAge,
			});
			console.log(data);
			console.log(userFormData);
		} catch (err) {
			console.error(err);
			setShowAlert(true);
		}
	};

	return (
		<div className='row register-form d-flex justify-content-center py-5' >
			<div className='col-md-3 py-' style={{backgroundColor: "white", paddingTop: "2rem", borderRadius: ".375rem"}}>
				<Form noValidate validated={validated} onSubmit={handleFormSubmit}>
					<Alert
						dismissible
						onClose={() => setShowAlert(false)}
						show={showAlert}
						variant='danger'>
						Something went wrong with your signup!
					</Alert>
					<Form.Group className='row justify-content-center form-group'>
						<div className='col-sm-8 label-column'>
							<Form.Label htmlFor='firstName' className='col-form-label'>
								First Name
							</Form.Label>
							<Form.Control
								type='text'
								placeholder='first name'
								name='firstName'
								onChange={handleInputChange}
								value={userFormData.firstName}
								required
							/>
							<Form.Control.Feedback type='invalid'>
								First name is required!
							</Form.Control.Feedback>
						</div>
					</Form.Group>

					<Form.Group className='row justify-content-center form-group'>
						<div className='col-sm-8 label-column'>
							<Form.Label htmlFor='lastName' className='col-form-label'>
								Last Name
							</Form.Label>
							<Form.Control
								type='text'
								placeholder='last name'
								name='lastName'
								onChange={handleInputChange}
								value={userFormData.lastName}
								required
							/>
							<Form.Control.Feedback type='invalid'>
								Last name is required!
							</Form.Control.Feedback>
						</div>
					</Form.Group>

					<Form.Group className='row justify-content-center form-group'>
						<div className='col-sm-8 label-column'>
							<Form.Label htmlFor='username' className='col-form-label'>
								Username
							</Form.Label>
							<Form.Control
								type='text'
								placeholder='username'
								name='username'
								onChange={handleInputChange}
								value={userFormData.username}
								required
							/>
							<Form.Control.Feedback type='invalid'>
								Username is required!
							</Form.Control.Feedback>
						</div>
					</Form.Group>

					<Form.Group className='row justify-content-center form-group'>
						<div className='col-sm-8 label-column'>
							<Form.Label htmlFor='password' className='col-form-label'>
								password
							</Form.Label>
							<Form.Control
								type='password'
								placeholder='password'
								name='password'
								onChange={handleInputChange}
								value={userFormData.password}
								required
							/>
							<Form.Control.Feedback>
								A password is required!
							</Form.Control.Feedback>
						</div>
					</Form.Group>
					<Form.Group className='row justify-content-center form-group'>
						<div className='col-sm-8 label-column'>
							<Form.Label htmlFor='age' className='col-form-label'>
								Age
							</Form.Label>
							<Form.Control
								type='text'
								placeholder='age'
								name='age'
								onChange={handleInputChange}
								value={userFormData.age}
								required
							/>
							<Form.Control.Feedback>
								Your age is required!
							</Form.Control.Feedback>
						</div>
					</Form.Group>

					<Form.Group className='row justify-content-center form-group'>
						<div className='col-sm-8 label-column'>
							<Form.Label htmlFor='gender' className='col-form-label'>
								Your Gender
							</Form.Label>
							<Form.Control
								type='hidden'
								name='gender'
								value={userFormData.gender}
								required
							/>

							<Dropdown onSelect={handleGenderDropdownSelect}>
								<Dropdown.Toggle variant='success' id='dropdown-basic'>
									{userFormData.gender || 'Choose gender'}
								</Dropdown.Toggle>

								<Dropdown.Menu name='gender'>
									<Dropdown.Item eventKey='male'>Male</Dropdown.Item>
									<Dropdown.Item eventKey='female'>Female</Dropdown.Item>
									<Dropdown.Item eventKey='other'>Other</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
							<Form.Control.Feedback>
								Your gender is required!
							</Form.Control.Feedback>
						</div>
					</Form.Group>
					<Form.Group className='row justify-content-center form-group'>
						<div className='col-sm-8 label-column'>
							<Form.Label htmlFor='genderInterest' className='col-form-label'>
								Your Gender interest
							</Form.Label>
							<Form.Control
								type='hidden'
								name='genderInterest'
								value={userFormData.genderInterest}
								required
							/>
							<Dropdown onSelect={handleGenderInterestDropdownSelect}>
								<Dropdown.Toggle variant='success' id='dropdown-basic'>
									{userFormData.genderInterest || 'Choose gender interest'}
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item eventKey='male'>Male</Dropdown.Item>
									<Dropdown.Item eventKey='female'>Female</Dropdown.Item>
									<Dropdown.Item eventKey='other'>Other</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
							<Form.Control.Feedback>
								Your gender interest is required!
							</Form.Control.Feedback>
						</div>
					</Form.Group>

					<Form.Group className='row justify-content-center form-group'>
						<div className='col-sm-8 label-column'>
							<Form.Label htmlFor='bio' className='col-form-label'>
								Your Bio
							</Form.Label>
							<Form.Control
								type='textarea'
								placeholder='Bio'
								name='bio'
								onChange={handleInputChange}
								value={userFormData.bio}
								required
							/>
							<Form.Control.Feedback>A bio is required!</Form.Control.Feedback>
						</div>
					</Form.Group>
				<div className='d-flex justify-content-center form-group m-2 py-5'>
					<Link to='/profile'>
						<Button
							disabled={
								!(
									userFormData.firstName &&
									userFormData.lastName &&
									userFormData.username &&
									userFormData.password &&
									userFormData.age &&
									userFormData.gender &&
									userFormData.genderInterest &&
									userFormData.bio
								)
							}
							className='btn btn-light'
							type='submit'
							variant='success'>
							Submit
						</Button>
						</Link>
					</div>
				</Form>
			</div>
		</div>
	);
}
