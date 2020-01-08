import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';
import { SIGNUP_API_ENDPOINT } from '../../utils/constants';

export const Signup = () => {
	const [ fullName, setFullName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ companyName, setCompanyName ] = useState('');
	const [ phoneNumber, setPhoneNumber ] = useState('');

	const onSubmit = () => {
		const body = {
			fullName,
			email,
			password,
			companyName,
			phoneNumber
		};

		axios
			.post(SIGNUP_API_ENDPOINT, body)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	return (
		<div>
			<div className="signup-box">
				<div>
					<h3 className="text-center text-info">Klever</h3>
				</div>
				<div>
					<p className="text-center">
						<b>
							<small>
								Create your free account <br /> to start working with top talent today!
							</small>
						</b>
					</p>
				</div>
				<div className="form-group">
					<input
						className="form-control"
						placeholder="Full Name"
						name="fullName"
						value={fullName}
						onChange={(event) => {
							setFullName(event.target.value);
						}}
					/>
				</div>
				<div className="form-group">
					<input
						className="form-control"
						placeholder="Email"
						name="email"
						value={email}
						onChange={(event) => {
							setEmail(event.target.value);
						}}
					/>
				</div>
				<div className="form-group">
					<input
						className="form-control"
						placeholder="Password"
						name="password"
						type="password"
						value={password}
						onChange={(event) => {
							setPassword(event.target.value);
						}}
					/>
				</div>
				<div className="form-group">
					<input
						className="form-control"
						placeholder="Company Name"
						name="companyName"
						value={companyName}
						onChange={(event) => {
							setCompanyName(event.target.value);
						}}
					/>
				</div>
				<div className="form-group">
					<input
						className="form-control"
						placeholder="Phone Number"
						name="phoneNumber"
						value={phoneNumber}
						onChange={(event) => {
							setPhoneNumber(event.target.value);
						}}
					/>
				</div>
				<div className="text-center">
					<button className="btn btn-info signup-btn-width" onClick={onSubmit}>
						Join Us
					</button>
				</div>
				<div className="text-center">
					<div>
						<small>
							<b>By joing, you agree to</b> <Link to=""> Klever's Terms of Service</Link>
						</small>
					</div>
					<small>
						Do you already have an account? <Link to="/signin">Proceed to login</Link>
					</small>
				</div>
			</div>
		</div>
	);
};
