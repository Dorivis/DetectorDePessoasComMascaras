import React from 'react';

import { Subtitle, Slogan } from './styles';

import VideoCarousel from '../VideoCarousel';

function MainSection() {

    return (
        <>
            <Subtitle>Selecione um vídeo abaixo:</Subtitle>

            <VideoCarousel />

            <Slogan><p>Simples. Poderoso!</p></Slogan>
        </>
    );
}   

export default MainSection;