import React from 'react';
import 'react-multi-carousel/lib/styles.css';

import { Container, CarouselModel ,Video } from './styles';

import VideoFile from '../../uploads/videos/VideoMaskedAndNonMaskedPeople.mp4';
import VideoTest from '../../uploads/videos/AdamTeste.mp4';

function VideoCarousel() {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 400, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 2024, min: 1024 },
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

    function handleSelectedVideo(video) {
      window.location.assign(window.location.href + "detection/?video=" + window.location.href.substring(0, window.location.href.length - 1) + video );
    }

    return (
        <Container>
            <CarouselModel
                swipeable={false}
                draggable={false}
                showDots={true}
                centerMode={true}
                focusOnSelect={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="transform .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                renderButtonGroupOutside={true}
            >
                <div onClick={() => handleSelectedVideo(VideoFile)}>
                    <Video controls muted preload="auto">
                        <source src={VideoFile} type="video/mp4" />
                        Your browser does not support the video tag.
                    </Video>
                </div>
                <div onClick={() => handleSelectedVideo(VideoTest)}>
                    <Video controls muted preload="auto">
                        <source src={VideoTest} type="video/mp4" />
                        Your browser does not support the video tag.
                    </Video>
                </div>
            </CarouselModel>
        </Container>

    );
}

export default VideoCarousel;
