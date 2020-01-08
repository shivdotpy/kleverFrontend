import React from 'react';
import { Link } from 'react-router-dom';
import './Hoc.css';

export const Hoc = (props) => {
	return (
		<div>
			<nav className="navbar navbar-light justify-content-between shadow-sm mb-2">
				<Link to="/" className="navbar-brand">
					Klever
				</Link>
				<div className="text-right">Logout</div>
			</nav>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-2">
						<div className="text-center">
							<table class="table table-borderless" id="hoc-sidebar">
								<tbody>
									<tr>
										<td>
											<i class="fas fa-rocket" />
										</td>
										<td className="text-left">
											<small>
												<b>Projects</b>
											</small>
										</td>
									</tr>
									<tr>
										<td />
										<td className="text-left">
											<small>Active Projects</small>
										</td>
									</tr>
									<tr>
										<td />
										<td className="text-left">
											<small>Pending Proposals</small>
										</td>
									</tr>
									<tr>
										<td>
											<i class="fas fa-envelope" />
										</td>
										<td className="text-left">
											<small>
												<b>Message</b>
											</small>
										</td>
									</tr>
                                    <tr>
										<td>
											<i class="fas fa-user-cog" />
										</td>
										<td className="text-left">
											<small>
												<b>Setting</b>
											</small>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="col-md-10">{props.children}</div>
				</div>
			</div>
		</div>
	);
};
