import React, { useState } from "react";
// import PropTypes from "prop-types";
import style from "./Navbar.module.scss";
import { Navbar as NavBar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
// const initialState = {};



const Navbar = (props) => {
  // const [state, setstate] = useState(initialState);
  return (
    <div className={style.Navbar} data-testid="Navbar">
      <NavBar bg="primary" variant="dark">
        <Container>
          <NavBar.Brand href="#home">Navbar</NavBar.Brand>
          <Nav className="me-auto">
          <LinkContainer to="">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/thumbnail">
            <Nav.Link>Thumbnail</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/editor">
            <Nav.Link>Editor</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/listPDF">
            <Nav.Link>PDF</Nav.Link>
          </LinkContainer>
          </Nav>
        </Container>
      </NavBar>
    </div>
  );
};
Navbar.propTypes = {};
Navbar.defaultProps = {};

export default Navbar;
