import React, {useState, useContext, useEffect} from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const {setAlert} = alertContext;
	const {login, error, clearErrors, isAuthenticated} = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/');
		}
		if (error === 'Invalid Credentials') {
			setAlert(error, 'danger');
			clearErrors();
		}
		//eslint-disable-next-line
	}, [error, isAuthenticated, props.history]);

	const [user, setUser] = useState({
		email: '',
		passowrd: '',
	});
	// eslint-disable-next-line
	const {name, email, password, password2} = user;

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		login({
			email,
			password,
		});
	};

	return (
		<div className='form-container'>
			<h1>
				<span className='text-primary'>Login</span>
			</h1>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						required
						value={email}
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Senha</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={handleChange}
						required
					/>
				</div>
				<input
					type='submit'
					style={{padding: '1% 20%', margin: '5% 0'}}
					value='Login'
					className='nes-btn is-primary'
				/>
			</form>
		</div>
	);
};

export default Login;
