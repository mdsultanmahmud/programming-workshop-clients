import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import { Button } from 'react-bootstrap'
import toast from 'react-hot-toast'
import brand from '../../image/brand.jpg'
import ReactSwitch from 'react-switch';
import Form from 'react-bootstrap/Form';
const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogout = () => {
    logOut()
      .then(res => {
        toast.success('You are logout successfully')
      })
      .catch(e => {
        toast.error(e.message)
      })
  }


  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand >
          <img style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '5px' }} src={brand} alt="" />
          <Link className='brand-customize' to={'/'}><span className='brand-first'>Programming</span> Workshop</Link>
        </Navbar.Brand>
        <Navbar.Toggle className='bg-white' aria-controls="navbarScroll" />
        <Navbar.Collapse className='customize-link' id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><Link to={'/courses'}>Courses</Link></Nav.Link>
            <Nav.Link ><Link to={'/faq'}>FAQ</Link></Nav.Link>
            <Nav.Link ><Link to={'/blog'}>Blog</Link></Nav.Link>           
           <Form className='mt-2 ms-lg-2'>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                />              
              </Form>
          </Nav>
          
          <Nav>
            {
              user?.photoURL ?
                <>
                  <Nav.Link className='text-white'>
                    <img title={user?.displayName} style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '5px' }} src={user?.photoURL} alt="" />
                    <Button onClick={handleLogout} className='ms-2' variant="outline-danger">Logout</Button>
                  </Nav.Link>
                </>
                :
                <Nav.Link ><Link to={'/login'}><Button variant="outline-danger">Login</Button></Link></Nav.Link>
            }
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header;