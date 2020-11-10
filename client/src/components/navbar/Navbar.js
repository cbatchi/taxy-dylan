import React from 'react';

const Navbar = () => {

  return (
    <div className="navbars">
      <div className="navbar-logo">
        <a href="#!">
          <img src={require('../../img/logo.png')} alt=""/>
        </a>
      </div>
      <nav className="navbar-menu">
        <ul>
          <a href="#!">Acceuil</a>
          <a href="#!">A propos</a>
          <a href="#!">Services</a>
          <a href="#!">Reservez</a>
        </ul>
      </nav>
      <div className="navbar-search">
        <a href="#!">
          <i className="fa fa-phone mr-2"></i>
          0606674312
        </a>
      </div>
    </div>
  )
}

export default Navbar