import { ButtonHTMLAttributes } from "react"
import { SelectPaymentButtonContainer } from "./styles"
import { IconProps } from "@phosphor-icons/react"

interface SelectPaymentButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  icon: React.ComponentType<IconProps>
  isactive?: boolean
}

export function SelectPaymentButton({
  icon: Icon,
  title,
  isactive = false,
  ...props
}: SelectPaymentButtonProps) {
  return (
    <SelectPaymentButtonContainer $isactive={isactive} {...props}>
      <Icon size={22} />
      {title}
    </SelectPaymentButtonContainer>
  )
}
