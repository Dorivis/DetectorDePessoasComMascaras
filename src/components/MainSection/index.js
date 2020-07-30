import React from 'react';

import { Subtitle, Container } from './styles';
import VideoCarousel from '../VideoCarousel';

function MainSection() {

    return (
        <Container>
            <Subtitle>Selecione um vídeo abaixo:</Subtitle>

            <VideoCarousel />
        </Container>
    );
}   

export default MainSection;