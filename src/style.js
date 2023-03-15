import styled from 'styled-components'

import background from './assets/background.jpg'


export const Main = styled.main`
    background-image: url(${() => background});
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

export const Logo = styled.img`
    width: 50%;
    height: 50%;
    margin: 30px;
`

export const Cardapio = styled.img`
    width: 70%;
    height: 70%;
    margin: 15px;
`