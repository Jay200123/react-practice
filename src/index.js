import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
// import Hello from './components/counterComponents';
// import Hello2 from './components/counterComponent2';
// import Hello3 from './components/counterComponent3';
// import Hello4 from './components/counterComponent4';
// import Navbar from './components/navbar';
// import Footer from './components/footer';
// import Content from './components/divComponent';
// import About from './components/divComponent2';
// import State from './components/stateComponent';
import ProductTable from './components/productComponent';

ReactDOM.render(
  <React.StrictMode>
    <ProductTable/>
  </React.StrictMode>,
  document.getElementById('root')
);