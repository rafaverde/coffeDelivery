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
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import { useContext, useState } from "react"
import { OrderContext } from "../../contexts/OrderContext"

const newOrderFormValidationSchema = zod.object({
  zipcode: zod
    .string()
    .min(9, "Insira o CEP no formato 00000-000")
    .max(9, "Insira o CEP no formato 00000-000"),
  address: zod.string().min(1, "Informe o nome da rua."),
  addressNumber: zod.string().min(1, "Informe o número do local."),
  addressExtra: zod.string().optional(),
  addressNeighborhood: zod.string().min(1, "Informe o bairro."),
  addressCity: zod.string().min(1, "Informe a cidade."),
  addressState: zod
    .string()
    .min(2, "Informe o estado")
    .max(2, "Digite apenas a sigla do estado."),
  paymentMethod: zod.enum(["pix", "credit-card", "cash"]),
})

type newOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export interface Order {
  id: string
  userInfo: newOrderFormData
  products: {
    name: string
    quantity: number
    price: number
  }
  total: number
}

export function Checkout() {
  const theme = useTheme()
  const { productList } = useContext(OrderContext)
  const { register, handleSubmit, watch, formState } =
    useForm<newOrderFormData>({
      resolver: zodResolver(newOrderFormValidationSchema),
      defaultValues: {
        zipcode: "",
        address: "",
        addressNumber: "",
        addressExtra: "",
        addressNeighborhood: "",
        addressCity: "Natal",
        addressState: "RN",
        paymentMethod: "pix",
      },
    })

  const [order, setOrder] = useState<Order>()

  const selectedPaymentMethod = watch("paymentMethod")
  const isOrderFormDataValid = formState.isValid

  function handleCreateOrder(data: newOrderFormData) {
    setOrder({
      id: String(new Date().getTime()),
      userInfo: data,
      products: {
        name: "Tradicional",
        quantity: 9,
        price: 9.9,
      },
      total: 9.9,
    })
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
                  <select id="addressState" {...register("addressState")}>
                    <option value="default">Escolha um estado...</option>
                    <option value="RN">RN</option>
                  </select>
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
            {productList.map((product) => (
              <ProductOrderCard
                id={product.id}
                image={product.image}
                price={product.price}
                quantity={product.quantity}
                title={product.title}
                key={product.id}
              />
            ))}

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
            <ConfirmButton type="submit" disabled={!isOrderFormDataValid}>
              Confirmar pedido
            </ConfirmButton>
          </OrderInfoBox>
        </div>
      </CheckoutForm>
    </CheckoutContainer>
  )
}
