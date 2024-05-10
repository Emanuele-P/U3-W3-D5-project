import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  Form,
} from 'react-bootstrap'
import logo from '../assets/logo.png'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { getTracksAction, updateQueryAction } from '../redux/actions'

function AppNavbar() {
  const [query, setQuery] = useState('')

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(updateQueryAction(query))
    dispatch(getTracksAction(query))
  }

  return (
    <Col md={2}>
      <Navbar expand="md" fixed="left" id="sidebar">
        <Container className="flex-column align-items-start">
          <Navbar.Brand>
            <img src={logo} className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="flex-column">
              <Nav.Link className="side-link">
                <i className="bi bi-house-door-fill"></i> Home
              </Nav.Link>
              <Nav.Link className="side-link">
                <i className="bi bi-book-fill"></i> Your Library
              </Nav.Link>
              <Form onSubmit={handleSubmit}>
                <InputGroup className="mt-3">
                  <FormControl
                    placeholder="Search"
                    type="search"
                    value={query}
                    onChange={handleChange}
                  />
                  <Button variant="outline-secondary" className="btn-sm">
                    GO
                  </Button>
                </InputGroup>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn">
          <Button variant="outline-primary" className="signup-btn">
            Sign Up
          </Button>
          <Button variant="outline-secondary" className="login-btn">
            Login
          </Button>
          <Nav.Link className="d-inline">Cookie Policy</Nav.Link> | {''}
          <Nav.Link className="d-inline">Privacy</Nav.Link>
        </div>
      </Navbar>
    </Col>
  )
}

export default AppNavbar
