import { CoffeeCardContainer } from "./styles"

import { CartButton } from "../../components/CartButton"
import { Counter } from "../Counter"
import { useContext, useState } from "react"

import { CoffeeProps, OrderContext } from "../../contexts/OrderContext"

export interface CoffeeToAddData {
  id: string
  title: string
  image: string
  price: number
  quantity: number
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { productList } = useContext(OrderContext)
  const { handleAddProductToCart } = useContext(OrderContext)

  const coffeeExists = productList.filter((item) => item.id === coffee.id)

  const [calculatedPrice, setCalculatedPrice] = useState(coffee.price)
  const [actualQuantity, setActualQuantity] = useState(1)

  const handleTotalPrice = (quantity: number) => {
    setCalculatedPrice(quantity * coffee.price)
    setActualQuantity(quantity)
  }

  const coffeeToAdd: CoffeeToAddData = {
    id: coffee.id,
    title: coffee.title,
    image: coffee.image,
    price: coffee.price,
    quantity: actualQuantity,
  }

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
          R${" "}
          <span>{calculatedPrice.toFixed(2).toString().replace(".", ",")}</span>
        </div>
        <div className="actions">
          <Counter onQuantityChange={handleTotalPrice} />
          <CartButton
            variant="purple"
            onAddToCart={() => handleAddProductToCart(coffeeToAdd)}
          />
        </div>
      </footer>
    </CoffeeCardContainer>
  )
}
