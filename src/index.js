import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout';
import Contact from './components/Contact';
import Products from "./components/Products"
import Home from './components/Home';
import About from './components/About';
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="*" element={<div>404 Not found</div>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <RouterProvider router={router}/>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
