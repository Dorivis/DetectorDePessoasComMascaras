import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 30px;

    hr {
        border: 0;
        height: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }

    h1 {
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 35px;
        color: #333;
        margin-bottom: 10px;
    }

    img {
        width: 1200px;
        height: 700px;
    }

    svg {
        margin-top: 20px;
        position: absolute;
        left: 10px;
    }
`;

export const Quadrado = styled.rect`
    fill: ${props => (props.count > 1 ? 'red': 'green')};
    stroke-width:5;
    opacity:0.5
`;