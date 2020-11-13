import React,{useState, useEffect} from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Hr from "../utils/hr";
import "./login.css";

const Login = () => {
	const [validated, setValidated] = useState(false);
  const [isLoading, setLoading] = useState(false);
  function simulateNetworkRequest() {
		return new Promise((resolve) => setTimeout(resolve, 5000));
	}

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
    const load = async ()=> {
      if (isLoading) {
        await simulateNetworkRequest()
        setLoading(false);
      }
    }
    load()
	}, [isLoading]);
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
							<Form noValidate validated={validated} onSubmit={handleSubmit}>
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
												{"Please choose a valid credential"}
											</Form.Control.Feedback>
										</InputGroup>
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId='formName'>
									<Form.Label column sm='3'>
										Password:
									</Form.Label>
									<Col sm='9'>
										<InputGroup>
											<Form.Control required type='password' />
											<Form.Control.Feedback type='invalid'>
												{"Invalid Password"}
											</Form.Control.Feedback>
										</InputGroup>
									</Col>
								</Form.Group>
								<Button
									disabled={isLoading}
									onClick={!isLoading ? handleSubmit : null}
									type='submit'
									variant='flat'
									className='btn-flat'
									block>
									{isLoading ? "Please wait" : "Register"}
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
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Login;
