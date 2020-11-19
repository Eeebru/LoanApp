import React, { useState } from "react";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link, useHistory } from "react-router-dom";
import addLocalstorage from "../utils/localstorage";
import "bootstrap/dist/css/bootstrap.min.css";

import Hr from "../utils/hr";
import "./login.css";

// const BASEURL = "http://localhost:1111";
const BASEURL2 = "https://loanappbe.herokuapp.com";

const Login = () => {
	const history = useHistory();
	const [btnLoading, setBtnLoading] = useState(false);
	const [formPhone, setFormPhone] = useState("");
	const [formPass, setFormPass] = useState("");
	const [backendVal, setBackendVal] = useState("");

	const formData = {
		phone: formPhone,
		password: formPass,
	};

	const handleSubmit = async (e) => {
		setBtnLoading(true);
		e.preventDefault();
		try {
			const fetchdata = await axios({
				baseURL: BASEURL2,
				url: "/api/login",
				method: "POST",
				data: JSON.stringify(formData),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const jsonData = await fetchdata.data;
			if (jsonData) {
				setBackendVal(jsonData);
				setBtnLoading(false);
				if (jsonData.success === true) {
					addLocalstorage(jsonData, "loginData");
					history.push("/dashboard");
				}
			}
		} catch (error) {
			const res = error.response;
			if (res) {
				setBackendVal(res.data);
				setBtnLoading(false);
			}
		}
	};

	return (
		<div className='loginParentDiv'>
			<Container className='loginContainerDiv'>
				<Row>
					<Col style={{ paddingTop: "120px", color: "#fff" }} md={4}>
						<h4>
							How Much Loan <br /> Do You Need Today?
						</h4>
					</Col>

					<Col md={{ span: 5, offset: 3 }}>
						<div className='loginFormDiv'>
							<h2>Login Here</h2>
							<Hr color='#230480' />
							<Form onSubmit={handleSubmit}>
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
												value={formPhone}
												onChange={(e) => setFormPhone(e.target.value)}
											/>
										</InputGroup>
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId='formName'>
									<Form.Label column sm='3'>
										Password:
									</Form.Label>
									<Col sm='9'>
										<InputGroup>
											<Form.Control
												required
												type='password'
												value={formPass}
												onChange={(e) => setFormPass(e.target.value)}
											/>
										</InputGroup>
									</Col>
								</Form.Group>
								<Button
									disabled={btnLoading}
									onClick={handleSubmit}
									type='submit'
									variant='flat'
									className='btn-flat'
									block>
									{!btnLoading ? "Login" : "Please Wait"}
								</Button>
								<div className='d-flex justify-content-end mt-2'>
									<p style={{ fontSize: "14px" }}>
										Not Registered?{" "}
										<span style={{ cursor: "pointer", color: "#230480" }}>
											<Link to='/'>Sign Up</Link>
										</span>
									</p>
								</div>
							</Form>
							<div className='text-center'>
								<h6 style={{ color: "red" }}>
									{!backendVal.success ? backendVal.message : null}
								</h6>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Login;
