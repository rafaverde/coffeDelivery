import { Heart } from "@phosphor-icons/react"
import { FooterContainer } from "./styles"
import { NavLink } from "react-router-dom"

export function Footer() {
  return (
    <FooterContainer>
      made with <Heart size={22} weight="fill" /> by{" "}
      <NavLink to={"https://github.com/rafaverde"} target="_blank">
        rafaverde
      </NavLink>
    </FooterContainer>
  )
}
