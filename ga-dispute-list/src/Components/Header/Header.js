import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { StyledHeader } from "./styles"

const Header = () => {
    return (
        <div>
            <StyledHeader>
                <h1>İtirazlar</h1>
                <div className="wrapper">
                    <input type="text" placeholder="Kullanıcı ara"/>
                    <FontAwesomeIcon icon={faSearch} className="search" />
                </div>
            </StyledHeader>
        </div>
    );
}

export default Header;
