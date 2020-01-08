import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Signup } from './components/signup/Signup';
import { Signin } from './components/signin/Signin';
import { ActiveProjects } from './components/active-projects/ActiveProjects';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Route path="/" exact component={Home} />
				<Route path="/signin" exact component={Signin} />
				<Route path="/signup" exact component={Signup} />
				<Route path="/active-projects" exact component={ActiveProjects} />
			</BrowserRouter>
		</div>
	);
}

export default App;
