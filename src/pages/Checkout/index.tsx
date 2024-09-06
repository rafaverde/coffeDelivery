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
  OrderInfoBox,
  ConfirmButton,
} from "./styles"

import { SelectPaymentButton } from "../../components/SelectPaymentButton"

import { useTheme } from "styled-components"
import { ProductOrderCard } from "../../components/ProductOrderCard"
import { NavLink } from "react-router-dom"

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
          <OrderInfoBox>
            <ProductOrderCard />
            <ProductOrderCard />

            <div className="subtotals">
              <span>Total de itens</span>
              <span className="price">R$ 29,70</span>
            </div>
            <div className="subtotals">
              <span>Entrega</span>
              <span className="price">R$ 3,50</span>
            </div>
            <div className="totals">
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>

            <NavLink to={"/success"}>
              <ConfirmButton>Confirmar pedido</ConfirmButton>
            </NavLink>
          </OrderInfoBox>
        </div>
      </CheckoutContent>
    </CheckoutContainer>
  )
}
