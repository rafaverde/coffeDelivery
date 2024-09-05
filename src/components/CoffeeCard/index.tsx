import coffeeImg from "/images/coffees/americano.png"

import { CoffeeCardContainer } from "./styles"

import { CartButton } from "../../components/CartButton"
import { Counter } from "../Counter"

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={coffeeImg} alt="" />
      <div className="tagWrapper">
        <span>Tradicional</span>
        <span>Cappuccino</span>
      </div>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <footer>
        <div className="price">
          R$ <span>9,90</span>
        </div>
        <div className="actions">
          <Counter />
          <CartButton variant="purple" />
        </div>
      </footer>
    </CoffeeCardContainer>
  )
}
