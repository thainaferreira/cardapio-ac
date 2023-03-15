import { Title } from "./title"
import { Product } from "../product"
import { Card, Circle, CircleArea } from "./style"

export const Section = ({ section }) => {
    return (
        <Card>
            <CircleArea>
                <Circle />
                <Circle />
            </CircleArea>
            <Title text={section.section_name.toUpperCase()} />
            {section.products.map((p) => <Product name={p.name.toUpperCase()} price={p.price} />)}
        </Card>
    )
}