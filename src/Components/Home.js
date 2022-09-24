import React from "react";
import Categories from "./Categories";
import { Container } from "react-bootstrap";
import Collection from "./Collection";
import Jacket from "./Jacket";
import { Row, Col } from "react-bootstrap";
import Carousel from "./Slider";
import {
  BsRecycle,
  BsFillCreditCardFill,
  BsFillChatLeftTextFill,
  BsFillSafeFill,
  BsChevronUp,
} from "react-icons/bs";
import { useSelector } from "react-redux";

function Home() {
  const { cartItems } = useSelector((store) => store.cart);
  console.log(cartItems);
  return (
    <div className="mt-4">
      <Container>
        <div className="flex">
          <div className="categories-placement hidden md:block">
            <Categories />
          </div>
          <div className="slider-placement ml-5 ">
            <Carousel />
          </div>
        </div>
        <div className=" ">
          <Row>
            <div className="mt-5">
              <Collection title={"New Arrivals"} category={"New Arrivals"} />
            </div>
          </Row>
          <Row>
            <div className="mt-5 ">
              <Collection title={"Hot Deals"} category={"Hot Deals"} />
            </div>
          </Row>
          <Row>
            <div className="mt-5">
              <Collection title={"Best Sellers"} category={"Best Sellers"} />
            </div>
          </Row>

          <Row className="mt-5">
            <Col md={6} lg={12}>
              <div className="">
                <Jacket title={"Electronics"} category={"Electronics"} />
              </div>
            </Col>
            <Col md={6} lg={12}>
              <div className="">
                <Jacket title={"Jewelry"} category={"Jewelry"} />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <section className="shipping-info">
        <div className="container">
          <ul>
            <li>
              <div className="media-icon flex justify-center">
                <BsFillCreditCardFill />
              </div>
              <div className="media-body">
                <h5>Online Payment.</h5>
                <span>Secure Payment Services.</span>
              </div>
            </li>

            <li>
              <div className="media-icon flex justify-center">
                <BsFillChatLeftTextFill />
              </div>
              <div className="media-body">
                <h5>24/7 Support.</h5>
                <span>Live Chat Or Call.</span>
              </div>
            </li>

            <li>
              <div className="media-icon flex justify-center">
                <BsFillSafeFill />
              </div>
              <div className="media-body">
                <h5>Quality Products.</h5>
                <span>Defect-free Purchases.</span>
              </div>
            </li>

            <li>
              <div className="media-icon flex justify-center">
                <div className="placement">
                  <BsRecycle />
                </div>
              </div>
              <div className="media-body">
                <h5>Easy Return.</h5>
                <span>Hassle Free Shopping.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
