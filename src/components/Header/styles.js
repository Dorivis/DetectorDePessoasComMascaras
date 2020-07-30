import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 90px;
    background-color: navy;
    box-shadow: 0px 2px 4px gray;
    z-index: 5;
    display: flex;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 25px;
`;

export const Brand = styled.div`
    img {
        height: 100px;
        margin: 5px 0 5px 10px;
    }

    :hover {
        cursor: pointer;
    }
`;

export const Name = styled.p`
    color: #FFFFFF;
    font-size: 30px;
    font-weight: bold;
    margin: auto 0 auto 8px;

    :hover {
        cursor: pointer;
    }
`;