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
		height: '200px',
		width: '200px',
		transform: 'translate(-50%, -50%)'
	}
};

export const SearchFreelancer = (props) => {
	const [ freelancers, setFreelancers ] = useState([]);
	const [ freelancer, setFreelancer ] = useState({});

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
								<button className="btn btn-info m-2">Hire Now</button>
								<button className="btn btn-info m-2">Contact</button>
							</div>
						</div>
					) : (
						<div className="text-center">No freelancer selected</div>
					)}
				</div>
			</div>

			{/* Modal -- Hire now */}
			<Modal isOpen={true} style={modalStyles}>Opened</Modal>
		</Hoc>
	);
};
