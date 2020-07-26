import React, {useReducer} from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {SET_ALERT, REMOVE_ALERT} from './authTypes';

const AuthState = (props) => {
	const InitialState = {
		toke: localStorage.getItem('toke'),
		isAuthenticated: null,
		loading: true,
		user: null,
		error: null,
	};

	const [state, dispatch] = useReducer(authReducer, InitialState);

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				error: state.error,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
