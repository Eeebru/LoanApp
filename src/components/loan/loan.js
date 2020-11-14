import React, { useState } from "react";
import { Form, Col, Button, Modal } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import './loan.css'

const Loan = (props) => {
	const [rangeValue, setRangeValue] = useState(3000);

	return (
		<div>
			<Modal
				{...props}
				keyboard={false}
				backdrop='static'
				size='md'
				aria-labelledby='contained-modal-title-vcenter'
				centered>
				<Modal.Header closeButton>
					<Modal.Title id='contained-modal-title-vcenter'>
						<h5 className='text-center'>
							Congratulations,you have been approved for a loan Please select
							aloan offer below.
						</h5>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId='formGroupEmail'>
							<Form.Label style={{ fontWeight: "bolder" }}>
								Select a loan amount:
							</Form.Label>
							<br />
							<RangeSlider
								max='15000'
								min='3000'
								tooltip='on'
								tooltipPlacement='top'
								value={rangeValue}
								onChange={(e) => setRangeValue(e.target.value)}
								step={3000}
								variant='secondary'
								className='rangeSlid'
							/>
							<Form.Row>
								<Col className='col-md-2'>
									<Form.Control placeholder={rangeValue} disabled />
								</Col>
							</Form.Row>
						</Form.Group>

						<Form.Group controlId='formGroupEmail'>
							<Form.Label style={{ fontWeight: "bolder" }}>
								Select a loan amount:
							</Form.Label>
							<Form.Row>
								<Col>
									<Form.Control placeholder='First name' />
								</Col>
								<Col>
									<Form.Control placeholder='Last name' />
								</Col>
							</Form.Row>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button
						onClick={() => {
							props.onHide();
						}}
						variant='flat'
						className='btn-flat'>
						Confirm
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Loan;
