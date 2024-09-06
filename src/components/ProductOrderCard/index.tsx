import { Trash } from "@phosphor-icons/react"

import { ProductOrderCardContainer, Controls, RemoveButton } from "./styles"

import { Counter } from "../Counter"

export function ProductOrderCard() {
  return (
    <ProductOrderCardContainer>
      <img src="/images/coffees/americano.png" alt="" />
      <div>
        <span>Expresso Tradicional</span>
        <Controls>
          <Counter />
          <RemoveButton>
            <Trash />
            Remover
          </RemoveButton>
        </Controls>
      </div>
      <span>R$9,90</span>
    </ProductOrderCardContainer>
  )
}
