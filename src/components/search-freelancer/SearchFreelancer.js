import React from 'react';
import { Hoc } from '../hoc/Hoc';
import RoundedImage from 'react-rounded-image';
import defaultUserImage from '../../assets/images/default-user.png';
import audioImage from '../../assets/images/cbimage.jpg'

export const SearchFreelancer = (props) => {
	return (
		<Hoc hideSidebar={true}>
			<div className="row">
				<div className="col-md-6">
					<div className="row" style={{ backgroundColor: 'white' }}>
						<div className="col-md-2">
							<RoundedImage
								image={defaultUserImage}
								roundedColor="#007bff"
								roundedSize="5"
								imageWidth="50"
								imageHeight="50"
							/>
						</div>
						<div className="col-md-3">
							<p className="mb-0">Shiv Sharma</p>
							<small>Developer</small>
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
										<small className="text-center">Atlanta</small>
									</div>
								</div>
								<div className="col-md-4">
									<div>
										<small>
											<b>Rate</b>
										</small>
									</div>
									<div className>
										<small className="text-center">$ 10</small>
									</div>
								</div>
								<div className="col-md-4">
									<div>
										<small>
											<b>Availability</b>
										</small>
									</div>
									<div className>
										<small className="text-center">40 Hr</small>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-3 text-center">
						     <img src={audioImage} style={{maxWidth: '50px'}}/>
						</div>
					</div>
				</div>
				<div className="col-md-6">Two</div>
			</div>
		</Hoc>
	);
};
