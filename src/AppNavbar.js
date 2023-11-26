import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { HouseDoor, Gift, Box, QuestionCircle, Chat, DoorOpen } from 'react-bootstrap-icons';
import MyProfile from './profile';  
import './App.css';  


function AppNavbar() {
  return (
    <div>

      <MyProfile />

      <Navbar className="navbar" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="flex-column">
            <Nav.Link href="#" className="nav-btn">
              <HouseDoor size={30} />
              <span className="nav-label">Dashboard</span>
            </Nav.Link>
            <Nav.Link href="#" className="nav-btn">
              <Gift size={30} />
              <span className="nav-label">Perks</span>
            </Nav.Link>
            <Nav.Link href="#" className="nav-btn">
              <Box size={30} />
              <span className="nav-label">Addons</span>
            </Nav.Link>
            <Nav.Link href="#" className="nav-btn">
              <QuestionCircle size={30} />
              <span className="nav-label">FAQ</span>
            </Nav.Link>
            <Nav.Link href="#" className="nav-btn">
              <Chat size={30} />
              <span className="nav-label">Support</span>
            </Nav.Link>
            <Nav.Link href="#" className="nav-btn">
              <DoorOpen size={30} />
              <span className="nav-label">Logout</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    
      
    </div>
  );
}

export default AppNavbar;
