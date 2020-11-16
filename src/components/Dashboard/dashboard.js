import React from "react";
import dayjs from "dayjs";
import { Col, Row, Card, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { usePaystackPayment } from "react-paystack";

import "./dashboard.css";
import cardPic from "./mastercard.jpg";
import DashModal from "./modal";
import Loan from "../loan/loan";
import WithAuth from "../utils/routeAuth";

// message: "Approved";
// reference: "1605558044516";
// status: "success";
// trans: "886933000";
// transaction: "886933000";
// trxref: "1605558044516";

const config = {
	reference: new Date().getTime(),
	email: "user@example.com",
	amount: 20000,
	publicKey: "pk_test_61b233a715355010831dd3c09fc9888ee64f6f3d",
};

const Dashboard = () => {
	// const userLoans = JSON.parse(localStorage.getItem('loanData'))
	const userData = JSON.parse(localStorage.getItem("loginData"));
	const [modalShow, setModalShow] = React.useState(false);
	const [loanModalShow, setloanModalShow] = React.useState(false);
	const [showLoanBtn, setShowLoanBtn] = React.useState(false);

	// you can call this function anything
	const onSuccess = (reference) => {
		// Implementation for whatever you want to do with reference and after success call.
		console.log(reference);
		if (reference.status === "success") {
			setShowLoanBtn(true);
		}
	};
	const onClose = () => {
		// implementation for  whatever you want to do when the Paystack dialog closed.
		console.log("closed");
	};
	const initializePayment = usePaystackPayment(config);

	const loansArray = userData.loan;

	return (
		<div>
			<Container className='p-4'>
				<Row className='mt-5 py-4'>
					<h2>Welcome {userData.user.name}</h2>
				</Row>
				<Row className='py-4'>
					<Col md={5}>
						<Card
							style={{ borderLeft: "#3b1e94 solid 6px", borderRadius: "16px" }}
							className='bg-dark text-white'>
							<Card.Img
								src={cardPic}
								alt='Card image'
								style={{
									borderRadius: "16px",
								}}
							/>
							<Card.ImgOverlay>
								<Card.Header>
									<Nav variant='flat'>
										<Nav.Item className='nav-item'>
											<Nav.Link className='nav-link' href='#first'>
												Home
											</Nav.Link>
										</Nav.Item>
										<Nav.Item className='nav-item'>
											<Nav.Link className='nav-link' href='#link'>
												Settings
											</Nav.Link>
										</Nav.Item>
									</Nav>
								</Card.Header>
							</Card.ImgOverlay>
						</Card>
					</Col>
					<Col md={{ span: 4, offset: 3 }}>
						{showLoanBtn || loansArray.length > 0 ? (
							<div>
								<h3 className='py-3' style={{ textAlign: "center" }}>
									We are here for you.
								</h3>
								<div className='getStarted'>
									<Link
										onClick={() => setloanModalShow(true)}
										// to='/loan'
										className='getStart'>
										Take a Loan
									</Link>
								</div>
							</div>
						) : (
							<div>
								<h3 className='py-3' style={{ textAlign: "center" }}>
									You're credit worthy, please fill in your card details to
									begin taking loans
								</h3>
								<div onClick={() => setModalShow(false)} className='getStarted'>
									<Link
										className='getStart'
										onClick={() => {
											initializePayment(onSuccess, onClose);
										}}>
										{" "}
										Add your card{" "}
									</Link>
								</div>
							</div>
						)}
					</Col>
				</Row>
				<DashModal
					keyboard={false}
					backdrop='static'
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
				<Loan show={loanModalShow} onHide={() => setloanModalShow(false)} />
				<h4 className='text-center'>Your Loan History</h4>
			</Container>
			<div style={{ width: "80%", margin: "0 auto" }}>
				<table className='historyTable'>
					<thead className=''>
						<tr>
							<th>Start Date</th>
							<th>Amount</th>
							<th>Interest</th>
							<th>Amount Payable</th>
							<th>Due Date</th>
							<th>Loan Period</th>
							<th>Loan Status</th>
						</tr>
					</thead>
					<tbody>
						{loansArray.length > 0 ? (
							loansArray.map((loanHistory) => {
								return (
									<tr>
										<td>
											{dayjs(new Date(loanHistory.startDate))
												.format("MMM D YYYY")
												.toString()}
										</td>
										<td>{loanHistory.principalAmount}</td>
										<td>{loanHistory.interestAmount}</td>
										<td>{loanHistory.amountDue}</td>
										<td>{loanHistory.dueDate}</td>
										<td>{loanHistory.loanPeriod}</td>
										<td>{loanHistory.status}</td>
									</tr>
								);
							})
						) : (
							<tr>
								<td colspan='7'>
									<h4>You have no loan history yet.</h4>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default WithAuth(Dashboard);
