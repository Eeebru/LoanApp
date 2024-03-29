import React, { useState } from "react";
import { Container, Form, Col, Row, Button, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
// axios({
// 	baseURL: API_URL,
// 	url: url,
// 	method: method,
// 	data: data,
// 	headers: {
// 		Authorization: `Bearer ${TOKEN}`,
// 		"Content-Type": "application/json",
// 	},
// });

import "./signup.css";
import Hr from "../utils/hr";

// const BASEURL = "http://localhost:1111";
const BASEURL2 = "https://loanappbe.herokuapp.com";

const SignUp = () => {
	const [btnLoading, setBtnLoading] = useState(false);
	const [loginData, setLoginData] = useState(false);
	const [formName, setFormName] = useState(null);
	const [formPhone, setFormPhone] = useState(null);
	const [formBVN, setFormBVN] = useState(null);
	const [formEmail, setFormEmail] = useState(null);
	const [formPassword, setFormPassword] = useState(null);
	const [formConfirmPass, setFormConfirmPass] = useState(null);

	const formData = {
		name: formName,
		email: formEmail,
		bvn: formBVN,
		phone: formPhone,
		password: formPassword,
		confirmPass: formConfirmPass,
	};

	const handleSubmit = async (e) => {
		setBtnLoading(true);
		e.preventDefault();
		try {
			const fetchdata = await axios({
				baseURL: BASEURL2,
				url: "/api/signup",
				method: "POST",
				data: JSON.stringify(formData),
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (fetchdata.data) {
				setLoginData(fetchdata.data);
				setBtnLoading(false);
			}
		} catch (error) {
			const res = error.response;
			if (res) {
				console.log(res);
				setLoginData(res.data);
				setBtnLoading(false);
			}
		}
	};

	return (
		<div className=' parentDiv'>
			<Container fluid='md' className='p-5'>
				<h1 className='header'>Welcome To Your Loan App</h1>
				<div className='formContainer'>
					<h2>Please SignUp Here</h2>
					<Hr color='#230480' />
					<Form>
						<Form.Group as={Row} controlId='formName'>
							<Form.Label column sm='3'>
								Name:
							</Form.Label>
							<Col sm='9'>
								<Form.Control
									required
									type='text'
									value={formName}
									onChange={(e) => setFormName(e.target.value)}
								/>
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
										// aria-describedby='inputGroupPrepend'
										required
										value={formPhone}
										onChange={(e) => setFormPhone(e.target.value)}
									/>
								</InputGroup>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId='formBVN'>
							<Form.Label column sm='3'>
								BVN:
							</Form.Label>
							<Col sm='9'>
								<Form.Control
									required
									type='text'
									value={formBVN}
									onChange={(e) => setFormBVN(e.target.value)}
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId='formEmail'>
							<Form.Label column sm='3'>
								Email:
							</Form.Label>
							<Col sm='9'>
								<Form.Control
									required
									type='email'
									value={formEmail}
									onChange={(e) => setFormEmail(e.target.value)}
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId='formPassword'>
							<Form.Label column sm='3'>
								Password:
							</Form.Label>
							<Col sm='9'>
								<Form.Control
									required
									type='password'
									value={formPassword}
									onChange={(e) => setFormPassword(e.target.value)}
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId='formConfirmPassword'>
							<Form.Label column sm='3'>
								Confirm Password:
							</Form.Label>
							<Col sm='9'>
								<Form.Control
									required
									type='password'
									value={formConfirmPass}
									onChange={(e) => setFormConfirmPass(e.target.value)}
								/>
							</Col>
						</Form.Group>
						<Button
							type='submit'
							variant='signup'
							className='btn-signup'
							disabled={btnLoading}
							onClick={handleSubmit}
							block>
							{!btnLoading ? "Register" : "Please Wait"}
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
					<div className='text-center'>
						<h6
							style={{ color: loginData.success === false ? "red" : "green" }}>
							{loginData ? loginData.message : null}
						</h6>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default SignUp;
