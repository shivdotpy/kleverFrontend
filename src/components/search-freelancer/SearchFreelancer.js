import React, { useEffect, useState } from 'react';
import { Hoc } from '../hoc/Hoc';
import RoundedImage from 'react-rounded-image';
import defaultUserImage from '../../assets/images/default-user.png';
import audioImage from '../../assets/images/cbimage.jpg';
import axios from 'axios';
import {
	GET_FREELANCERS_ENDPOINT,
	GET_FREELANCER_DETAIL_ENDPOINT,
	SEND_PROPOSAL_TO_FREELANCER_API_ENDPOINT
} from '../../utils/constants';
import Modal from 'react-modal';
import { getUserToken } from '../../utils/common-methods';

const modalStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		height: '520px',
		width: '700px',
		transform: 'translate(-50%, -50%)'
	}
};

export const SearchFreelancer = (props) => {
	const [ freelancers, setFreelancers ] = useState([]);
	const [ freelancer, setFreelancer ] = useState({});
	const [ openHireModal, setOpenHireModal ] = useState(false);

	const [ title, setTitle ] = useState('');
	const [ basedOn, setBasedOn ] = useState('hourly');
	const [ perHourRate, setPerHourRate ] = useState('');
	const [ length, setLength ] = useState('');
	const [ perWeekHourLimit, setPerWeekHourLimit ] = useState('');
	const [ location, setLocation ] = useState('india');
	const [ description, setDescription ] = useState('');

	const userToken = getUserToken();

	useEffect(() => {
		getFreelancers();
	}, []);

	const getFreelancers = () => {
		axios
			.get(GET_FREELANCERS_ENDPOINT)
			.then((response) => {
				setFreelancers(response.data.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	const getFreelancerDetail = (id) => {
		axios
			.get(`${GET_FREELANCER_DETAIL_ENDPOINT}/${id}`)
			.then((response) => {
				setFreelancer(response.data.data);
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	const onSubmitHire = () => {
		const requestBody = {
			freelancerId: freelancer._id,
			title,
			basedOn,
			perHourRate,
			length,
			perWeekHourLimit,
			location,
			description
		};

		axios
			.post(SEND_PROPOSAL_TO_FREELANCER_API_ENDPOINT, requestBody, {
				headers: { token: userToken }
			})
			.then((response) => {
				console.log(response.data);
				setTitle('');
				setBasedOn('hourly');
				setPerHourRate('');
				setLength('');
				setPerWeekHourLimit('');
				setLocation('india');
				setDescription('');
				setOpenHireModal(false);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	return (
		<Hoc hideSidebar={true}>
			<div className="row">
				<div className="col-md-6" style={{ backgroundColor: 'white', height: `92vh` }}>
					{freelancers.map((freelancer) => {
						return (
							<div
								className="row py-2"
								onClick={() => {
									getFreelancerDetail(freelancer._id);
								}}
							>
								<div className="col-md-2">
									<RoundedImage
										image={freelancer.image ? freelancer.image : defaultUserImage}
										roundedColor="#007bff"
										roundedSize="5"
										imageWidth="50"
										imageHeight="50"
									/>
								</div>
								<div className="col-md-3">
									<p className="mb-0">{freelancer.fullName}</p>
									<small>{freelancer.title}</small>
									<div>
										<i className="far fa-star" />
										<i className="far fa-star" />
										<i className="far fa-star" />
										<i className="far fa-star" />
										<i className="far fa-star" />
									</div>
								</div>
								<div className="col-md-4">
									<div className="row">
										<div className="col-md-4">
											<div>
												<small>
													<b>Location</b>
												</small>
											</div>
											<div className>
												<small className="text-center">
													{freelancer.location ? freelancer.location : 'N/A'}
												</small>
											</div>
										</div>
										<div className="col-md-4">
											<div>
												<small>
													<b>Rate</b>
												</small>
											</div>
											<div className>
												<small className="text-center">$ {freelancer.rate}</small>
											</div>
										</div>
										<div className="col-md-4">
											<div>
												<small>
													<b>Availability</b>
												</small>
											</div>
											<div className>
												<small className="text-center">{freelancer.availability} Hr</small>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-3 text-center">
									<img src={audioImage} style={{ maxWidth: '50px' }} />
								</div>
							</div>
						);
					})}
				</div>
				<div className="col-md-6" style={{ height: '92vh' }}>
					{freelancer.fullName ? (
						<div>
							<div>
								<h5>About Me</h5>
								<p>{freelancer.description}</p>
							</div>
							<div>
								<h5>Skills</h5>
								<p>Python</p>
							</div>
							<div>
								<h5>Past Projects</h5>
								<p>No projects available</p>
							</div>
							<div>
								<button
									className="btn btn-info m-2"
									onClick={() => {
										setOpenHireModal(true);
									}}
								>
									Hire Now
								</button>
								<button className="btn btn-info m-2">Contact</button>
							</div>
						</div>
					) : (
						<div className="text-center">No freelancer selected</div>
					)}
				</div>
			</div>

			{/* Modal -- Hire now */}
			<Modal isOpen={openHireModal} style={modalStyles}>
				<div className="row mb-4">
					<div className="col-md-2">
						<RoundedImage
							image={freelancer.image ? freelancer.image : defaultUserImage}
							roundedColor="#007bff"
							roundedSize="5"
							imageWidth="80"
							imageHeight="80"
						/>
					</div>
					<div className="col-md-10 pl-0 pt-3">
						<p className="mb-0">
							<b>Hire, {freelancer.fullName}</b>
						</p>
						<p>
							<small>at, ${freelancer.rate}/hr</small>
						</p>
					</div>
				</div>
				<div className="row mb-4">
					<div className="col-md-9">
						<input
							className="form-control"
							placeholder="Project Title"
							value={title}
							onChange={(event) => {
								setTitle(event.target.value);
							}}
						/>
					</div>
					<div className="col-md-3">
						<select
							className="form-control"
							value={basedOn}
							onChange={(event) => {
								setBasedOn(event.target.value);
							}}
						>
							<option value="hourly">Hourly</option>
							<option value="fixed">Fixed</option>
						</select>
					</div>
				</div>
				<div className="row mb-4">
					<div className="col-md-3">
						<input
							className="form-control"
							placeholder="Per Hour Rate"
							value={perHourRate}
							onChange={(event) => {
								setPerHourRate(event.target.value);
							}}
						/>
					</div>
					<div className="col-md-3">
						<input
							className="form-control"
							placeholder="Project Length"
							value={length}
							onChange={(event) => {
								setLength(event.target.value);
							}}
						/>
					</div>
					<div className="col-md-3">
						<input
							className="form-control"
							placeholder="Hour Per Week"
							value={perWeekHourLimit}
							onChange={(event) => {
								setPerWeekHourLimit(event.target.value);
							}}
						/>
					</div>
					<div className="col-md-3">
						<select
							className="form-control"
							value={location}
							onChange={(event) => {
								setLocation(event.target.value);
							}}
						>
							<option value="india">India</option>
							<option value="united states">United States</option>
						</select>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-md-12">
						<textarea
							className="form-control"
							style={{ resize: 'none', height: '180px' }}
							placeholder="Project Description"
							value={description}
							onChange={(event) => {
								setDescription(event.target.value);
							}}
						/>
					</div>
				</div>
				<div className="text-right">
					<button className="btn btn-info m-1" onClick={onSubmitHire}>
						Hire
					</button>
					<button
						className="btn btn-danger m-1"
						onClick={() => {
							setOpenHireModal(false);
						}}
					>
						Cancel
					</button>
				</div>
			</Modal>
		</Hoc>
	);
};
