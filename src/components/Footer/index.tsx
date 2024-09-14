import { Copyright, Heart, Rocket } from "@phosphor-icons/react"
import { FooterContainer } from "./styles"
import { NavLink } from "react-router-dom"

export function Footer() {
  return (
    <FooterContainer>
      <Copyright size={18} />
      made with <Heart size={22} weight="fill" /> by{" "}
      <NavLink to={"https://github.com/rafaverde"} target="_blank">
        rafaverde
      </NavLink>
      &
      <NavLink
        to={
          "https://app.rocketseat.com.br/cart/rocketseat-one?referral=rafaverde&coupon=indicamgm&utm_source=platform&utm_medium=organic&utm_campaign=venda&utm_term=mgm&utm_content=indication-lp_one"
        }
        target="_blank"
      >
        rocketseat
      </NavLink>
      <Rocket size={22} />
    </FooterContainer>
  )
}
