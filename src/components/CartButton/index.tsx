import { ShoppingCart, Spinner } from "@phosphor-icons/react"
import { ButtonVariants, CartButtonContainer } from "./styled"

interface CartButtonProps {
  variant?: ButtonVariants
  counter?: number
  isProductAdding?: boolean

  onAddToCart?: () => void
}

export function CartButton({
  variant = "yellow",
  counter = 0,
  onAddToCart,
  isProductAdding,
}: CartButtonProps) {
  return (
    <CartButtonContainer
      $variant={variant}
      onClick={onAddToCart}
      disabled={isProductAdding}
    >
      {counter > 0 ? <span>{counter}</span> : null}
      {isProductAdding ? (
        <Spinner size={22} data-spinnig />
      ) : (
        <ShoppingCart size={22} weight="fill" />
      )}
    </CartButtonContainer>
  )
}
