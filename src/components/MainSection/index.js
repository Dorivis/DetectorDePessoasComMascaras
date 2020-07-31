import React from 'react';

import { Subtitle, Container } from './styles';
import VideoCarousel from '../VideoCarousel';

function MainSection() {

    return (
        <Container>
            <Subtitle>Select a video below:</Subtitle>

            <VideoCarousel />
        </Container>
    );
}   

export default MainSection;