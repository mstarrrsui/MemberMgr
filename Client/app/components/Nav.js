import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">REACT Demos</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink exact className="nav-link" activeClassName="nav-link active" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="nav-link active" to="/membertable">Table</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="nav-link active" to="/membercards">Cards</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="nav-link active" to="/tabpanel">Tab</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="nav-link active" to="/grid">Kendo Grid</NavLink>
                </li>
                
            </ul>
            
        </div>
    </nav>


    
  );
}

module.exports = Nav;
