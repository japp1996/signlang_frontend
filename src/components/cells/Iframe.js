import React from 'react';

export default function Iframe(props) {
	return (
		<div className="ratio ratio-16x9">
	        <iframe
		        src={props.urlVideo + '?start=' + props.start + '&end=' + props.end + '&rel=0&controls=0&loop=1&modestbranding=1&iv_load_policy=3&disablekb=1'}
		        title={props.title}
				frameBorder="0"
		    >
		    </iframe>
	     </div>
	);
}