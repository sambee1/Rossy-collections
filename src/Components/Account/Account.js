import React from "react";
import { Container, Col, Nav, Row, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddAddress from "./AddAddress";
import Orders from "./Orders";
import Inbox from "./Inbox";
import SavedItems from "./SavedItems";
import Details from "./Details";
import CloseAccount from "./CloseAccount";
import ChangePassword from "./ChangePassword";
import Address from "./Address";
import Overview from "./Overview";

function Account() {
  return (
    <div>
      <Container className="block md:hidden">
        <div className="account">
          <p className="font-bold m-3">Welcome, Samuel</p>
          <span className="m-3">nnajisamuel5@gmail.com</span>
          <p></p>
          <p className="-title">My Account</p>
          <div className="my-account">
            <Link to="/inbox">
              <p>Inbox</p>
            </Link>
            <Link to="/orders">
              <p>Orders</p>
            </Link>
            <Link to="/saved-items">
              <p>Saved Items</p>
            </Link>
            <Link to="">
              <p>Recently Viewed</p>
            </Link>
          </div>
          <p className="account-title">Account Settings</p>
          <div className="settings">
            <Link to="/details">
              <p>Account Details </p>
            </Link>

            <Link to="/change-password">
              <p>Change Password</p>
            </Link>
            <Link to="/close-account">
              <p>Close Account</p>
            </Link>
          </div>
          <div className="log-out flex justify-center">
            <button>Logout</button>
          </div>
        </div>
      </Container>
      <Container className="account-full hidden md:block">
        <Tab.Container id="left" defaultActiveKey="first" className="container">
          <Row>
            <Col sm={3} className="mt-3">
              <Nav variant="tabs" className="flex-column left-nav">
                <Nav.Item>
                  <Nav.Link eventKey="first" className="mb-2">
                    My Account
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" className="mb-2">
                    Orders
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" className="mb-3">
                    Inbox
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth" className="mb-3">
                    Saved Items{" "}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth" className="mb-3">
                    Details
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth" className="mb-3">
                    Addresses
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="seventh" className="mb-3">
                    Change Password
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="eighth" className="mb-3">
                    Close Account
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="mb-3">
                    <button>Logout</button>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Overview />{" "}
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Orders />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Inbox />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <SavedItems />
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <Details />
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <Address />
                </Tab.Pane>
                <Tab.Pane eventKey="seventh">
                  <ChangePassword />
                </Tab.Pane>
                <Tab.Pane eventKey="eighth">
                  <CloseAccount />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default Account;
