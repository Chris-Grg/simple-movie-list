import React, { useRef } from "react";
import { Form, FormControl, Button, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const SearchBar = ({ setSearchValue, searchValue }) => {
  const searchRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(searchRef.current.value);
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Movie List</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>

        <Form className="searchbar" onSubmit={handleSubmit}>
          <Row className="align-items-center">
            <Form.Label
              column
              sm={2}
              xs={4}
              htmlFor="searchfield"
              className="search-label"
            >
              Search:
            </Form.Label>
            <Col sm={8} xs={6} m={0}>
              <FormControl
                className="searchfield"
                type="text"
                id="searchfield"
                placeholder="Type name of a Movie..."
                ref={searchRef}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </Col>
            <Col sm={2} xs={2}>
              <Button className="bi bi-search" variant="primary" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
};

export default SearchBar;
