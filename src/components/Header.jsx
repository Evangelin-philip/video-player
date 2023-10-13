import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar className="bg-primary">
      <Container>
        {/* <Navbar.Brand href="#home"> */}
        <Navbar.Brand>
          <Link
            to={"/"}
            style={{ textDecoration: "none", color: "white" }}
            className="fs-4"
          >
            <i className="fa-solid fa-cloud-arrow-up fa-bounce" style={{color: "#FFFFFF"}}></i>{' '}
            {/* <i class="fa-sharp fa-solid fa-cloud-arrow-up" style="color: #ffffff;"></i> */}
            React Bootstrap
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
