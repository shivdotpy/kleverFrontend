import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Signup } from './components/signup/Signup';
import { Signin } from './components/signin/Signin';
import { ActiveProjects } from './components/active-projects/ActiveProjects';
import { FreelancerProfile } from './components/freelancer-profile/FreelancerProfile';
import { EmployerProfile } from './components/employer-profile/EmployerProfile';
import { SearchFreelancer } from './components/search-freelancer/SearchFreelancer';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Route path="/" exact component={Home} />
				<Route path="/signin" exact component={Signin} />
				<Route path="/signup" exact component={Signup} />
				<Route path="/active-projects" exact component={ActiveProjects} />
				<Route path="/freelancer-profile" exact component={FreelancerProfile} />
				<Route path="/employer-profile" exact component={EmployerProfile} />
				<Route path="/search-freelancer" exact component={SearchFreelancer} />
			</BrowserRouter>
		</div>
	);
}

export default App;
