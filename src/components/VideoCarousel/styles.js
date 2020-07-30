import styled from 'styled-components';
import Carousel from 'react-multi-carousel';

export const Container = styled.div`
    margin: 10px 0 60px 0;
    display: flex;
    flex-direction: column;
`;

export const CarouselModel = styled(Carousel)`
    div {
        margin-left: 50px;
    }
`;

export const Video = styled.video`
    width: 600px;
    height: 350px;
`;
