import React from 'react';
import Config from '../helpers/Config';
const Footer = () => {
    const {urlPersonal} = Config();
    return ( 
        <footer className = "page-footer font-small blue">
            <div className="footer-copyright text-center py-3">© 2019 Copyright:
                <a href={urlPersonal} target="_blank" rel="noopener noreferrer"> Ing. Armando Salamanca Ayon</a>
            </div>
        </footer>
     );
}
 
export default Footer;