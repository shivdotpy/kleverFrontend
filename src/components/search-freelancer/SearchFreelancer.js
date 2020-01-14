import React, { useEffect, useState } from 'react';
import { Hoc } from '../hoc/Hoc';
import RoundedImage from 'react-rounded-image';
import defaultUserImage from '../../assets/images/default-user.png';
import audioImage from '../../assets/images/cbimage.jpg';
import axios from 'axios';
import { GET_FREELANCERS_ENDPOINT, GET_FREELANCER_DETAIL_ENDPOINT } from '../../utils/constants';
import Modal from 'react-modal';

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
						<input className="form-control" placeholder="Project Title" />
					</div>
					<div className="col-md-3">
						<select className="form-control">
							<option>Hourly</option>
							<option>Fixed</option>
						</select>
					</div>
				</div>
				<div className="row mb-4">
					<div className="col-md-3">
						<input className="form-control" placeholder="Per Hour Rate" />
					</div>
					<div className="col-md-3">
						<input className="form-control" placeholder="Project Length" />
					</div>
					<div className="col-md-3">
						<input className="form-control" placeholder="Hour Per Week" />
					</div>
					<div className="col-md-3">
						<select className="form-control">
							<option>India</option>
							<option>United States</option>
						</select>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-md-12">
						<textarea className="form-control" style={{ resize: 'none', height: '180px' }}
						 />
					</div>
				</div>
				<div className="text-right">
						<button className="btn btn-info m-1">Hire</button>
						<button className="btn btn-danger m-1" onClick={() => {setOpenHireModal(false)}}>Cancel</button>
				</div>
			</Modal>
		</Hoc>
	);
};
