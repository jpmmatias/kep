import React, {useReducer} from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	GET_CONTACTS,
	CLEAR_CONTACT,
	ADD_CONTACT,
	DELETE_CONTACT,
	CLEAR_CURRENT,
	FILTER_CONTACTS,
	UPDATE_CONTACT,
	SET_CURRENT,
	CLEAR_FILTER,
	CONTACT_ERROR,
} from './contactTypes';

const ContactState = (props) => {
	const InitialState = {
		contacts: null,
		current: null,
		filtered: null,
		error: null,
	};

	const [state, dispatch] = useReducer(contactReducer, InitialState);

	const getContacts = async () => {
		try {
			const res = await axios.get('/api/contacts');
			dispatch({
				type: GET_CONTACTS,
				payload: res.data,
			});
		} catch (err) {
			dispatch({type: CONTACT_ERROR, payload: err.response.msg});
		}
	};

	const addContact = async (contact) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.post('/api/contacts', contact, config);
			dispatch({
				type: ADD_CONTACT,
				payload: res.data,
			});
		} catch (err) {
			dispatch({type: CONTACT_ERROR, payload: err.response.msg});
		}
	};

	const deleteContact = async (contactid) => {
		try {
			const res = await axios.delete(`/api/contacts/${contactid}`);
			dispatch({
				type: DELETE_CONTACT,
				payload: contactid,
			});
		} catch (err) {
			dispatch({type: CONTACT_ERROR, payload: err.response.msg});
		}
	};

	const setCurrent = (contact) => {
		dispatch({
			type: SET_CURRENT,
			payload: contact,
		});
	};

	const clearContacts = () => {
		dispatch({
			type: CLEAR_CONTACT,
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
				error: state.error,
				getContacts,
				clearContacts,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
