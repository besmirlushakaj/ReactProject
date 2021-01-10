import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                {/* <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>NuCamp</h1>
                                <h2>a better way to camp</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron> */}

                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logo-bitagency.png" height="50" width="120" alt="NuCamp Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/webdevelopment">
                                        <i className="fa fa-home fa-lg" /> WEB DEVELOPMENT
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/recruitmentsolutions">
                                        <i className="fa fa-list fa-lg" /> RECRUITMENT SOLUTIONS
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/consultancy">
                                        <i className="fa fa-info fa-lg" /> CONSULTANCY
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/webdesign">
                                        <i className="fa fa-address-card fa-lg" /> WEB DESIGN
                                    </NavLink>
                                    </NavItem>
                                    <NavItem>
                                    <NavLink className="nav-link" to="/shop">
                                        <i className="fa fa-address-card fa-lg" /> SHOP
                                    </NavLink>
                                    </NavItem>
                                    <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg" /> CONTACT
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;
