import React from 'react';

import { Container, Brand, Name } from './styles';

function Header({ personWithMask, personWithoutMask, count }) {
    function handleSubmit(){
        alert('Emitir algum alerta(Por ex: caixas de som supermercado)');
    }


    return (
    <Container>
        <h3>Câmera X01</h3>
        <p>Local/Região: Corredor 1 / Próximo a saída / Porta 01</p><br/>
        <p style={{color: 'green'}}>Pessoas com mascara: {personWithMask}</p>
        <p style={{color: 'red'}}>Pessoas sem mascara: {personWithoutMask}</p>
        <p>Total de pessoas nesse local: {count}</p>
        <button onClick={handleSubmit}>Emitir alerta</button>
      </Container>
    );  
}

export default Header;