import styled from "styled-components";

export const StyledButtons = styled.div`
    padding: 10px;
    line-height: 1.5;
    
    @media(max-width: 500px){
        display: flex;
        flex-direction: column;
        text-align: center;
    };
`;

export const Button = styled.button`
    background-color: transparent;
    font-family: 'Montserrat', sans-serif;
    border: none;
    color: teal;
    font-size: 16px;
    padding: 0;
    margin: 0 0 0 20px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover{
        color: rgb(1, 160, 160);
    };
    &:active{
        color: rgb(0, 196, 196);
    };
    &:disabled{
        color: #ccc;
        cursor: inherit;
    };
    @media(max-width: 500px){
        margin: 10px 0;
    };
`;
