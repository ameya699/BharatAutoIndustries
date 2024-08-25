import React from "react";
import {Link,NavLink} from "react-router-dom";
import { Location, useLocation } from "react-router";
import { MdOutlineMenu } from "react-icons/md";
const Header=()=>{
  const location=useLocation();
  const isActive=(pathName)=>{
    return location.pathname===pathName;
  }
  const inActiveLinkStyle={
    fontWeight:"normal",
    color:"white",
    borderRadius:"18px",
    background:"transparent"
  }
  const activeLinkStyle={
    fontWeight:"bold",
    background:"#0289A7",
    borderRadius:"18px",
    color:'white'
  }
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand" style={{color:"white"}} >
    <div className="logo-text-container">
      <img src="https://tiimg.tistatic.com/images/l/0/logo_15678.gif" className="nav-logo"/>
      <label>Bharat Auto Industries</label>
    </div>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <MdOutlineMenu />
    </button>
    <div class="collapse navbar-collapse" style={{textAlign:'center',color:"white"}} id="navbarNav">
        <Link to="/">
      <ul class="navbar-nav" >
        <li class="nav-item">
          < Link to="/products" class="nav-link" style={isActive("/products")?activeLinkStyle:inActiveLinkStyle}>Products</Link>  
        </li>
        <li class="nav-item">
          < Link to="/about" class="nav-link" style={isActive("/about")?activeLinkStyle:inActiveLinkStyle}  >About</Link>  
        </li>
        <li class="nav-item">
          < Link to="/contact" class="nav-link" style={isActive("/contact")?activeLinkStyle:inActiveLinkStyle}  >Contact</Link>  
        </li>
      </ul>
      </Link>
    </div>
  </div>
</nav>
        </>
    )
}

export default Header;