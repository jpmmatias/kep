import React, {useState, useContext, useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
	const contactContext = useContext(ContactContext);

	const {addContact, current, updateContact, clearCurrent} = contactContext;

	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'personal',
	});

	useEffect(() => {
		if (current !== null && current !== undefined) {
			setContact(current);
		} else {
			setContact({
				name: '',
				email: '',
				phone: '',
				type: 'personal',
			});
		}
	}, [contactContext, current]);

	const handleChange = (e) => {
		setContact({
			...contact,
			[e.target.name]: e.target.value,
		});
	};

	const clearAll = () => {
		clearCurrent();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (current === null || current === undefined) {
			addContact(contact);
		} else {
			updateContact(contact);
		}
		clearAll();
	};

	const {name, email, phone, type} = contact;

	return (
		<form onSubmit={handleSubmit}>
			<h2 className='text-primary' style={{margin: '5% 0'}}>
				{current ? 'Editar contato' : 'Add contato'}
			</h2>
			<div className='nes-field'>
				<label htmlFor='name' style={{marginBottom: '2%'}}>
					Nome
				</label>
				<input
					type='text'
					placeholder='Mario Bros'
					className='nes-input'
					name='name'
					style={{marginBottom: '5%'}}
					value={name}
					onChange={handleChange}
				/>
			</div>
			<div className='nes-field'>
				<label htmlFor='email' style={{marginBottom: '2%'}}>
					Email
				</label>
				<input
					type='email'
					placeholder='mariobros@nintendo.com'
					name='email'
					className='nes-input'
					style={{marginBottom: '5%'}}
					value={email}
					class='nes-input'
					onChange={handleChange}
				/>
			</div>
			<div className='nes-field'>
				<label htmlFor='phone' style={{marginBottom: '%'}}>
					Numero
				</label>
				<input
					type='text'
					placeholder='99451999'
					className='nes-input'
					name='phone'
					value={phone}
					style={{marginBottom: '5%'}}
					onChange={handleChange}
				/>
			</div>
			<h5 style={{marginBottom: '2%'}}>Tipo de contato</h5>
			<label>
				<input
					type='radio'
					name='type'
					value='pessoal'
					className='nes-radio'
					style={{marginBottom: '5%'}}
					onChange={handleChange}
					checked={type === 'pessoal'}
				/>
				<span>Pessoal</span>
			</label>
			<label>
				<input
					type='radio'
					name='type'
					className='nes-radio'
					onChange={handleChange}
					value='profissional'
					style={{marginBottom: '5%'}}
					checked={type === 'profissional'}
				/>
				<span>Profissional</span>
			</label>

			<div>
				<input
					type='submit'
					style={{marginTop: '5%', padding: '1% 10%'}}
					value={current ? 'Editar Contato' : 'Add contato'}
					className='nes-btn is-primary'
				/>
			</div>
			{current && (
				<div>
					<button onClick={clearAll} className='btn btn-light btn-block'>
						Limpar
					</button>
				</div>
			)}
		</form>
	);
};

export default ContactForm;
