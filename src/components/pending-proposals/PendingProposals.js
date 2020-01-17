import React, { useEffect, useState } from 'react';
import { Hoc } from '../hoc/Hoc';
import axios from 'axios';
import {
	GET_PENDING_PROPOSALS_API_ENDPOINT,
	ACCEPT_PROPOSAL_API_ENDPOINT,
	DECLINE_PROPOSAL_API_ENDPOINT
} from '../../utils/constants';
import { getUserToken } from '../../utils/common-methods';

export const PendingProposals = () => {
	const [ pendingProposals, setPendingProposals ] = useState([]);

	useEffect(() => {
		getMyPendingProposals();
	}, []);

	const userToken = getUserToken();

	const getMyPendingProposals = () => {
		axios
			.get(GET_PENDING_PROPOSALS_API_ENDPOINT, {
				headers: { token: userToken }
			})
			.then((response) => {
				console.log(response.data);
				setPendingProposals(response.data.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	const acceptProposal = (id) => {
		axios
			.get(`${ACCEPT_PROPOSAL_API_ENDPOINT}/${id}`, {
				headers: { token: userToken }
			})
			.then((response) => {
				console.log(response.data);
				getMyPendingProposals();
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	const declineProposal = (id) => {
		axios
			.get(`${DECLINE_PROPOSAL_API_ENDPOINT}/${id}`, {
				headers: { token: userToken }
			})
			.then((response) => {
				console.log(response.data);
				getMyPendingProposals();
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	return (
		<Hoc>
			<div>
				<h5>Pending Proposals</h5>
                {pendingProposals.length === 0 && <p>No pending proposals</p>}
				{pendingProposals.map((proposal) => {
					return (
						<div style={{ backgroundColor: '#FFFFFF', borderRadius: '5px' }} className="p-3 my-3">
							<div className="row">
								<div className="col-md-4">
									<h6>{proposal.title}</h6>
									<div>
										<small>Request - {proposal.user.fullName}</small>
									</div>
									<div>
										<small>{proposal.location}</small>
									</div>
									<div className="mb-3" />
									<div>$ {proposal.perHourRate}/hr</div>
									<div>Weekly Hourly Limit {proposal.perWeekHourLimit} Hours</div>
								</div>
								<div className="col-md-8 d-flex flex-column justify-content-between">
									<div>
										<h5>Project Description</h5>
										<p>{proposal.description}</p>
									</div>
									<div className="text-right">
										<button
											className="btn btn-info mx-2"
											onClick={() => {
												acceptProposal(proposal._id);
											}}
										>
											Accept
										</button>
										<button
											className="btn btn-default mx-2"
											onClick={() => {
												declineProposal(proposal._id);
											}}
										>
											Decline
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</Hoc>
	);
};
