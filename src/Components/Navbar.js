import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Navbar, Offcanvas } from "react-bootstrap";
import Logo from "./Images/logo.png";
import {
  BsFillPersonFill,
  BsCart,
  BsCaretDownFill,
  BsCaretUpFill,
} from "react-icons/bs";
import Categories from "./Categories";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";

function OffcanvasExample() {
  const [shown, setShown] = React.useState(false);

  function handleClick() {
    setShown((prevShown) => !prevShown);
    // document.querySelector("dropdown-content").classList.toggle("hidden");
  }
  const { total } = useSelector((store) => store.cart);

  return (
    <>
      <Container className="hidden md:block">
        <Row className="">
          <Col md={2}>
            <Navbar.Brand>
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </Navbar.Brand>
          </Col>
          <Col md={6}>
            <div className="ml-8 pt-3">
              <Form className="d-flex ">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </div>
          </Col>
          <Col md={2} className="flex pt-4">
            <div className="mr-2 flex dropdown" onClick={handleClick}>
              <div className="pt-1">
                <BsFillPersonFill />
              </div>
              <div>
                <div>
                  <button className="ml-2 dropbtn">Account</button>
                </div>
                <div
                  className={`dropdown-content ${shown ? "block" : "hidden"}`}
                >
                  <Link to="sign-in">Sign in</Link>
                  <Link to="/account/inbox">Inbox</Link>
                  <Link to="/account/orders">Orders</Link>
                  <Link to="/account/saved-items">Saved Items</Link>
                </div>
              </div>

              <div className="ml-2 pt-1">
                {shown ? <BsCaretUpFill /> : <BsCaretDownFill />}
              </div>
            </div>
            <Link to="cart">
              <button className="ml-3 flex">
                <span className="pt-1">
                  <BsCart />
                </span>
                <span className="ml-2">Cart</span>
              </button>
            </Link>
          </Col>
        </Row>
      </Container>

      <div className="block md:hidden">
        {["md"].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="mb-3">
            <Container>
              <div className="flex flex-row">
                <div className="basis-1/4 ">
                  <Navbar.Toggle
                    aria-controls={`offcanvasNavbar-expand-${expand}`}
                  />
                </div>

                <div className="basis-2/4 ">
                  <Navbar.Brand>
                    <Link to="/">
                      <img src={Logo} alt="logo" />
                    </Link>
                  </Navbar.Brand>
                </div>
                <div className="flex gap-3 basis-1/4 ml-3 mt-2">
                  <div className="mr-2 icon-border">
                    <BsFillPersonFill />
                    <span className="hidden md:block">Account</span>
                  </div>

                  <Link to="cart">
                    <button className="mr-2 relative">
                      <div className="icon-border">
                        <BsCart />
                      </div>
                      <div className="cart-total">{total}</div>
                      <span className="hidden md:block">Cart</span>
                    </button>
                  </Link>
                </div>
              </div>

              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
              >
                <Offcanvas.Header closeButton placement="start">
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <Link to="/">
                      <img src={Logo} alt="logo" />
                    </Link>{" "}
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="menu-bar">
                  <div className="block md:hidden">
                    <div className="pl-3 pb-3 account">
                      <p className="title">MY ACCOUNT</p>
                      <div>
                        <Link to="sign-in">Sign in</Link>
                      </div>
                      <div>
                        <Link to="/account/inbox">Inbox</Link>
                      </div>
                      <div>
                        <Link to="/account/orders">Orders</Link>
                      </div>
                      <div>
                        <Link to="/account/saved-items">Saved Items</Link>
                      </div>
                    </div>
                    <div>
                      <hr />
                      <p className="title">CATEGORIES</p>
                      <Categories key={nanoid()} />
                      <hr />
                    </div>
                    <div className="help">
                      <p>Contact us</p>
                      <p>Help Center</p>
                    </div>
                  </div>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
              {/* Search feature for smaller screens */}
              <div className="block md:hidden w-full">
                <Form className="d-flex search">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
              </div>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
}

export default OffcanvasExample;
