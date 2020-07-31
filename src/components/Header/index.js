import React from 'react';

import { Container, Brand, Name } from './styles';

import history from '../../config/history';

function Header() {
    function handleClick(){
        history.push('/');
    }

    return (
        <Container>
            <Brand onClick={handleClick}>
                <img src="https://i.imgur.com/hqVtTM4.png" alt="LogoMask" />
            </Brand>
            <Name onClick={handleClick}>Mask Detection</Name>
        </Container>
    );  
}

export default Header;