import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react"
import introImage from "../../../assets/intro-image.png"
import { IntroContainer } from "./styles"

export function Intro() {
  return (
    <IntroContainer>
      <div className="content">
        <div>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <span className="subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora!
          </span>
          <div className="iconsContainer">
            <div className="contentWrapper">
              <div className="iconTitleWrapper yellow-dark">
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </div>
            <div className="contentWrapper">
              <div className="iconTitleWrapper dark-gray">
                <Package size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </div>
            <div className="contentWrapper">
              <div className="iconTitleWrapper yellow">
                <Timer size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </div>
            <div className="contentWrapper">
              <div className="iconTitleWrapper purple">
                <Coffee size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </div>
          </div>
        </div>
        <div className="introImage">
          <img src={introImage} alt="" />
        </div>
      </div>
    </IntroContainer>
  )
}
