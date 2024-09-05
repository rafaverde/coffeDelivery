import { Minus, Plus } from "@phosphor-icons/react"
import { CounterContainer } from "./styles"

export function Counter() {
  return (
    <CounterContainer>
      <button>
        <Minus size={18} weight="bold" />
      </button>
      <input
        type="number"
        name="quantity"
        id="quantity"
        placeholder="0"
        value={0}
      />
      <button>
        <Plus size={18} weight="bold" />
      </button>
    </CounterContainer>
  )
}
