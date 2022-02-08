import React, { useState } from 'react';
import BrandName from '../tissues/BrandName';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showNavColor, setShowNavColor] = useState(false);

  return(
    <React.StrictMode>
      <MDBNavbar expand='lg' dark bgColor='primary'>
        <MDBContainer fluid>
          
          <MDBNavbarBrand href='/'>
            <BrandName style={{height: '40px'}}/>
          </MDBNavbarBrand>
          
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColor(!showNavColor)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Inicio</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <br/>
    </React.StrictMode>
  );
}