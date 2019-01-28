import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import ProductsList from './components/ProductsList.jsx'
import ProductForm from './components/ProductForm.jsx'
class App extends Component {
  render() {
    return (
       <Router>
        <div className="container">
          <div className="header">
            <h1>Store</h1>
          </div>
          <div className="left">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/product">New Product</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>
          </div>
          <div className="content">
            <div>

          <Route exact path="/"  />
            <Route exact path="/products" component={ProductsList} />
            <Route exact path="/product" component={ProductForm} />
            <Route exact path="/product/:id" component={ProductForm}/>
            </div>
          </div>
        </div>
       </Router>
     
    );
  }
}

export default App;
