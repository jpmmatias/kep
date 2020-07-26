import React, {useReducer} from 'react';
import AuthContext from './authContext';
import axios from 'axios';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	CLEAR_ERRORS,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGGOUT,
} from './authTypes';

const AuthState = (props) => {
	const InitialState = {
		toke: localStorage.getItem('toke'),
		isAuthenticated: null,
		loading: true,
		user: null,
		error: null,
	};
	const loadUser = async () => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}

		try {
			const res = await axios.get('/api/auth');

			dispatch({type: USER_LOADED, payload: res.data});
		} catch (err) {
			dispatch({
				type: AUTH_ERROR,
			});
		}
	};
	const register = async (formData) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post('api/users', formData, config);
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});
			loadUser();
		} catch (err) {
			dispatch({
				type: REGISTER_FAIL,
				payload: err.response.data.msg,
			});
		}
	};
	const login = async (formData) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post('api/auth', formData, config);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});
			loadUser();
		} catch (err) {
			dispatch({
				type: LOGIN_FAIL,
				payload: err.response.data.msg,
			});
		}
	};

	const clearErrors = () => {
		dispatch({
			type: CLEAR_ERRORS,
		});
	};
	const logout = () => {
		dispatch({
			type: LOGGOUT,
		});
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
				register,
				clearErrors,
				loadUser,
				login,
				logout,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
