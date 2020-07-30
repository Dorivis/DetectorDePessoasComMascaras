import React from 'react';

import Header from '../../components/Header';
import MainSection from '../../components/MainSection';
import Footer from '../../components/Footer';
import { Container } from './styles';

export default function Home() {
    return (
        <Container>
            <Header />

            <MainSection />
            <Footer />
            {/* <div id="message"></div> */ }
            {/* <input type="file" accept="video/*"/> */}
        </Container>
    );
}