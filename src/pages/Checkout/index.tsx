import {
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  PixLogo,
} from "@phosphor-icons/react"

import {
  CheckoutContainer,
  CheckoutForm,
  UserInformation,
  OrderInfoBox,
  ConfirmButton,
} from "./styles"

import { SelectPaymentButton } from "../../components/SelectPaymentButton"

import { useTheme } from "styled-components"
import { ProductOrderCard } from "../../components/ProductOrderCard"

import { useForm } from "react-hook-form"

export function Checkout() {
  const theme = useTheme()
  const { register, handleSubmit, watch } = useForm()

  const selectedPaymentMethod = watch("paymentMethod")

  function handleCreateOrder(data: any) {
    console.log(data)
  }

  return (
    <CheckoutContainer>
      <CheckoutForm onSubmit={handleSubmit(handleCreateOrder)}>
        <div className="userInfos">
          <h2>Insira suas informações</h2>
          <UserInformation>
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
                    {...register("zipcode")}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="address"
                    placeholder="Rua"
                    {...register("address")}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="addressNumber"
                    placeholder="Número"
                    {...register("addressNumber")}
                  />

                  <input
                    type="text"
                    id="addressExtra"
                    placeholder="Complemento"
                    {...register("addressExtra")}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="addressNeighborhood"
                    placeholder="Bairro"
                    {...register("addressNeighborhood")}
                  />
                  <input
                    type="text"
                    id="addressCity"
                    placeholder="Cidade"
                    {...register("addressCity")}
                  />
                  <input
                    type="text"
                    id="addressState"
                    placeholder="Estado"
                    {...register("addressCity")}
                  />
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
                  <SelectPaymentButton
                    icon={PixLogo}
                    title="Pix"
                    isactive={selectedPaymentMethod === "pix"}
                    value="pix"
                    {...register("paymentMethod")}
                  />
                  <SelectPaymentButton
                    icon={CreditCard}
                    title="Crédito/Débito"
                    isactive={selectedPaymentMethod === "credit-card"}
                    value="credit-card"
                    {...register("paymentMethod")}
                  />
                  <SelectPaymentButton
                    icon={Money}
                    title="Dinheiro"
                    isactive={selectedPaymentMethod === "cash"}
                    value="cash"
                    {...register("paymentMethod")}
                  />
                </div>
              </div>
            </div>
          </UserInformation>
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

            <ConfirmButton type="submit">Confirmar pedido</ConfirmButton>
          </OrderInfoBox>
        </div>
      </CheckoutForm>
    </CheckoutContainer>
  )
}
