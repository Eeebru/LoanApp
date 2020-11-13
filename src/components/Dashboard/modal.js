import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { useHistory, Redirect } from "react-router";

const DashModal = (props) => {
  const history = useHistory();
  
  const [isLoading, setLoading] = useState(props.show);
  
	function simulateNetworkRequest() {
		return new Promise((resolve) => {
			setTimeout(resolve, 5000);
		});
	}

	

	useEffect(() => {
		const load = async () => {
			if (!isLoading) {
				await simulateNetworkRequest();
				setLoading(!isLoading);
			}
		};
		load();
  }, [isLoading]);
  
  const handleSubmit = () => {
		setLoading(!isLoading)
	};
	return (
		<Modal
      {...props}
      hide={()=>!isLoading}
			size='md'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					<h4 className='text-center'>Add your card Details</h4>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group controlId='formGroupEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control type='email' placeholder='Enter email' />
					</Form.Group>
					<Form.Row>
						<Col>
							<Form.Control placeholder='First name' />
						</Col>
						<Col>
							<Form.Control placeholder='Last name' />
						</Col>
					</Form.Row>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				{/* <Button variant='secondary' onClick={props.onHide}>
					Close
				</Button> */}
				<Button
					disabled={!isLoading}
					onClick={isLoading ? handleSubmit : null}
					variant='flat'
					className='btn-flat'>
					{!isLoading ? "Please wait" : "Add Card"}
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default DashModal;
