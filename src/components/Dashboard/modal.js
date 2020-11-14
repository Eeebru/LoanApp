import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";


const DashModal = (props) => {

	const [showToast, setShowToast] = useState(false);

	

	return (
		<div>
			<Modal
				{...props}
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
					<Button
						onClick={() => {
							props.onHide();
							setShowToast(true);
						}}
						variant='flat'
						className='btn-flat'>
						Add Card
					</Button>
				</Modal.Footer>
			</Modal>
			{showToast && (
				<div
					aria-live='polite'
					aria-atomic='true'
					style={{
						position: "absolute",
						minHeight: "100px",
						minWidth: "300px",
						top: 30,
						right: 230,
					}}>
					<Toast
						delay={4000}
						autohide
						show={showToast}
						onClose={() => setShowToast(false)}
						style={{
							position: "absolute",
							top: 0,
							right: 0,
						}}>
						<Toast.Header>Successfull!</Toast.Header>
						<Toast.Body>Your Card has been added successfully</Toast.Body>
					</Toast>
				</div>
			)}
		</div>
	);
};

export default DashModal;
