import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import {Nav, NavItem,Navbar } from 'reactstrap'
import { NavbarBrand, NavLink } from 'reactstrap'
 class AppNav extends Component {
    render() {
        return (
            <div>
              <Navbar color="dark" dark light expand="md">
                  <NavbarBrand href="/">Expense Tracker Application</NavbarBrand>
                <Nav className="ml-auto" navbar >
                    <NavItem>
                      {/* <NavLink href="/">Home</NavLink> */}
                      <NavLink >
                        <Link to="/" > Home</Link>

                      </NavLink>
                    </NavItem>
                    <NavItem>
                      {/* <NavLink href="/categories1">Categories</NavLink> */}
                      <NavLink >
                        <Link to="/categories1" > Category</Link>

                      </NavLink>
                    </NavItem>
                    <NavItem>
                      {/* <NavLink href="/expenses">Expenses</NavLink> */}
                      <NavLink >
                        <Link to="/expenses1" > Expense</Link>

                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink >
                        <Link to="/categories1" > Cat</Link>

                      </NavLink>
                    </NavItem>
                    
                  </Nav>
                 
              </Navbar>
            </div>
          )
    }
}

export default AppNav
