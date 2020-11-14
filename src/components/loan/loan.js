import React from 'react';
import {Form, Col, Button, Modal } from 'react-bootstrap';


const Loan = ({props}) => {
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
						}}
						variant='flat'
						className='btn-flat'>
						
					</Button>
				</Modal.Footer>
			</Modal>
			
		</div>
	);
}
 
export default Loan;