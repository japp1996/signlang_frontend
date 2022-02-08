import React from 'react';
import {
  MDBIcon
} from 'mdb-react-ui-kit';

export default function IconLink(props) {
  return (
    <a
      className='btn btn-primary btn-floating m-1'
      href={props.url}
      target='_blank'
      rel="noreferrer"
      role='button'
    >
      <MDBIcon fab icon={props.icon} />
    </a>
  )
}