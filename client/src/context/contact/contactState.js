import React, {useReducer} from 'react';
import {v4 as uuid} from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	CLEAR_CURRENT,
	FILTER_CONTACTS,
	UPDATE_CONTACT,
	SET_CURRENT,
	CLEAR_FILTER,
} from './contactTypes';

const ContactState = (props) => {
	const InitialState = {
		contacts: [
			{
				id: 1,
				name: 'John Johnson',
				email: 'johnjohnson@gmail.com',
				phone: '111-111-111-111',
				type: 'personal',
			},
			{
				id: 2,
				name: 'Angela',
				email: 'angelams@gmail.com',
				phone: '222-222-222-222',
				type: 'personal',
			},
			{
				id: 3,
				name: 'Pierre Matias',
				email: 'pierrems@gmail.com',
				phone: '333-333-333-333',
				type: 'professional',
			},
		],
		current: null,
		filtered: null,
	};

	const [state, dispatch] = useReducer(contactReducer, InitialState);

	const addContact = (contact) => {
		contact.id = uuid();
		dispatch({
			type: ADD_CONTACT,
			payload: contact,
		});
	};
	const deleteContact = (contactid) => {
		dispatch({
			type: DELETE_CONTACT,
			payload: contactid,
		});
	};

	const setCurrent = (contact) => {
		dispatch({
			type: SET_CURRENT,
			payload: contact,
		});
	};

	const clearCurrent = () => {
		dispatch({
			type: CLEAR_CURRENT,
		});
	};

	const updateContact = (contact) => {
		dispatch({
			type: UPDATE_CONTACT,
			payload: contact,
		});
	};

	const filterContacts = (text) => {
		dispatch({
			type: FILTER_CONTACTS,
			payload: text,
		});
	};

	const clearFilter = () => {
		dispatch({
			type: CLEAR_FILTER,
		});
	};
	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				addContact,
				deleteContact,
				current: state.current,
				setCurrent,
				clearCurrent,
				updateContact,
				clearFilter,
				filterContacts,
				filtered: state.filtered,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
