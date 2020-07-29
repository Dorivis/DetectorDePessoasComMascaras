import React from 'react';
import mapImage from '../../assets/map.jpg';
import { Container, Quadrado } from './styles';
import { useCount } from '../../context/Count';


function Map() {
    const { count, setCount } = useCount();

    return (
        <Container>
            <hr/>
            <h1>Mapa de calor da câmera</h1>
            <img src={mapImage} />
            <svg width="400" height="330">
                <Quadrado width="400" height="400" count={count}/>
            </svg>
        </Container>
    );  
}

export default Map;