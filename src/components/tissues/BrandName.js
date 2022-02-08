import React from 'react';
import Constants from '../constants';
import Image from '../cells/Image';
import logo from '../../assets/logo.png';

export default function BrandName() {
	return (
		<React.StrictMode>
			<Image 
				style={{ height: '100px', width: 'auto', background: 'transparent', border: 'none' }}
				urlImage={logo}
			/>
			{Constants.appName}
		</React.StrictMode>
	);
}