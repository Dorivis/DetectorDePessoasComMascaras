import React from 'react';

import { Slogan } from './styles';

import VideoCarousel from '../VideoCarousel';

function MainSection() {

    return (
        <>
            <VideoCarousel />

            <Slogan><p>Simples. Poderoso!</p></Slogan>
        </>
    );
}   

export default MainSection;