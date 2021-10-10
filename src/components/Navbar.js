import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
} from "reactstrap";

const NavbarComponent = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="sm" className="px-3">
                <NavbarBrand tag={Link} to="/">
                    Harrsh
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/about" onClick={toggle}>
                                About
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            {children}
        </div>
    );
};

export default NavbarComponent;
