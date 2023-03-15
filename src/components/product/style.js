import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2px;
    width: 100%;
    box-sizing: border-box;
`

export const Name = styled.p`
    margin: 0;
    flex-grow: 1;
    font-size: 1.2rem;
`

export const Price = styled.p`
    margin: 0;
    font-size: 1.2rem;
    font-weight: 700;
`