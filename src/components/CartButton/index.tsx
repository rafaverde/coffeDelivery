import { ShoppingCart } from "@phosphor-icons/react"
import { ButtonVariants, CartButtonContainer } from "./styled"

interface CartButtonProps {
  variant?: ButtonVariants
  counter: number
}

export function CartButton({
  variant = "yellow",
  counter = 0,
}: CartButtonProps) {
  return (
    <CartButtonContainer $variant={variant}>
      {counter > 0 ? <span>{counter}</span> : null}
      <ShoppingCart size={22} weight="fill" />
    </CartButtonContainer>
  )
}
