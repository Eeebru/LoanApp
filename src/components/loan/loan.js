import React, { useState } from "react";
import { Form, Col, Button, Modal } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";

import "bootstrap/dist/css/bootstrap.min.css";
import "./loan.css";
import ColoredLine from "../utils/hr";

const Loan = (props) => {
	const [rangeValue, setRangeValue] = useState(3000);
	const [loanDurationValue, setLoanDurationValue] = useState(15);

	function calcInterest(val) {
		return Number((val / 100) * loanDurationValue);
	}

	function dueDate(date) {
		const dDate = new Date(Date.now() + +date * 24 * 60 * 60 * 1000)
			.toDateString()
			.split(" ");
		const obj = {
			day: dDate[0],
			month: dDate[1],
			date: dDate[2],
		};
		return `${obj.day}, ${obj.month} ${obj.date}`;
	}

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
					<Form className='mb-4'>
						<Form.Group controlId='formGroupEmail'>
							<Form.Label style={{ fontWeight: "bolder" }}>
								Select a Loan Amount:
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
							/>
							<Form.Row>
								<Col className='col-md-2'>
									<Form.Control placeholder={rangeValue} disabled />
								</Col>
							</Form.Row>
						</Form.Group>

						<Form.Group controlId='formGroupEmail'>
							<Form.Label style={{ fontWeight: "bolder" }}>
								Select Your Loan Duration:
							</Form.Label>
							<Form.Row>
								<Col className='col-md-5'>
									<Form.Control
										as='select'
										value={loanDurationValue}
										onChange={(e) => setLoanDurationValue(e.target.value)}>
										<option disabled>Select Duration</option>
										<option value='15'>15 days</option>
										<option value='30'>30 days</option>
									</Form.Control>
								</Col>
							</Form.Row>
						</Form.Group>
					</Form>
					<ColoredLine color='#230480' />
					<div>
						<h6 style={{ fontWeight: "bolder" }}>Loan details</h6>
						<div
							style={{
								border: "#230480 2px dotted",
								borderRadius: "10px",
								padding: "10px",
							}}>
							<div className='loanDetailsMember'>
								<p>Principal Amount</p>
								<h5>{`#${rangeValue}`}</h5>
							</div>
							<div className='loanDetailsMember'>
								<p>Interest</p>
								<h5>
									{" "}
									<span
										style={{
											fontSize: "12px",
											fontWeight: "normal",
										}}>{`(${loanDurationValue}%)`}</span>{" "}
									{`#${calcInterest(rangeValue)}`}
								</h5>
							</div>
							<div className='loanDetailsMember'>
								<p>Loan Amount Due</p>
								<h5>{`#${+rangeValue + calcInterest(rangeValue)}`}</h5>
							</div>
							<div className='loanDetailsMember'>
								<p>Loan Period</p>
								<h5>{`${loanDurationValue} days`}</h5>
							</div>
							<div className='loanDetailsMember'>
								<p>Due Date</p>
								<h5>{`${dueDate(loanDurationValue)}`}</h5>
							</div>
						</div>
					</div>
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
