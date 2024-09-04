import { ShoppingCart } from "@phosphor-icons/react"
import { ButtonVariants, CartButtonContainer } from "./styled"

interface CartButtonProps {
  variant?: ButtonVariants
}

export function CartButton({ variant = "yellow" }: CartButtonProps) {
  return (
    <CartButtonContainer variant={variant}>
      <span>99</span>
      <ShoppingCart size={22} weight="fill" />
    </CartButtonContainer>
  )
}
