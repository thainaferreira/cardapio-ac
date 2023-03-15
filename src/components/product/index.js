import { Name, Price, Wrapper } from "./style"

export const Product = ({ name, price }) => {
    return (
        <Wrapper>
            <Name>{name}</Name>
            <Price>R${`${price.toFixed(2)}`.replace('.', ',')}</Price>
        </Wrapper>
    )
} 