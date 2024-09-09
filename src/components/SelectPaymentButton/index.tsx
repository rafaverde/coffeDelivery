import { forwardRef, InputHTMLAttributes, LegacyRef } from "react"
import { SelectPaymentButtonContainer } from "./styles"
import { IconProps } from "@phosphor-icons/react"

interface SelectPaymentButtonProps
  extends InputHTMLAttributes<HTMLInputElement> {
  title: string
  icon: React.ComponentType<IconProps>
  isactive?: boolean
}

export const SelectPaymentButton = forwardRef(function SelectPaymentButton(
  { icon: Icon, title, isactive = false, ...rest }: SelectPaymentButtonProps,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <SelectPaymentButtonContainer $isactive={isactive} data-state={isactive}>
      <input type="radio" id={title} ref={ref} {...rest} />
      <Icon size={22} />
      {title}
    </SelectPaymentButtonContainer>
  )
})
