import React from 'react';
import {MDBCardText} from 'mdb-react-ui-kit';

export default function Text(props) {
    return (
        <MDBCardText>
          {props.text}
        </MDBCardText>
    );
}