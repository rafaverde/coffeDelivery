import { createContext, ReactNode, useEffect, useState } from "react"
import { CoffeeToAddData } from "../components/CoffeeCard"
import { newOrderFormData } from "../pages/Cart"

export interface CoffeeProps {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
  isProductAdded?: boolean
}

export interface Order {
  id: string
  userInfo: newOrderFormData
  products: CoffeeToAddData[]
  total: number
}

interface OrderContextType {
  productList: CoffeeToAddData[]
  productAdding: boolean
  totalItemsPrice: number
  order?: Order
  deliveryTax: number

  handleAddProductToCart: (product: CoffeeToAddData) => void
  handleUpdateProductToCart: (product: CoffeeToAddData) => void
  CreateOrder: (data: newOrderFormData) => void
}

interface OrderContextProviderProps {
  children: ReactNode
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [productList, setProductList] = useState<CoffeeToAddData[]>([])
  const [productAdding, setProductAdding] = useState(false)

  const [order, setOrder] = useState<Order>()
  const totalItemsPrice = productList.reduce((accumulator, currentItem) => {
    return (accumulator += currentItem.price * currentItem.quantity)
  }, 0)
  const deliveryTax = totalItemsPrice > 0 ? 3.5 : 0

  function handleAddProductToCart(product: CoffeeToAddData) {
    setProductList((prevList) => {
      const productExists = prevList.find((item) => item.id === product.id)

      if (productExists) {
        const updatedList = prevList.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
        return updatedList
      } else {
        return [...prevList, product]
      }
    })

    setProductAdding(true)
  }

  function handleUpdateProductToCart(product: CoffeeToAddData) {
    setProductList((prevList) => {
      const productExists = prevList.find((item) => item.id === product.id)

      if (productExists) {
        const updatedList = prevList.map((item) =>
          item.id === product.id
            ? { ...item, quantity: product.quantity }
            : item
        )
        return updatedList
      } else {
        return [...prevList, product]
      }
    })
  }

  function CreateOrder(data: newOrderFormData) {
    if (productList.length === 0) {
      return alert(
        "É necessário acrescentar pelo menos um produto ao carrinho."
      )
    }

    setOrder({
      id: String(new Date().getTime()),
      userInfo: data,
      products: productList,
      total: totalItemsPrice + deliveryTax,
    })

    setProductAdding(true)
    console.log(order)
  }

  useEffect(() => {
    let timeout: number

    if (productAdding) {
      timeout = setTimeout(() => {
        setProductAdding(false)
      }, 500)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [productAdding])

  return (
    <OrderContext.Provider
      value={{
        productList,
        productAdding,
        totalItemsPrice,
        deliveryTax,
        order,
        CreateOrder,
        handleAddProductToCart,
        handleUpdateProductToCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
