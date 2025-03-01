import React, {Fragment} from 'react';
import spinner from '../../assets/spinner.gif';

const Spinner = () => {
	return (
		<Fragment>
			<img
				src={spinner}
				alt='Loading'
				srcSet={spinner}
				style={{width: '200px', margin: 'auto', display: 'block'}}
			/>
		</Fragment>
	);
};

export default Spinner;
