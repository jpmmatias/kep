import React, {Fragment} from 'react';
import './App.css';
import {Homepage} from './components/pages/home';
import About from './components/pages/about';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactState from './context/contact/contactState';
import Navbar from './components/layout/navbar';
import AuthState from './context/auth/authState';
import Register from './components/auth/register';
import Login from './components/auth/login';
import AlertState from './context/alert/alertState';
import Alerts from './components/layout/alerts';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/privaterout';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}
function App() {
	return (
		<AuthState>
			<ContactState>
				<AlertState>
					<Router>
						<Fragment>
							<Navbar />
							<div className='container'>
								<Alerts />
								<Switch>
									<PrivateRoute exact path='/' component={Homepage} />
									<Route exact path='/about' component={About} />
									<Route exact path='/register' component={Register} />
									<Route exact path='/login' component={Login} />
								</Switch>
							</div>
						</Fragment>
					</Router>
				</AlertState>
			</ContactState>
		</AuthState>
	);
}

export default App;
