import React from 'react';
import {MDBFooter} from 'mdb-react-ui-kit';
import IconLink from '../cells/IconLink';
import Copyright from '../cells/Copyright';

export default function Footer() {
  return (
    <MDBFooter className='bg-light text-center text-white'>
      <IconLink style={{backgroundColor:'#3b5998'}} url='https://www.facebook.com/profile.php?id=100001774200437' icon='facebook-f'/>
      <IconLink style={{backgroundColor:'#dd4b39'}} url='mailto:joseangeldev@gmail.com' icon='google'/>
      <IconLink style={{backgroundColor:'#ac2bac'}} url='https://instagram.com/aventuramedica' icon='instagram'/>
      <IconLink style={{backgroundColor:'#0082ca'}} url='https://linkedin.com/in/japp1996' icon='linkedin-in'/>
      <IconLink style={{backgroundColor:'#333333'}} url='https://github.com/japp1996' icon='github'/>

      <Copyright/>
    </MDBFooter>
  );
}