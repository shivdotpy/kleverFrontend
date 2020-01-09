import React, { useState } from 'react';
import { Hoc } from '../hoc/Hoc';
import { getUserName, getUserToken } from '../../utils/common-methods';
import RoundedImage from 'react-rounded-image';
import './FreelancerProfile.css';
import defaultUserImage from '../../assets/images/default-user.png';
import FileBase64 from 'react-file-base64';
import axios from 'axios';
import { UPDATE_USER_IMAGE_ENDPOINT } from '../../utils/constants';

function getBase64(file, cb) {
	let reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function() {
		cb(reader.result);
	};
	reader.onerror = function(error) {
		console.log('Error: ', error);
	};
}

export const FreelancerProfile = () => {
	const [ userImage, setUserImage ] = useState(defaultUserImage);

	const userName = getUserName();
	const userToken = getUserToken();

	const openProfileImage = () => {
		const element = document.querySelector('#open-profile-image');
		element.getElementsByTagName('input')[0].click();
	};

	const handleProfileImageChange = (image) => {
		console.log('event', image);

		const body = {
			image: image.base64
		};

		axios
			.put(UPDATE_USER_IMAGE_ENDPOINT, body, {
				headers: { token: userToken }
			})
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error.response);
			});

		// return;
		// let idCardBase64 = '';
		// getBase64(event.target.file, (result) => {
		// 	idCardBase64 = result;
		// });
		// console.log(event);
	};

	return (
		<Hoc>
			<div>
				<div>
					<h5>Howdy, {userName}</h5>
				</div>
				<div style={{ backgroundColor: '#FFFFFF', overflowY: 'auto', height: '78vh' }} className="p-3">
					<p>Personal Info</p>
					<div className="row mb-4">
						<div className="col-md-2">
							<span onClick={openProfileImage}>
								<RoundedImage
									image={userImage}
									roundedColor="#007bff"
									roundedSize="8"
									imageWidth="100"
									imageHeight="100"
								/>
							</span>
							<div className="d-none" id="open-profile-image">
								<FileBase64 onDone={handleProfileImageChange} />
							</div>
						</div>
						<div className="col-md-10">
							<div className="form-group">
								<input className="form-control" placeholder="Full Name" />
							</div>
							<div className="form-group">
								<input className="form-control" placeholder="Skills" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="form-group">
								<input className="form-control" placeholder="Title" />
							</div>
						</div>
						<div className="col-md-8">
							<div className="form-group">
								<input className="form-control" placeholder="Short Description" />
							</div>
						</div>
					</div>
					<div className="row pb-3">
						<div className="col-md-4">
							<div className="form-group">
								<input className="form-control" placeholder="Availability" />
							</div>
							<div className="form-group">
								<input className="form-control" placeholder="Rate Setting" />
							</div>
						</div>
						<div className="col-md-8">
							<div className="form-group">
								<textarea
									className="form-control"
									placeholder="Description"
									style={{ resize: 'none', height: '90px' }}
								/>
							</div>
						</div>
					</div>
					<div className="row pb-3">
						<div className="col-md-12">
							<button className="btn btn-info freelancer-profile-btn">Upload Audio</button>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<button className="btn btn-info freelancer-profile-btn">Upload Images</button>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 text-right">
							<button className="btn btn-primary freelancer-profile-save-btn">Save</button>
						</div>
					</div>
				</div>
			</div>
		</Hoc>
	);
};
