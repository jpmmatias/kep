import React, {useReducer} from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import {v4 as uuidv4} from 'uuid';
import {SET_ALERT, REMOVE_ALERT} from './alertTypes';

const AlertState = (props) => {
	const InitialState = [];

	const [state, dispatch] = useReducer(alertReducer, InitialState);

	const setAlert = (msg, type) => {
		const id = uuidv4;
		dispatch({
			type: SET_ALERT,
			payload: {msg, type, id},
		});

		setTimeout(
			() =>
				dispatch({
					type: REMOVE_ALERT,
					payload: id,
				}),
			2000
		);
	};

	return (
		<AlertContext.Provider
			value={{
				alerts: state,
				setAlert,
			}}
		>
			{props.children}
		</AlertContext.Provider>
	);
};

export default AlertState;
