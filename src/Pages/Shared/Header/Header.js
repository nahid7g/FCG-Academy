import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar className='sticky-top' bg="primary" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand href="#home">FCG Academy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='text-white' as={Link} to="/">Home</Nav.Link>
                        <Nav.Link className='text-white' href="#services">Services</Nav.Link>
                        <Nav.Link className='text-white' href="home#about">About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='text-white' as={Link} to="/blogs">Blogs</Nav.Link>
                        {
                            user ? <button onClick={handleSignOut}>Logout</button> : <Nav.Link className='text-white' as={Link} to="/Login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;