import React from 'react';

export default function Copyright(props) {
  return (
    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <span> © 2020 Copyright </span>
      <a className='text-white' target='_blank' rel="noreferrer" href={'https://linkedin.com/in/japp1996'}>
        Jose Angel Padron
      </a>
    </div>
  );
}