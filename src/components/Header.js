import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
    let title = 'Codigo de Barras Iphone ver 0.0.1';
    return (  
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link className="navbar-brand" to = "/">
            <h1>{title}</h1>
          </Link>
        </nav>
    );
}
 
export default Header;
