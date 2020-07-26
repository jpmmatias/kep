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
			<h2 className='text-primary'>
				{current ? 'Edit Contact' : 'Add contact'}
			</h2>
			<input
				type='text'
				placeholder='Name'
				name='name'
				value={name}
				onChange={handleChange}
			/>
			<input
				type='email'
				placeholder='Email'
				name='email'
				value={email}
				onChange={handleChange}
			/>
			<input
				type='text'
				placeholder='Phone'
				name='phone'
				value={phone}
				onChange={handleChange}
			/>
			<h5>Contact type</h5>
			<input
				type='radio'
				name='type'
				value='personal'
				onChange={handleChange}
				checked={type === 'personal'}
			/>
			Personal
			<input
				type='radio'
				name='type'
				onChange={handleChange}
				value='professional'
				checked={type === 'professional'}
			/>
			Professional
			<div>
				<input
					type='submit'
					value={current ? 'Edit Contact' : 'Add contact'}
					className='btn btn-primary btn-block'
				/>
			</div>
			{current && (
				<div>
					<button onClick={clearAll} className='btn btn-light btn-block'>
						Clear
					</button>
				</div>
			)}
		</form>
	);
};

export default ContactForm;
