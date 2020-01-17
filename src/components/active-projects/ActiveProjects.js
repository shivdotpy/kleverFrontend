import React, { useEffect, useState } from 'react';
import { Hoc } from '../hoc/Hoc';
import axios from 'axios';
import { GET_MY_ACTIVE_PROJECTS_API_ENDPOINT } from '../../utils/constants';
import { getUserToken } from '../../utils/common-methods';
import { Link } from 'react-router-dom';
import RoundedImage from 'react-rounded-image';
import defaultUserImage from '../../assets/images/default-user.png';

export const ActiveProjects = (props) => {
	const [ activeProjects, setActiveProjects ] = useState([]);

	const userToken = getUserToken();

	useEffect(() => {
		getActiveProjects();
	}, []);

	const getActiveProjects = () => {
		axios
			.get(GET_MY_ACTIVE_PROJECTS_API_ENDPOINT, {
				headers: { token: userToken }
			})
			.then((response) => {
				setActiveProjects(response.data.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	return (
		<Hoc>
			<div>
				<h5>Active Project</h5>
				{activeProjects.map((project) => {
					return (
						<div style={{ backgroundColor: '#FFFFFF', borderRadius: '5px' }} className="p-3 my-3">
							<div className="row">
								<div className="col-md-2" style={{ margin: 'auto' }}>
									<RoundedImage
										image={project.freelancer.image ? project.freelancer.image : defaultUserImage}
										roundedColor="#007bff"
										roundedSize="5"
										imageWidth="100"
										imageHeight="100"
									/>
								</div>
								<div className="col-md-6 d-flex flex-column justify-content-between">
									<div>
										<h6>{project.title}</h6>
										<div>
											<small>Freelancer: {project.freelancer.fullName}</small>
										</div>
										<div>
											<small style={{ textTransform: 'capitalize' }}>{project.location}</small>
										</div>
									</div>

									<div>
										<Link to="/message">Contact Freelancer</Link>
									</div>
								</div>
								<div className="col-md-4 d-flex flex-column justify-content-between ">
									
                                    <div>
                                    <div>
										<small>$ {project.perHourRate}/hr</small>
									</div>
									<div>
										<small>Weekly Hourly Limit - {project.perWeekHourLimit}</small>
									</div>
									<div>
										<p>2.00 Hours worked this week</p>
									</div>
                                        </div>
									<div>
										<div>
											<small>
												<Link to="/screenshots/:id">View Screenshots </Link>
											</small>
											<small>End Project</small>
										</div>
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
