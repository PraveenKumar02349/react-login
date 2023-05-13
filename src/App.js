import React from 'react';
import './login.css'; // import the CSS file
import Login from './Login.js'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ProductList from './ProductList';
function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
