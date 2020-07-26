import React from 'react';
import Contacts from '../contacts/contacts';
import ContactForm from '../contacts/contactForm';
import ContactFilter from '../contacts/contactFilter';

export const Homepage = () => {
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
