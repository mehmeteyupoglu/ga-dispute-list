import React from 'react';
import { Navbar, NavbarBrand,} from 'reactstrap';

import Styled from "styled-components"

export const StyledNav = Styled(Navbar)`

background-color: #17171a;
box-shadow: 0px 2px 20px black;
img {
    width: 15%; 
    height: 15%; 
}
`

const NavBar = (props) => {

    return (
        <div>
        <StyledNav>
            <Navbar light expand="md" className="NavBar">
                <NavbarBrand href="/">
                    <img src="https://gamerarena.com/static/img/logo/header-logo.png" alt="gamer arena"></img>
                </NavbarBrand>
            </Navbar>
        </StyledNav>
        </div>
    );
}

export default NavBar;
