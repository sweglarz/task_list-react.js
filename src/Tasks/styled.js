import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    text-align: left;
`
export const Item = styled.li`
    padding: 10px 0;
    border-bottom: 2px solid #eee;
    margin: 25px 15px 0 15px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;

    ${({ hidden }) => hidden && css`
        display: none;    
    `}
`
export const TaskContent = styled.span`
    line-height: 1.8;
    word-break: break-all;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`
export const Button = styled.button`
    margin: 0 10px;
    border: none;
    width: 30px;
    height: 30px;
    padding: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: #008000;
        color: #fff;

        &:hover{
            background-color: rgb(0, 138, 0);
        }
        &:active{
            background-color: rgb(3, 158, 3);
        }
    `}

    ${({ remove }) => remove && css`
        background-color: #ff0000;
        color: #fff;

        &:hover{
            background-color: rgb(255, 52, 52);
        }
        &:active{
            background-color: rgb(255, 72, 72);
        }
    `}
`