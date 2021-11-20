import styled from "styled-components";

export const FormElement = styled.form`
    padding: 10px 0;
`

export const FormLabel = styled.label`
    display: flex;
    justify-content: space-between;

    @media (max-width: 500px) {
        flex-wrap: wrap;
    }
`

export const FormInput = styled.input`
    padding: 10px;
    margin: 10px;
    flex-grow: 1;
    font-size: 16px;
    border: 2px solid #eee;
`
export const FormButton = styled.button`
    padding: 10px;
    margin: 10px;
    background-color: teal;
    color: #fff;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        background-color: rgb(1, 141, 141);
        transform: scale(1.1);
    }
    &:active{
        background-color: rgb(3, 170, 170); 
    }
    @media (max-width: 500px) {
        flex-basis: 100%;
    }
`