import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react"
import deliveryGuy from "../../assets/sucess-delivery-guy.png"

import { SuccessContainer, SuccessContent } from "./styles"

export function Success() {
  return (
    <SuccessContainer>
      <SuccessContent>
        <header>
          <h2>Uhuu! Pedido Confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </header>

        <main>
          <div className="gradientBorder">
            <div className="gradientPadding">
              <div className="contentWrapper">
                <div className="iconTitleWrapper purple">
                  <MapPin size={20} weight="fill" />
                </div>
                <span>
                  Entrega em{" "}
                  <b>
                    Rua Boa Sorte, 102 - Condomínio Alto da Boa Sorte, Casa 4
                  </b>{" "}
                  - Parnamirim, RN
                </span>
              </div>
              <div className="contentWrapper">
                <div className="iconTitleWrapper yellow">
                  <Timer size={20} weight="fill" />
                </div>
                <span>
                  Previsão de entrega
                  <br />
                  <b>20min - 30min</b>
                </span>
              </div>
              <div className="contentWrapper">
                <div className="iconTitleWrapper yellow-dark">
                  <CurrencyDollar size={20} />
                </div>
                <span>
                  Pagamento na entrega
                  <br />
                  <b>Cartão de Crédito</b>
                </span>
              </div>
            </div>
          </div>
          <img src={deliveryGuy} />
        </main>
      </SuccessContent>
    </SuccessContainer>
  )
}
