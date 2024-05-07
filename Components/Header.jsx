import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar style={{backgroundColor:'azure'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://i.pinimg.com/originals/d6/b9/3b/d6b93b3bc38369074916b8160d3d97cf.gif'
              height='60'
              alt=''
              loading='lazy'
            />
            <h1 style={{color:'crimson'}}>Counter App</h1>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header