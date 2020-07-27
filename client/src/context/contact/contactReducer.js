import {
	ADD_CONTACT,
	DELETE_CONTACT,
	CLEAR_CURRENT,
	FILTER_CONTACTS,
	UPDATE_CONTACT,
	SET_CURRENT,
	CLEAR_FILTER,
	CONTACT_ERROR,
	GET_CONTACTS,
	CLEAR_CONTACT,
} from './contactTypes';

export default (state, action) => {
	switch (action.type) {
		case ADD_CONTACT:
			return {
				...state,
				contacts: [action.payload, ...state.contacts],
				loading: false,
			};
		case UPDATE_CONTACT:
			return {
				...state,
				loading: false,
				contacts: state.contacts.map((contact) =>
					contact._id === action.payload._id ? action.payload : contact
				),
			};
		case CLEAR_CONTACT:
			return {
				...state,
				contacts: null,
				filtered: null,
				error: null,
				current: null,
			};
		case DELETE_CONTACT:
			return {
				...state,
				contacts: state.contacts.filter(
					(contact) => contact._id !== action.payload
				),
				loading: false,
				filtered: state.contacts.filter(
					(contact) => contact._id !== action.payload
				),
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};
		case CLEAR_FILTER:
			return {
				...state,
				filtered: null,
			};
		case GET_CONTACTS:
			return {
				...state,
				contacts: action.payload,
				loading: false,
			};
		case CONTACT_ERROR:
			return {
				...state,
				error: action.payload,
			};

		case FILTER_CONTACTS:
			return {
				...state,
				filtered: state.contacts.filter((contact) => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return contact.name.match(regex) || contact.email.match(regex);
				}),
			};

		default:
			return state;
	}
};
