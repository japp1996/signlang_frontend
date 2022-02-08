import React from 'react';
import Text from '../cells/Text';
import Iframe from '../cells/Iframe';
import { 
  MDBCard, 
  MDBCardBody, 
  MDBCardTitle, 
} from 'mdb-react-ui-kit';

export default function Card(props) {
  return (
    <React.StrictMode>
      <MDBCard>
        <Iframe
          urlVideo={props.urlVideo}
          start={props.start}
          end={props.end}
        />
        <MDBCardBody>
          <MDBCardTitle>{props.title}</MDBCardTitle>
          <Text text={props.category}/>
        </MDBCardBody>
      </MDBCard>
      <br/>
    </React.StrictMode>
  );
}