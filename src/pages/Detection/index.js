import React from 'react';

import useModel from '../../useModel';
import ObjectDetectionVideo from '../../object-detection-video/ObjectDetectionVideo';
import CountProvider from '../../context/Count';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Map from '../../components/Map';

export default function Detection() {
    const model = useModel(process.env.PUBLIC_URL + '/model_web');

    const handlePrediction = (predictions) => {
      console.timeEnd('detect')
      console.time('detect')
      console.log(predictions)
    }

    const render = (ctx, predictions) => {
      predictions.forEach((prediction) => {
        const x = prediction.bbox[0]
        const y = prediction.bbox[1]
        const width = prediction.bbox[2]
        const height = prediction.bbox[3]

        ctx.setStrokeStyle('#0062ff')
        ctx.setLineWidth(4)
        ctx.strokeRect(
          Math.round(x),
          Math.round(y),
          Math.round(width),
          Math.round(height)
        )
      })
    }

    return (
        <CountProvider>
            <div className="fillPage">
                <Header />
                <div id="message"></div>
                <input type="file" accept="video/*"/>
                <ObjectDetectionVideo
                    model={model}
                  //  onPrediction={handlePrediction}
                    // render={render}
                    // aspectFill: true
                    // aspectFit:  The option to scale the video to fit the size of the view
                    //             by maintaining the aspect ratio. Any remaining area of the
                    //            view's bounds is transparent.
                    fit="aspectFit"
                    // mirrored:   mirror the video about its vertical axis.
                    mirrored
                />
                <Map/>
                <Footer/>
            </div>
        </CountProvider>
    );
}
