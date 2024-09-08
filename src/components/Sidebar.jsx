import { Navbar, Nav, Container, Button, FormControl, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState} from "react";
import { getAlbumAction } from "../redux/actions/actions";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
const dispatch= useDispatch()
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getAlbumAction(query));
    navigate(`/artist-tracks/${query}`);
  };

  const handleClick = () => {
    navigate('/Search');
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
          <Navbar.Brand as={Link} to="/" className='logo'>
            <img className='mt-3 mb-3'
              src="/logo.png"
              alt="Spotify Logo"
              style={{ width: "130px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="flex-column align-items-start">
              <Nav.Item>
                <Nav.Link as={Link} to="/" className="text-secondary ">
                  <i className="bi bi-house-door-fill"></i>&nbsp; Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/library" className="text-secondary mb-2">
                  <i className="bi bi-book-fill"></i>&nbsp; Your Library
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Form onSubmit={handleSubmit}>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    value={query}
                    onChange={handleChange}
                    onClick={handleClick} // Aggiungi l'evento onClick
                    className="bg-black text-secondary border-secondary mb-2"
                  />
                </Form>
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
            <Link to="#" className="text-secondary text-decoration-none">
              Cookie Policy
            </Link>{" "}
            |{" "}
            <Link to="#" className="text-secondary text-decoration-none">
              Privacy
            </Link>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Sidebar;