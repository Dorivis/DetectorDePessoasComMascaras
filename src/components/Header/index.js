import React from 'react';

import { Container, Brand, Name } from './styles';

function Header() {

    return (
        <Container>
            <Brand>
                <img src="https://i.imgur.com/hqVtTM4.png" alt="LogoMask" />
            </Brand>
            <Name>DetectMasks</Name>
        </Container>
    );  
}

export default Header;