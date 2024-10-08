import { CurrencyDollar, MapPin, Receipt, Timer } from "@phosphor-icons/react"
import deliveryGuy from "../../assets/sucess-delivery-guy.png"

import { SuccessContainer, SuccessContent } from "./styles"
import { useContext, useEffect } from "react"
import { OrderContext } from "../../contexts/OrderContext"
import { useNavigate } from "react-router-dom"

export function Success() {
  const { order } = useContext(OrderContext)
  const navigate = useNavigate()

  function paymentMethodConvert(method: string) {
    switch (method) {
      case "pix":
        return "Pix"

      case "credit-card":
        return "Cartão de Crédito/Débito"

      case "cash":
        return "Dinheiro"

      default:
        return "Pix"
    }
  }

  useEffect(() => {
    if (order === undefined) {
      navigate("/")
    }
  }, [order])

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
                <span className="deliveryAddress">
                  Entrega em{" "}
                  <b>
                    {order?.userInfo.address}, {order?.userInfo.addressNumber}
                    {order?.userInfo.addressExtra !== ""
                      ? `, ${order?.userInfo.addressExtra}`
                      : null}
                    ,
                  </b>{" "}
                  {order?.userInfo.addressCity}, {order?.userInfo.addressState}
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
                  <b>
                    {order?.userInfo.paymentMethod
                      ? paymentMethodConvert(order.userInfo.paymentMethod)
                      : null}
                  </b>
                </span>
              </div>
              <div className="contentWrapper">
                <div className="iconTitleWrapper dark-gray">
                  <Receipt size={20} />
                </div>
                <span>
                  <ul>
                    {order?.products.map((item) => (
                      <li key={item.id}>
                        <p>
                          {`${item.quantity}`}x {item.title} R${" "}
                          {(item.price * item.quantity)
                            .toFixed(2)
                            .replace(".", ",")}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <b>Total R$ {order?.total.toFixed(2).replace(".", ",")}</b>
                </span>
              </div>
            </div>
          </div>
          <div>
            <img src={deliveryGuy} />
          </div>
        </main>
      </SuccessContent>
    </SuccessContainer>
  )
}
