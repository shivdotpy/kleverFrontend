import React, { useState } from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SIGNIN_API_ENDPOINT } from '../../utils/constants';

export const Signin = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const onSubmit = () => {
		const body = {
			email,
			password
		};

		axios
			.post(SIGNIN_API_ENDPOINT, body)
			.then((response) => {
				console.log(response.data);
				localStorage.setItem('user', JSON.stringify(response.data.data))
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	return (
		<div>
			<div className="signin-box">
				<div>
					<h3 className="text-center text-info">Klever</h3>
				</div>
				<div className="m-3">
					<p className="text-center">
						<b>
							<small>We are glad to see you again</small>
						</b>
					</p>
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
				<div className="text-center">
					<button className="btn btn-info signin-btn-width" onClick={onSubmit}>
						Login
					</button>
				</div>
				<div className="text-center">
					<p>
						<b>
							<small>
								New to Klever? <Link to="/signup">Sign Up Here</Link>
							</small>
						</b>
					</p>
				</div>
			</div>
		</div>
	);
};
