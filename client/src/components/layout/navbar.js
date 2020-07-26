import React, {useContext, Fragment} from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth/authContext';
import {Link} from 'react-router-dom';

const Navbar = ({title, icon}) => {
	const authContext = useContext(AuthContext);
	const {logout, user, isAuthenticated} = authContext;

	const onLogout = () => {
		logout();
	};

	const authLinks = (
		<Fragment>
			<li>Hello {user && user.name}</li>
			<li>
				<a onClick={onLogout} href='#!'>
					<i className='fas fa-sign-out-alt'></i>{' '}
					<span className='hide-sm'>Logout</span>
				</a>
			</li>
		</Fragment>
	);
	const guestLinks = (
		<Fragment>
			<li>
				<Link to='/register'>Sign In</Link>
			</li>
			<li>
				<Link to='/login'>Login</Link>
			</li>
		</Fragment>
	);
	return (
		<div className='navbar bg-primary'>
			<h1>
				<Link to='/'>
					<i className={icon} /> {title}
				</Link>
			</h1>
			<ul>{isAuthenticated ? authLinks : guestLinks}</ul>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
};

Navbar.defaultProps = {
	title: 'Kep',
	icon: 'fas fa-id-card-alt',
};

export default Navbar;
