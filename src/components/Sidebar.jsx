import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Navbar
      bg="black"
      expand="md"
      className="fixed-left flex-column align-items-start"
      id="sidebar"
    >
      <Container className="flex-column align-items-start">
        <Navbar.Brand as={Link} to="/" className="pt-4 pb-5 pl-3">
          <img
            src="assets/logo/logo.png"
            alt="Spotify Logo"
            width="131"
            height="40"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="flex-column align-items-start">
            <Nav.Item>
              <Nav.Link as={Link} to="/" className="text-secondary">
                <i className="bi bi-house-door-fill"></i>&nbsp; Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/search" className="text-secondary">
                <i className="bi bi-search"></i>&nbsp; Search
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/library" className="text-secondary">
                <i className="bi bi-book-fill"></i>&nbsp; Your Library
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/playlists" className="text-secondary">
                <i className="bi bi-music-note-list"></i>&nbsp; Playlists
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/liked-songs" className="text-secondary">
                <i className="bi bi-heart-fill"></i>&nbsp; Liked Songs
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="nav-btn mb-4 text-center">
        <Button variant="light" className="signup-btn mb-3">
          Sign Up
        </Button>
        <Button variant="outline-light" className="login-btn mb-3">
          Login
        </Button>
        <div>
          <Link to="#" className="text-secondary">
            Cookie Policy
          </Link>{' '}
          | <Link to="#" className="text-secondary">
            Privacy
          </Link>
        </div>
      </div>
    </Navbar>
  );
};

export default Sidebar;