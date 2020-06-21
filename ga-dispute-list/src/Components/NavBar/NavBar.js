import React, { useState } from 'react';
import { Navbar, NavbarBrand,} from 'reactstrap';

const NavBar = (props) => {

    return (
        <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
                <img src="https://gamerarena.com/static/img/logo/header-logo-contrast.png" alt="gamer arena"></img>
            </NavbarBrand>
        </Navbar>
        </div>
    );
}

export default NavBar;
