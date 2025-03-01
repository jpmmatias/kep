import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({contact}) => {
	const contactContext = useContext(ContactContext);
	const {_id, name, email, phone, type} = contact;
	const {deleteContact, setCurrent, clearCurrent} = contactContext;

	const onDelete = () => {
		deleteContact(_id);
		clearCurrent();
	};

	return (
		<div className='card nes-container is-rounded bg-light'>
			<h3 className='text-primary text-left'>
				{name}{' '}
				<span
					style={{float: 'right'}}
					className={
						'badge ' + (type === 'pessoal' ? 'badge-success' : 'badge-primary')
					}
				>
					{type.charAt(0).toUpperCase() + type.slice(1)}
				</span>
			</h3>
			<ul className='list'>
				{email && (
					<li>
						<i className='fas fa-envelope-open'></i> {email}
					</li>
				)}
				{phone && (
					<li>
						<i className='fas fa-phone'></i> {phone}
					</li>
				)}
			</ul>
			<p>
				<button
					onClick={() => setCurrent(contact)}
					style={{marginRight: '2%'}}
					className='nes-btn btn-sm'
				>
					Editar
				</button>
				<button onClick={onDelete} className='btn-sm nes-btn is-error'>
					Deletar
				</button>
			</p>
		</div>
	);
};

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
};
export default ContactItem;
