import { CoffeeCard } from "../CoffeeCard"
import { CoffeeListContainer } from "./styles"

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <div className="content">
        <h2>Nossos cafés</h2>
        <div className="coffeeWrapper">
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </div>
      </div>
    </CoffeeListContainer>
  )
}
