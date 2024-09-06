import { Navbar, Nav, Container, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Logica di ricerca o navigazione
    console.log("Searching for:", searchTerm);
  };

  return (
    <Navbar
      bg="black"
      expand="md"
      className="fixed-left flex-column align-items-start"
      id="sidebar"
    >
      <Container className="d-flex flex-column justify-content-between h-100">
        <div>
          <Navbar.Brand as={Link} to="/" className="pt-4 pb-3 pl-3">
            <img
              src="/logo.png"
              alt="Spotify Logo"
              style={{ width: "130px" }}
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
                <Nav.Link as={Link} to="/library" className="text-secondary">
                  <i className="bi bi-book-fill"></i>&nbsp; Your Library
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <FormControl
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-black text-secondary border-secondary"
                  onSubmit={handleSearch}
                />
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/playlists" className="text-secondary">
                  <i className="bi bi-music-note-list"></i>&nbsp; Playlists
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
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
            </Link>{" "}
            |{" "}
            <Link to="#" className="text-secondary">
              Privacy
            </Link>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Sidebar;