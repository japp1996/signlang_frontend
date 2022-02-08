import React from 'react';
import { MDBSpinner } from 'mdb-react-ui-kit';

export default function Loading() {
	return (
		<MDBSpinner grow color='primary'>
        	<span className='visually-hidden'>Cargando...</span>
      	</MDBSpinner>
	);
}