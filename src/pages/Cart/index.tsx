import {
  Check,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  PixLogo,
  Spinner,
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
import { useContext } from "react"
import { OrderContext } from "../../contexts/OrderContext"
import { useNavigate } from "react-router-dom"

import { useHookFormMask } from "use-mask-input"

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

export type newOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Cart() {
  const theme = useTheme()
  const navigate = useNavigate()

  const {
    productList,
    totalItemsPrice,
    deliveryTax,
    CreateOrder,
    productAdding,
  } = useContext(OrderContext)

  const { register, handleSubmit, watch, formState, reset } =
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
  const registerWithMask = useHookFormMask(register)

  const selectedPaymentMethod = watch("paymentMethod")
  const isOrderFormDataValid = formState.isValid

  function handleCreateOrder(data: newOrderFormData) {
    CreateOrder(data)
    reset()

    setTimeout(() => {
      navigate("/success")
    }, 1000)
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
                    {...registerWithMask("zipcode", "99999-999", {
                      required: true,
                    })}
                    type="text"
                    placeholder="CEP"
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
              <span className="price">
                R$ {totalItemsPrice.toFixed(2).replace(".", ",")}
              </span>
            </div>
            <div className="subtotals">
              <span>Entrega</span>
              <span className="price">
                R$ {deliveryTax.toFixed(2).replace(".", ",")}
              </span>
            </div>
            <div className="totals">
              <span>Total</span>
              <span>
                R${" "}
                {(totalItemsPrice + deliveryTax).toFixed(2).replace(".", ",")}
              </span>
            </div>
            <ConfirmButton type="submit" disabled={!isOrderFormDataValid}>
              {productAdding ? (
                <span>
                  <Spinner size={22} />
                </span>
              ) : (
                <span>
                  <Check size={22} />
                  Confirmar pedido
                </span>
              )}
            </ConfirmButton>
          </OrderInfoBox>
        </div>
      </CheckoutForm>
    </CheckoutContainer>
  )
}
