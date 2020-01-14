import React from 'react';
import { Link } from 'react-router-dom';
import './Hoc.css';
import { getUserType } from '../../utils/common-methods';

export const Hoc = (props) => {
	const userType = getUserType();

	const logout = () => {
		localStorage.clear();
		window.location.href = '/';
	};

	return (
		<div>
			<nav className="navbar navbar-light justify-content-between shadow-sm mb-2">
				<Link to="/" className="navbar-brand">
					Klever
				</Link>
				<div className="text-right logout-btn" onClick={logout}>
					<i className="fas fa-power-off" /> Logout
				</div>
			</nav>
			<div className="container-fluid">
				<div className="row">
					{props.hideSidebar ? null : (
						<div className="col-md-2">
							<div className="text-center">
								<table className="table table-borderless" id="hoc-sidebar">
									<tbody>
										<tr>
											<td>
												<i className="fas fa-rocket" />
											</td>
											<td className="text-left">
												<small>
													<b>Projects</b>
												</small>
											</td>
										</tr>
										{userType === 'employer' && (
											<tr>
												<td />
												<td className="text-left">
													<small>Active Projects</small>
												</td>
											</tr>
										)}
										{userType === 'freelancer' && (
											<tr>
												<td />
												<td className="text-left">
													<small>Pending Proposals</small>
												</td>
											</tr>
										)}
										<tr>
											<td>
												<i className="fas fa-envelope" />
											</td>
											<td className="text-left">
												<small>
													<b>Message</b>
												</small>
											</td>
										</tr>
										<tr>
											<td>
												<i className="fas fa-user-cog" />
											</td>
											<td className="text-left">
												<small>
													<b>
														{userType === 'employer' ? (
															<Link to="/employer-profile">Setting</Link>
														) : (
															<Link to="/freelancer-profile">Setting</Link>
														)}
													</b>
												</small>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					)}
					<div
						className={props.hideSidebar ? 'col-md-12' : 'col-md-10 p-3'}
						style={{ backgroundColor: '#F8F8F8' }}
					>
						{props.children}
					</div>
				</div>
			</div>
		</div>
	);
};
