import { Section } from "./components/section";
import { Main, Logo, Cardapio } from "./style";

import cardapio from './assets/cardapio.png'
import logo from './assets/logo.png'


const App = () => {
  const sections = [
    {
        "section_name": "Petiscos",
        "products": [
            {
                "name": "Pastel (Camarão e Carne)",
                "price": 20.00
            },
            {
                "name": "Batata Frita",
                "price": 20.00
            },
            {
                "name": "Filezinho c/ Fritas",
                "price": 45.00
            },
            {
                "name": "Linguiça Artesanal",
                "price": 28.00
            },
            {
                "name": "Calabresa Acebolada",
                "price": 40.00
            },
            {
                "name": "Frios",
                "price": 40.00
            }
        ]
    },
    {
        "section_name": "Cervejas",
        "products": [
            {
                "name": "Heineken LN",
                "price": 10
            },
            {
                "name": "Tijuca LN",
                "price": 8
            },
            {
                "name": "Corona LN",
                "price": 10
            },
            {
                "name": "Budweiser LN",
                "price": 8
            },
            {
                "name": "Stella LN",
                "price": 8
            },
            {
                "name": "Bohemia LN",
                "price": 7
            },
            {
                "name": "Spaten LN",
                "price": 8
            },
            {
                "name": "Heineken (600)",
                "price": 14
            },
            {
                "name": "Tijuca (600)",
                "price": 10
            },
            {
                "name": "Budweiser (600)",
                "price": 12
            },
            {
                "name": "Spaten (600)",
                "price": 13
            },
            {
                "name": "Skol (600)",
                "price": 10
            },
            {
                "name": "Cerveja Lata",
                "price": 5
            },
            {
                "name": "Ice",
                "price": 10
            }
        ]
    },
    {
        "section_name": "Drinks",
        "products": [
            {
                "name": "Caipirinha",
                "price": 14.00
            },
            {
                "name": "Caipifruta",
                "price": 15.00
            },
            {
                "name": "Gin Tonica",
                "price": 22.00
            },
            {
                "name": "Tropical Gin",
                "price": 28.00
            },
            {
                "name": "Mojito",
                "price": 22
            },
            {
                "name": "Cuba Libre",
                "price": 18
            }
        ]
    },
    {
        "section_name": "Shots",
        "products": [
            {
                "name": "Cachaça de Jambu",
                "price": 8
            },
            {
                "name": "Cachaça Amburana",
                "price": 8
            },
            {
                "name": "Old Parr",
                "price": 20
            },
            {
                "name": "Red Label",
                "price": 18
            },
            {
                "name": "Campari",
                "price": 10
            },
            {
                "name": "Conhaque",
                "price": 5
            }
        ]
    },
    {
        "section_name": "Bebidas S/ Alcool",
        "products": [
            {
                "name": "Sucos",
                "price": 8
            },
            {
                "name": "Sucos Especiais",
                "price": 10
            },
            {
                "name": "Refrigerante (Lata)",
                "price": 5
            },
            {
                "name": "Água",
                "price": 4
            },
            {
                "name": "Água c/ Gás",
                "price": 4.50
            },
            {
                "name": "Água Tônica",
                "price": 5
            }
        ]
    }
]
  return (
    <Main>
      <Logo src={logo} />
      <Cardapio src={cardapio} />
      {sections.map((s) => <Section section={s} />)}
    </Main>
  );
}

export default App;
