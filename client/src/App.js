import React, {Fragment} from 'react';
import './App.css';
import {Homepage} from './components/pages/home';
import About from './components/pages/about';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactState from './context/contact/contactState';
import Navbar from './components/layout/navbar';
import AuthState from './context/auth/authState';

function App() {
	return (
		<AuthState>
			<ContactState>
				<Router>
					<Fragment>
						<Navbar />
						<div className='container'>
							<Switch>
								<Route exact path='/' component={Homepage} />
								<Route exact path='/about' component={About} />
							</Switch>
						</div>
					</Fragment>
				</Router>
			</ContactState>
		</AuthState>
	);
}

export default App;
