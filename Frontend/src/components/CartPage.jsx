
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import  Navbar  from "../components/Navbar";
import Footer from "../components/Footer"
import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
  setCartFromLocalStorage,
} from "../features/cartSlice";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { Button, Card, ListGroup, Row, Col, Image, Alert, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, totalQuantity, totalPrice, status, error } = useSelector(
    (state) => state.cart
  );
  const [localCartLoaded, setLocalCartLoaded] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart && savedCart.length > 0) {
      dispatch(setCartFromLocalStorage(savedCart));
    }
    setLocalCartLoaded(true);
  }, [dispatch]);

  useEffect(() => {
    if (localCartLoaded && cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, localCartLoaded]);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  if (status === "loading") return <Spinner animation="border" />;
  if (status === "failed") return <Alert variant="danger">Error: {error}</Alert>;

  return (
    <div>
    <Navbar/>
    <div className="pt-16 dark:bg-slate-800 dark:text-white">
    <section className="py-5 bg-light">
      <div className="container">
        <Row className="g-4">
          {/* Cart Items Column */}
          <Col xs={12} md={8} lg={8}>
            <Card className="shadow-sm">
              <Card.Header className="dark:bg-slate-800 dark:text-white border-bottom ml-8 ">
                <h5>Shopping Cart ({cart.length} items)</h5>
              </Card.Header>
              <Card.Body >
                {cart.length > 0 ? (
                  cart.map((item) => (
                    <Row className="mb-4 border-bottom pb-3 align-items-center" key={item.id}>
                      {/* Display in Row Layout on Large Screens */}
                      <Col xs={12} md={4} lg={3} className="d-flex justify-content-center mb-3 mb-md-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          rounded
                          fluid
                          className="w-100"
                        />
                      </Col>
                      <Col xs={12} md={6} lg={6}>
                        <h6 className="mb-2">{item.title}</h6>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          className="me-2"
                          onClick={() => dispatch(removeItem(item.id))}
                        >
                          <FaTrash />
                        </Button>
                      </Col>
                      <Col xs={12} md={2} lg={3} className="d-flex align-items-center">
                        <div className="d-flex align-items-center">
                          <Button
                            variant="primary"
                            size="sm"
                            className="me-2 mt-2 mb-2 dark:bg-slate-800 dark:text-white btn-secondary"
                            onClick={() => dispatch(decreaseItemQuantity(item.id))}
                          >
                            <FaMinus />
                          </Button>
                          <input
                            id={`quantity-${item.id}`}
                            min="0"
                            value={item.quantity}
                            type="number"
                            className="form-control ml-4 mt-2 mb-2 dark:bg-slate-800 dark:text-white"
                            readOnly
                          />
                          <Button
                            variant="primary"
                            className="form-control me-2 mt-2 mb-2 dark:bg-slate-800 dark:text-white btn-secondary"
                            size="sm"
                            onClick={() => dispatch(increaseItemQuantity(item.id))}
                          >
                            <FaPlus />
                          </Button>
                        </div>
                        <p className="mt-2">
                          <strong>Price: ${item.price}</strong>
                        </p>
                      </Col>
                    </Row>
                  ))
                ) : (
                  <p>Your cart is empty.</p>
                )}
              </Card.Body>
            </Card>
          </Col>

          {/* Summary Column */}
          <Col xs={12} md={4} lg={4}>
            <Card className="shadow-sm">
              <Card.Header className="ml-7 dark:bg-slate-800 dark:text-white border-bottom">
                <h5>Order Summary</h5>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex justify-content-between">
                    Total Quantity : 
                    <span>{totalQuantity}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <strong>Total Amount: </strong>
                    <strong>${totalPrice}</strong>
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="success" size="lg" className="w-100 mt-3 btn-secondary">
                <Link to='/' >
                  Proceed to Buy
                </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Footer/>
      </div>
    </section>
    </div>
    </div>
  );
};

export default CartPage;
