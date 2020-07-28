import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 120px;
    background-color: navy;
    border-bottom: solid 3px black;
    z-index: 5;
    display: flex;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 5px;
`;

export const Brand = styled.div`
    img {
        height: 100px;
        margin: 5px 0 5px 10px;
    }
`;

export const Name = styled.p`
    color: #FFFFFF;
    font-size: 30px;
    font-weight: bold;
    margin: auto 0 auto 8px;
`;