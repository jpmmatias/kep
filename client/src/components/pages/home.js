import React, {useContext, useEffect} from 'react';
import Contacts from '../contacts/contacts';
import ContactForm from '../contacts/contactForm';
import ContactFilter from '../contacts/contactFilter';
import AuthContext from '../../context/auth/authContext';

export const Homepage = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		//eslint-disable-next-line
	}, []);
	return (
		<div className='grid-2'>
			<div>
				<ContactForm />
			</div>
			<div>
				<ContactFilter />
				<Contacts />
			</div>
		</div>
	);
};
