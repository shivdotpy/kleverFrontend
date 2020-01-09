export const getUserType = () => {
	return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).userType : null;
};

export const getUserName = () => {
	return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).fullName : null;
};

export const getUserImage = () => {
	return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).image : null;
};

export const getUserToken = () => {
	return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
};
