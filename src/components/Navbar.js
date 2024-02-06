import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>

        <span Link >
          All Product
          </span>

        <MDBBtn color='dark'>Cart{0}</MDBBtn>
       
      </MDBContainer>
    </MDBNavbar>
  );
}