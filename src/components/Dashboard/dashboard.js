import React, {useEffect} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./dashboard.css";
import cardPic from "./mastercard.jpg";
import DashModal from "./modal";

const Dashboard = () => {
	const [modalShow, setModalShow] = React.useState(false);
	const [showLoan, setShowLoan] = React.useState(false);

  function simulateNetworkRequest() {
		return new Promise((resolve) => {
			setTimeout(resolve, 5000);
		});
	}

	useEffect(() => {
		simulateNetworkRequest().then(() => setShowLoan(true));
	}, []);
	const simulateLoanHistory = [];

	return (
		<div>
			<Container className='p-4'>
				<Row className='mt-5 py-4'>
					<h2>Welcome {"Ibrahim"}</h2>
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
						{showLoan ? (
							<div>
								<h3 className='py-3' style={{ textAlign: "center" }}>
									We are here for you.
								</h3>
								<div className='getStarted'>
									<Link className='getStart'>Take a Loan</Link>
								</div>
							</div>
						) : (
							<div>
								<h3 className='py-3' style={{ textAlign: "center" }}>
									You're Credit worthy, please fill in your card details to
									begin taking loans
								</h3>
								<div onClick={() => setModalShow(true)} className='getStarted'>
									<Link className='getStart'>Add your card</Link>
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

				<h4 className='text-center'>Your Loan History</h4>
				<div>
					<table className='historyTable'>
						<thead className=''>
							<tr>
								<th>Date</th>
								<th>Amount</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{simulateLoanHistory.length > 0 ? (
								simulateLoanHistory.map((loanHistory) => (
									<tr>
										<td>{loanHistory.name}</td>
										<td>{loanHistory.department}</td>
										<td>{loanHistory.role}</td>
									</tr>
								))
							) : (
								<tr>
									<td colspan='4'>
										<h4>You have no loan history yet.</h4>
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</Container>
		</div>
	);
};

export default Dashboard;
