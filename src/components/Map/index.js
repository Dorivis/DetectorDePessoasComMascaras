import React from 'react';
import mapImage from '../../uploads/images/map.jpg';
import { Container, Quadrado } from './styles';
import { useCount } from '../../context/Count';


function Map() {
    const { count } = useCount();

    return (
        <Container>
            <hr/>
            <h1>Mapa de calor da câmera</h1>
            <img src={mapImage} alt="Map" />
            <svg width="400" height="330">
                <Quadrado width="400" height="400" count={count}/>
            </svg>
        </Container>
    );  
}

export default Map;