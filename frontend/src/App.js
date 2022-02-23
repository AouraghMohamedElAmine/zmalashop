import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen.js";
import CartScreen from "./screens/CartScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import RegistreScreen from "./screens/RegistreScreen.js";
import ShippingScreen from "./screens/ShippingScreen.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen.js";
import OrdersScreen from "./screens/OrdersScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import UsersTableScreen from "./screens/admin Screens/UsersTableScreen.js";
import ProductsTableScreen from "./screens/admin Screens/ProductsTableScreen.js";
import ConfirmationScreen from "./screens/ConfirmationScreen.js";
import OneOrderScreen from "./screens/OneOrderScreen.js";
 function App() {
 
  return (
    <Router basename="https://zmalashop.vercel.app">
      <Header />
   
      <Container>
        <main className="py-3">
          <Route exact path="/" component={HomeScreen} />
          <Route path="/Product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/login/" component={LoginScreen} />
          <Route path="/profile/" component={ProfileScreen} />
          <Route path="/checkout/" component={ShippingScreen} />
          <Route path="/registre/" component={RegistreScreen} />
          <Route path="/UsersTableScreen/" component={UsersTableScreen} />
          <Route path="/ProductsTableScreen/" component={ProductsTableScreen} />
          <Route path="/confirmation/" component={ConfirmationScreen} />
          <Route path="/Orders/" component={OrdersScreen} />
          <Route path="/order/:id" component={OneOrderScreen} />
        </main>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
