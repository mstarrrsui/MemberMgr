import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">React Demos</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} exact={true} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} activeClassName="active" to="/tabpanel">Tabs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/membercards">Cards</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/membertable">Table</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/grid">Kendo Grid</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}