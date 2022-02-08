import React from 'react';

export default function Image(props) {
	return (
		<img
	      src={props.urlImage}
	      className='img-thumbnail'
	      alt='...'
	      style={props.style}
	    />
	);
}