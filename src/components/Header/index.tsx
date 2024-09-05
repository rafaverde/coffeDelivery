import { MapPin } from "@phosphor-icons/react"
import { NavLink } from "react-router-dom"
import coffeeLogo from "../../assets/coffee-delivery-logo.svg"

import { HeaderContainer } from "./styles"
import { CartButton } from "../CartButton"

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={coffeeLogo} alt="" />
      </NavLink>
      <nav>
        <span>
          <MapPin size={22} weight="fill" />
          Natal, RN
        </span>
        <NavLink to="/checkout">
          <CartButton variant="yellow" counter={1} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
