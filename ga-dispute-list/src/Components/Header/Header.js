import React from 'react';
import { StyledHeader } from "./styles"

const Header = () => {
    return (
        <div>
            <StyledHeader>
                <h1>İtirazlar</h1>
                <input type="text" placeholder="Kullanıcı ara"/>
            </StyledHeader>
        </div>
    );
}

export default Header;
