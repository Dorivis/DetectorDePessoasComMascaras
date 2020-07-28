import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Container, Video } from './styles';

import useModel from '../../useModel';
import ObjectDetectionVideo from '../../object-detection-video/ObjectDetectionVideo';
import VideoFile from '../../uploads/VideoMaskedAndNonMaskedPeople.mp4';

function MainSection() {
    const model = useModel(process.env.PUBLIC_URL + '/model_web')

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

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
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div>
                    <Video controls autoplay>
                        <source src={VideoFile} type="video/mp4" />
                        Your browser does not support the video tag.
                    </Video>
                </div>
                <div>
                    <Video controls autoplay>
                        <source src={VideoFile} type="video/mp4" />
                        Your browser does not support the video tag.
                    </Video>
                </div>
            </Carousel>
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