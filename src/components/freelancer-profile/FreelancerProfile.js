import React, { useState, useEffect } from 'react';
import { Hoc } from '../hoc/Hoc';
import { getUserName, getUserToken } from '../../utils/common-methods';
import RoundedImage from 'react-rounded-image';
import './FreelancerProfile.css';
import defaultUserImage from '../../assets/images/default-user.png';
import FileBase64 from 'react-file-base64';
import axios from 'axios';
import {
	UPDATE_USER_IMAGE_ENDPOINT,
	GET_USER_IMAGE_ENDPOINT,
	UPDATE_FREELANCER_PROFILE_ENDPOINT
} from '../../utils/constants';

export const FreelancerProfile = () => {
	const [ userImage, setUserImage ] = useState(defaultUserImage);

	const [ fullName, setFullName ] = useState('');
	const [ skills, setSkills ] = useState([]);
	const [ title, setTitle ] = useState('');
	const [ shortDescription, setShortDescription ] = useState('');
	const [ availability, setAvailability ] = useState('');
	const [ rate, setRate ] = useState('');
	const [ description, setDescription ] = useState('');

	const userName = getUserName();
	const userToken = getUserToken();

	useEffect(() => {
		getUserImage();
		getUserProfile();
	}, []);

	const getUserImage = () => {
		axios
			.get(GET_USER_IMAGE_ENDPOINT, {
				headers: { token: userToken }
			})
			.then((response) => {
				setUserImage(response.data.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	const getUserProfile = () => {
		
	}

	const openProfileImage = () => {
		const element = document.querySelector('#open-profile-image');
		element.getElementsByTagName('input')[0].click();
	};

	const handleProfileImageChange = (image) => {
		const body = {
			image: image.base64
		};

		axios
			.put(UPDATE_USER_IMAGE_ENDPOINT, body, {
				headers: { token: userToken }
			})
			.then((response) => {
				getUserImage();
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	const submitFreelancerDetailForm = () => {
		const body = {
			fullName,
			skills,
			title,
			shortDescription,
			description,
			availability,
			rate
		};
		axios
			.put(UPDATE_FREELANCER_PROFILE_ENDPOINT, body, {
				headers: { token: userToken }
			})
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
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
								<input
									className="form-control"
									placeholder="Full Name"
									value={fullName}
									onChange={(event) => {
										setFullName(event.target.value);
									}}
								/>
							</div>
							<div className="form-group">
								<input className="form-control" placeholder="Skills" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="form-group">
								<input
									className="form-control"
									placeholder="Title"
									value={title}
									onChange={(event) => {
										setTitle(event.target.value);
									}}
								/>
							</div>
						</div>
						<div className="col-md-8">
							<div className="form-group">
								<input
									className="form-control"
									placeholder="Short Description"
									value={shortDescription}
									onChange={(event) => {
										setShortDescription(event.target.value);
									}}
								/>
							</div>
						</div>
					</div>
					<div className="row pb-3">
						<div className="col-md-4">
							<div className="form-group">
								<input
									className="form-control"
									placeholder="Availability"
									value={availability}
									onChange={(event) => {
										setAvailability(event.target.value);
									}}
								/>
							</div>
							<div className="form-group">
								<input
									className="form-control"
									placeholder="Rate Setting"
									value={rate}
									onChange={(event) => {
										setRate(event.target.value);
									}}
								/>
							</div>
						</div>
						<div className="col-md-8">
							<div className="form-group">
								<textarea
									className="form-control"
									placeholder="Description"
									style={{ resize: 'none', height: '90px' }}
									value={description}
									onChange={(event) => {
										setDescription(event.target.value);
									}}
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
							<button
								className="btn btn-primary freelancer-profile-save-btn"
								onClick={submitFreelancerDetailForm}
							>
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		</Hoc>
	);
};
