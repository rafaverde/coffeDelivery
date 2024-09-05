import { CoffeeCardContainer } from "./styles"

import { CartButton } from "../../components/CartButton"
import { Counter } from "../Counter"

interface CoffeeProps {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt="" />
      <div className="tagWrapper">
        {coffee
          ? coffee.tags.map((tag) => <span key={coffee.id + tag}>{tag}</span>)
          : null}
      </div>
      <h3>{coffee.title}</h3>
      <p>{coffee.description}</p>

      <footer>
        <div className="price">
          R$ <span>{coffee.price.toFixed(2).toString().replace(".", ",")}</span>
        </div>
        <div className="actions">
          <Counter />
          <CartButton variant="purple" counter={0} />
        </div>
      </footer>
    </CoffeeCardContainer>
  )
}
