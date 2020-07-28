import React from 'react';

import { Container, ListVideos, Video } from './styles';

import useModel from '../../useModel';
import ObjectDetectionVideo from '../../object-detection-video/ObjectDetectionVideo';
import VideoFile from '../../uploads/VideoMaskedAndNonMaskedPeople.mp4';

function MainSection() {
    const model = useModel(process.env.PUBLIC_URL + '/model_web')

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
        <Container>
            <ListVideos>
                <Video controls autoplay>
                    <source src={VideoFile} type="video/mp4" />
                    Your browser does not support the video tag.
                </Video>

                <Video controls autoplay>
                    <source src={VideoFile} type="video/mp4" />
                    Your browser does not support the video tag.
                </Video>
            </ListVideos>
        </Container>
        /* <ObjectDetectionVideo 
            model={model}
            onPrediction={handlePrediction}
            render={render}
            // aspectFill: true
            // aspectFit:  The option to scale the video to fit the size of the view
            //             by maintaining the aspect ratio. Any remaining area of the
            //            view's bounds is transparent.
            fit="aspectFit"
            // mirrored:   mirror the video about its vertical axis.
            mirrored
        /> */
    );
}   

export default MainSection;