import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function ButtonSearch(props) {
  return (
    <React.StrictMode>
      <MDBBtn onClick={() => props.search(props.word)}>{props.text}</MDBBtn>
    </React.StrictMode>
  );
}