import React, {useState, useContext, useEffect} from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const {setAlert} = alertContext;
	const {register, error, clearErrors, isAuthenticated} = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/');
		}
		if (error === 'User already exists') {
			setAlert(error, 'danger');
			clearErrors();
		}
		//eslint-disable-next-line
	}, [error, isAuthenticated, props.history]);

	const [user, setUser] = useState({
		name: '',
		email: '',
		passowrd: '',
		passowrd2: '',
	});

	const {name, email, password, password2} = user;

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password !== password2) {
			setAlert('Passwords not match!!!', 'danger');
		} else {
			register({
				name,
				email,
				password,
			});
		}
	};

	return (
		<div className='form-container'>
			<h1>
				<span className='text-primary'>Registrar</span>
			</h1>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='name'>Nome</label>
					<input
						type='text'
						name='name'
						required
						value={name}
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						value={email}
						required
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Senha</label>
					<input
						type='password'
						name='password'
						value={password}
						required
						minLength='6'
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password2'>Confirmar senha</label>
					<input
						type='password'
						name='password2'
						minLength='6'
						value={password2}
						required
						onChange={handleChange}
					/>
				</div>
				<input
					type='submit'
					style={{padding: '1% 20%', margin: '5% 0'}}
					value='Registrar'
					className='nes-btn is-primary'
				/>
			</form>
		</div>
	);
};

export default Register;
