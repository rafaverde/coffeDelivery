import { Minus, Plus } from "@phosphor-icons/react"
import { CounterContainer } from "./styles"
import { useEffect, useState } from "react"

interface CounterProps {
  actualQuantity?: number
  onQuantityChange: (quantity: number) => void
}

export function Counter({ onQuantityChange, actualQuantity }: CounterProps) {
  const [quantity, setQuantity] = useState(actualQuantity ? actualQuantity : 1)

  function decrementQuantity() {
    if (quantity > 0) {
      setQuantity((state) => state - 1)
    }
  }

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  useEffect(() => {
    onQuantityChange(quantity)
  }, [quantity, onQuantityChange])

  return (
    <CounterContainer>
      <button
        type="button"
        onClick={decrementQuantity}
        disabled={quantity === 1}
      >
        <Minus size={18} weight="bold" />
      </button>
      <input
        type="number"
        name="quantity"
        id="quantity"
        placeholder="1"
        min={1}
        readOnly
        value={quantity}
      />
      <button type="button" onClick={incrementQuantity}>
        <Plus size={18} weight="bold" />
      </button>
    </CounterContainer>
  )
}
