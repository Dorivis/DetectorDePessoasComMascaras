import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    margin-left: 20px;

    h3 {
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 25px;
        color: #333;
        margin-bottom: 10px;
    }

    p {
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
        font-size: 15px;
        color: #333;
    }

    button {
        margin-top: 20px;
        width: 210px;
        height: 30px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
        font-size: 15px;
        color: #fff;
        background: #FF8C00;
        border: 1px solid #FF8C00;
        border-radius: 5px;
        box-shadow: 0px 2px 4px gray;

        :hover {
            cursor: pointer;
            background: ${shade(0.1, '#FF8C00')};
            border-color: ${shade(0.1, '#FF8C00')};
        }
    }
`;