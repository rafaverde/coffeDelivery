import { MapPin } from "@phosphor-icons/react"
import coffeeLogo from "../../assets/coffee-delivery-logo.svg"

import { HeaderContainer } from "./styles"
import { CartButton } from "../CartButton"

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeLogo} alt="" />
      <nav>
        <span>
          <MapPin size={22} weight="fill" />
          Natal, RN
        </span>

        <CartButton variant="yellow" />
      </nav>
    </HeaderContainer>
  )
}
