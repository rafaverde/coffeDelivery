import { Trash } from "@phosphor-icons/react"

import { Controls, ProductOrderCardContainer, RemoveButton } from "./styles"

import { CoffeeToAddData } from "../CoffeeCard"
import { Counter } from "../Counter"
import { useContext, useEffect, useState } from "react"
import { OrderContext } from "../../contexts/OrderContext"

export function ProductOrderCard({
  id,
  title,
  price,
  image,
  quantity,
}: CoffeeToAddData) {
  const { handleAddProductToCart } = useContext(OrderContext)
  const [calculatedPrice, setCalculatedPrice] = useState(price)
  const [actualQuantity, setActualQuantity] = useState(quantity)

  const coffeeToAdd: CoffeeToAddData = {
    id,
    title,
    price,
    image,
    quantity: actualQuantity,
  }

  function handleQuantityChange(quantity: number) {
    setCalculatedPrice(quantity * price)
    setActualQuantity(quantity)
  }

  useEffect(() => {
    if (actualQuantity > quantity) {
      handleAddProductToCart(coffeeToAdd)
    }
  }, [actualQuantity, handleAddProductToCart])

  return (
    <ProductOrderCardContainer key={id}>
      <img src={image} alt="" />
      <div>
        <span>{title}</span>
        <Controls>
          <Counter
            onQuantityChange={handleQuantityChange}
            actualQuantity={actualQuantity}
          />
          <RemoveButton>
            <Trash />
            Remover
          </RemoveButton>
        </Controls>
      </div>
      <span>{calculatedPrice.toFixed(2).toString().replace(".", ",")}</span>
    </ProductOrderCardContainer>
  )
}
