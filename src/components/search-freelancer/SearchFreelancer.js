import React from 'react';
import { Hoc } from '../hoc/Hoc';
import RoundedImage from 'react-rounded-image';
import defaultUserImage from '../../assets/images/default-user.png';

export const SearchFreelancer = (props) => {
	return (
		<Hoc hideSidebar={true}>
			<div className="row">
				<div className="col-md-6">
					<div className="row" style={{backgroundColor: 'white'}}>
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

                        </div>
					</div>
				</div>
				<div className="col-md-6">Two</div>
			</div>
		</Hoc>
	);
};
