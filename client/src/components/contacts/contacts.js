import React, {useContext, Fragment, useEffect} from 'react';
import contactContext from '../../context/contact/contactContext';
import ContactItem from './contactItem';
import Spinner from '../layout/spinner';
const Contacts = () => {
	const ContactContext = useContext(contactContext);

	const {contacts, filtered, getContacts, loading} = ContactContext;

	useEffect(() => {
		getContacts();
		//eslint-disable-next-line
	}, []);

	if (contacts !== null && contacts.length === 0) {
		return <h4>Please add contact</h4>;
	}
	return (
		<Fragment>
			{contacts !== null && !loading ? (
				filtered !== null ? (
					filtered.map((contact) => (
						<ContactItem key={contact._id} contact={contact} />
					))
				) : (
					contacts.map((contact) => (
						<ContactItem key={contact._id} contact={contact} />
					))
				)
			) : (
				<Spinner />
			)}
		</Fragment>
	);
};

export default Contacts;
