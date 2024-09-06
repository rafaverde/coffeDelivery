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
        placeholder="1"
        min={1}
        readOnly
        disabled
        // value={1}
      />
      <button>
        <Plus size={18} weight="bold" />
      </button>
    </CounterContainer>
  )
}
