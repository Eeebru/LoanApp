import React from "react";
import { NavLink } from "react-router-dom";
import CheckBox from "./checkbox";

import './confirmMail.css'

const EmailConfirm = () => {
	return (
		<div className='SuccessPage'>
			<div className='SuccessBox'>
				<div className='Container'>
					<CheckBox />
					<p className='text'>
						Your email address <br />
						has been confirmed!
					</p>
					<NavLink to='/login'>
						{" "}
						<button className='doneBtn'>Done</button>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default EmailConfirm;
