import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";

import "./signup.css";
import Hr from "../utils/hr";

const SignUp = () => {
	const [validated, setValidated] = useState(false);
	const [isLoading, setLoading] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		setValidated(true);
		//set true when database data arrived; TODO
		setLoading(true);
	};

	useEffect(() => {
		if (isLoading) {
			setLoading(false);
		}
	}, [isLoading]);

	return (
		<div className=' parentDiv'>
			<Container fluid='md' className='p-5'>
				<h1 className='header'>Welcome To Your Loan App</h1>
				<div className='formContainer'>
					<h2>Please SignUp Here</h2>
					<Hr color='#230480' />
					<Form noValidate validated={validated} onSubmit={handleSubmit}>
						<Form.Group as={Row} controlId='formName'>
							<Form.Label column sm='3'>
								Name:
							</Form.Label>
							<Col sm='9'>
								<InputGroup>
									<Form.Control required type='text' />
									<Form.Control.Feedback type='invalid'>
										Name is required.
									</Form.Control.Feedback>
								</InputGroup>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId='formPhone'>
							<Form.Label column sm=''>
								Phone:
							</Form.Label>
							<Col sm='9'>
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text id='inputGroupPrepend'>
											+234
										</InputGroup.Text>
									</InputGroup.Prepend>
									<Form.Control
										type='text'
										placeholder='8161814763'
										aria-describedby='inputGroupPrepend'
										required
									/>
									<Form.Control.Feedback type='invalid'>
										Please choose a valid phone number.
									</Form.Control.Feedback>
								</InputGroup>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId='formBVN'>
							<Form.Label column sm='3'>
								BVN:
							</Form.Label>
							<Col sm='9'>
								<InputGroup>
									<Form.Control required type='text' />
									<Form.Control.Feedback type='invalid'>
										BVN is required.
									</Form.Control.Feedback>
								</InputGroup>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId='formEmail'>
							<Form.Label column sm='3'>
								Email:
							</Form.Label>
							<Col sm='9'>
								<InputGroup>
									<Form.Control required type='email' />
									<Form.Control.Feedback type='invalid'>
										Please choose a valid Email.
									</Form.Control.Feedback>
								</InputGroup>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId='formPassword'>
							<Form.Label column sm='3'>
								Password:
							</Form.Label>
							<Col sm='9'>
								<InputGroup>
									<Form.Control required type='password' />
									<Form.Control.Feedback type='invalid'>
										Password must be more than 8 digits.
									</Form.Control.Feedback>
								</InputGroup>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId='formConfirmPassword'>
							<Form.Label column sm='3'>
								Confirm Password:
							</Form.Label>
							<Col sm='9'>
								<InputGroup>
									<Form.Control required type='password' />
									<Form.Control.Feedback type='invalid'>
										Password does not match.
									</Form.Control.Feedback>
								</InputGroup>
							</Col>
						</Form.Group>
						<Button
							type='submit'
							variant='signup'
							className='btn-signup'
							disabled={isLoading}
							onClick={!isLoading ? handleSubmit : null}
							block>
							{isLoading ? "Please wait" : "Register"}
						</Button>
						<div className='d-flex justify-content-end mt-2'>
							<p style={{ fontSize: "14px" }}>
								Already Registered?{" "}
								<span style={{ cursor: "pointer", color: "#230480" }}>
									<Link to='/login'>Login</Link>
								</span>
							</p>
						</div>
					</Form>
				</div>
			</Container>
		</div>
	);
};

export default SignUp;
