import React from 'react';

import { Container } from './styles';
import alerta from '../../uploads/audios/pt_br/alertas.mp3';

function Header({ personWithMask, personWithoutMask, count }) {

    let audio = new Audio(alerta);

    const start = () => {
        audio.play();
        alert('Aviso sonoro');
    }

    return (
    <Container>
        <h3>Câmera X01</h3>
        <p>Local/Região: Corredor 1 / Próximo a saída / Porta 01</p><br/>
        <p style={{color: 'green'}}>Pessoas com mascara: {personWithMask}</p>
        <p style={{color: 'red'}}>Pessoas sem mascara: {personWithoutMask}</p>
        <p>Total de pessoas nesse local: {count}</p>

        <button onClick={start}>Emitir alerta</button>
      </Container>
    );  
}

export default Header;