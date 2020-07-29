import React from 'react';

import Header from '../../components/Header';
import MainSection from '../../components/MainSection';

export default function Home() {
    return (
        <div className="fillPage">
            <Header />

            <MainSection />

            {/* <div id="message"></div> */ }
            {/* <input type="file" accept="video/*"/> */}
        </div>
    );
}