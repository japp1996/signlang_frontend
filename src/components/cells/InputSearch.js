import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';

export default function InputSearch(props) {
  return (
    <React.StrictMode>
        <MDBInput
          label={props.label}
          id={props.id}
          type='text'
          onChange={props.inputChange}
        />
        <br/>
    </React.StrictMode>
  );
}