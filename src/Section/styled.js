import styled from "styled-components";

export const SectionElement = styled.section`
    background-color: #fff;
    padding: 5px 0;
    margin: 10px;
`

export const HeaderBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 2px solid #eee;
    
    @media(max-width: 500px){
        display: flex;
        flex-direction: column;
    }
`

export const SectionHeader = styled.h2`
    margin: 0px;
    padding: 10px;
    border-bottom: 2px solid #eee;
    font-size: 20px;
`

export const BorderlessHeader = styled(SectionHeader)`
    border-bottom: none;
`