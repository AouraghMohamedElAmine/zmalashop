import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logoutActions } from "../redux/actionCreators/userLoginActions.js";
const Header = () => {
  const { user } = useSelector((state) => state.userLoginData);
  const { cartItems } = useSelector((state) => state.cart);
  const { address } = useSelector((state) => state.userAddress);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutActions());
  };

  return (
    <header>
      <Navbar variant="dark" bg="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>ZmalaShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="float-right">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart "></i> Cart
                  {cartItems.length > 0 ? `(${cartItems.length})` : null}
                </Nav.Link>
              </LinkContainer>

              {user ? (
                <NavDropdown title={user.name} id="userName">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/orders">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>

                  {user.isAdmin ? (
                    <>
                      <LinkContainer to="/UsersTableScreen">
                        <NavDropdown.Item>
                          admin Dashboard -Users
                        </NavDropdown.Item>
                      </LinkContainer>

                      <LinkContainer to="/ProductsTableScreen">
                        <NavDropdown.Item>
                          admin Dashboard -Products
                        </NavDropdown.Item>
                      </LinkContainer>
                    </>
                  ) : null}
                  <LinkContainer to="/login">
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user "></i> Login
                  </Nav.Link>
                </LinkContainer>
              )}

              {address ? (
                <LinkContainer to="/checkout">
                  <Nav.Link>
                    <i class="fa fa-globe" aria-hidden="true"></i>
                    Shipping to
                    { " "+address.wilaya +
                      "," +
                      address.daira +
                      "," +
                      address.commune}
                  </Nav.Link>
                </LinkContainer>
              ) : (
                <LinkContainer to="/checkout">
                <Nav.Link>
                  <i class="fa fa-globe" aria-hidden="true"></i>
                Change your address
                </Nav.Link>
                </LinkContainer>

              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
