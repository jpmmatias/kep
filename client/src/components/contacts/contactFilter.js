import React, {useContext, useRef, useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
	const contactContext = useContext(ContactContext);
	const {filterContacts, clearFilter, filtered} = contactContext;
	const text = useRef('');
	useEffect(() => {
		return () => {
			if (filtered === null) {
				text.current.value = '';
			}
		};
	});
	const handleChange = (e) => {
		if (text.current.value !== '') {
			filterContacts(e.target.value);
		} else {
			clearFilter();
		}
	};
	return (
		<form>
			<input
				type='text'
				onChange={handleChange}
				placeholder='Filter Contacts'
				name='filtered'
				ref={text}
			></input>
		</form>
	);
};

export default ContactFilter;
