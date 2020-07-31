import React from 'react';

import { Container } from './styles';
import alerta from '../../uploads/audios/en/alert.mp3';

function Header({ personWithMask, personWithoutMask, count }) {

    let audio = new Audio(alerta);

    const start = () => {
        audio.play();
        alert('Warning sound');
    }

    return (
    <Container>
        <h3>Camera X01</h3>
        <p>Location/Region: Hall 01 / Near the exit / Gate 01</p><br/>
        <p style={{color: 'green'}}>People with mask: {personWithMask}</p>
        <p style={{color: 'red'}}>People without a mask: {personWithoutMask}</p>
        <p>Total people there: {count}</p>

        <button onClick={start}>Send Alert</button>
      </Container>
    );  
}

export default Header;