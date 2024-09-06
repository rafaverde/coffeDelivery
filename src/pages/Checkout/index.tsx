import {
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  PixLogo,
} from "@phosphor-icons/react"

import {
  CheckoutContainer,
  CheckoutContent,
  FormUserInformation,
} from "./styles"

import { SelectPaymentButton } from "../../components/SelectPaymentButton"

import { useTheme } from "styled-components"

export function Checkout() {
  const theme = useTheme()

  return (
    <CheckoutContainer>
      <CheckoutContent>
        <div className="userInfos">
          <h2>Insira suas informações</h2>
          <FormUserInformation>
            <div className="addressInfo">
              <div className="header">
                <MapPinLine size={22} color={theme.colors["yellow-dark"]} />
                <div>
                  <p>Endereço de Entrega</p>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </div>
              <div className="inputContainer">
                <div>
                  <input
                    type="text"
                    id="zipcode"
                    placeholder="CEP"
                    maxLength={9}
                  />
                </div>
                <div>
                  <input type="text" id="address" placeholder="Rua" />
                </div>

                <div>
                  <input type="text" id="addressNumber" placeholder="Número" />

                  <input
                    type="text"
                    id="addressExtra"
                    placeholder="Complemento"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="addressNeighborhood"
                    placeholder="Bairro"
                  />
                  <input type="text" id="addressCity" placeholder="Cidade" />
                  <input type="text" id="addressState" placeholder="Estado" />
                </div>
              </div>
            </div>

            <div className="paymentInfo">
              <div>
                <div className="header">
                  <CurrencyDollar size={22} color={theme.colors.purple} />
                  <div>
                    <p>Forma de pagamento</p>
                    <span>
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </span>
                  </div>
                </div>

                <div className="selectPayment">
                  <SelectPaymentButton icon={PixLogo} title="PIX" isactive />
                  <SelectPaymentButton
                    icon={CreditCard}
                    title="Crédito/Débito"
                  />
                  <SelectPaymentButton icon={Money} title="Dinheiro" />
                </div>
              </div>
            </div>
          </FormUserInformation>
        </div>

        <div className="orderInfos">
          <h2>Confira seu pedido</h2>
        </div>
      </CheckoutContent>
    </CheckoutContainer>
  )
}
