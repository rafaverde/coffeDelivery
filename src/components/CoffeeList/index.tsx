import { CoffeeCard } from "../CoffeeCard"
import { CoffeeListContainer } from "./styles"

import { coffees } from "../../data.json"

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <div className="content">
        <h2>Nossos cafés</h2>
        <div className="coffeeWrapper">
          {coffees
            ? coffees.map((coffee) => (
                <CoffeeCard key={coffee.id} coffee={coffee} />
              ))
            : null}
        </div>
      </div>
    </CoffeeListContainer>
  )
}
