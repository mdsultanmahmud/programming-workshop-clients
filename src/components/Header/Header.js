import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
const Header = () => {
  const {user} = useContext(AuthContext)
  console.log(user)
    return (
        <Navbar bg="dark" expand="lg">
          <Container  fluid>
            <Navbar.Brand > <Link className='brand-customize' to={'/'}><span className='brand-first'>Programming</span> Workshop</Link> </Navbar.Brand>
            <Navbar.Toggle className='bg-white' aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0 customize-link"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action2"><Link to={'/courses'}>Courses</Link></Nav.Link>
                <Nav.Link href="#action2"><Link to={'/faq'}>FAQ</Link></Nav.Link>
                <Nav.Link href="#action2"><Link to={'/blog'}>Blog</Link></Nav.Link>
                <Nav.Link href="#action2"><Link to={'/login'}>Login</Link></Nav.Link>
              </Nav>
             
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    

export default Header;