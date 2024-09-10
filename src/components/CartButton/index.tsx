import { ShoppingCart } from "@phosphor-icons/react"
import { ButtonVariants, CartButtonContainer } from "./styled"

interface CartButtonProps {
  variant?: ButtonVariants
  counter?: number
  onAddToCart?: () => void
}

export function CartButton({
  variant = "yellow",
  counter = 0,
  onAddToCart,
}: CartButtonProps) {
  return (
    <CartButtonContainer $variant={variant} onClick={onAddToCart}>
      {counter > 0 ? <span>{counter}</span> : null}
      <ShoppingCart size={22} weight="fill" />
    </CartButtonContainer>
  )
}
