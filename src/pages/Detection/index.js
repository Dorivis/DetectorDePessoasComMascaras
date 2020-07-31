import React from 'react';

import useModel from '../../useModel';
import ObjectDetectionVideo from '../../cloudAnnotation/ObjectDetectionVideo';
import CountProvider from '../../context/Count';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Map from '../../components/Map';

import { Content } from './styles';

export default function Detection() {
    const model = useModel(process.env.PUBLIC_URL + '/model_web');

    return (
        <CountProvider>
            <div className="fillPage">
                <Header />
                <Content>
                <ObjectDetectionVideo
                    model={model}
                    fit="aspectFit"
                    mirrored
                />
                <Map/>
                </Content>
                <Footer/>
            </div>
        </CountProvider>
    );
}
