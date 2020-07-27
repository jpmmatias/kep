import React, {useContext, Fragment} from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';
import {Link} from 'react-router-dom';
const Navbar = ({title, icon}) => {
	const authContext = useContext(AuthContext);
	const {logout, user, isAuthenticated} = authContext;

	const contactContext = useContext(ContactContext);
	const {clearContacts} = contactContext;

	const onLogout = () => {
		clearContacts();
		logout();
	};

	const authLinks = (
		<Fragment>
			<li>Hello {user && user.name}</li>
			<li>
				<Link onClick={onLogout} to='/'>
					<i className='fas fa-sign-out-alt'></i>{' '}
					<span className='hide-sm'>Logout</span>
				</Link>
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
