const BASE_API_URL = 'http://localhost:5000';

export const SIGNUP_API_ENDPOINT = `${BASE_API_URL}/api/user/signup`;
export const SIGNIN_API_ENDPOINT = `${BASE_API_URL}/api/user/signin`;
export const UPDATE_USER_IMAGE_ENDPOINT = `${BASE_API_URL}/api/user/updateUserImage`;
export const GET_USER_IMAGE_ENDPOINT = `${BASE_API_URL}/api/user/getUserImage`;
export const UPDATE_FREELANCER_PROFILE_ENDPOINT = `${BASE_API_URL}/api/user/updateFreelancerProfile`;
export const GET_FREELANCER_PROFILE_ENDPOINT = `${BASE_API_URL}/api/user/getFreelancerProfile`;
export const GET_FREELANCERS_ENDPOINT = `${BASE_API_URL}/api/user/getFreelancers`;
export const GET_FREELANCER_DETAIL_ENDPOINT = `${BASE_API_URL}/api/user/getFreelancerDetail`;
export const SEND_PROPOSAL_TO_FREELANCER_API_ENDPOINT = `${BASE_API_URL}/api/project/addProject`;
export const GET_PENDING_PROPOSALS_API_ENDPOINT = `${BASE_API_URL}/api/project/myPendingProposals`;
export const ACCEPT_PROPOSAL_API_ENDPOINT = `${BASE_API_URL}/api/project/acceptProposal`;
export const DECLINE_PROPOSAL_API_ENDPOINT = `${BASE_API_URL}/api/project/declineProposal`;
export const GET_MY_ACTIVE_PROJECTS_API_ENDPOINT = `${BASE_API_URL}/api/project/getMyActiveProjects`;
