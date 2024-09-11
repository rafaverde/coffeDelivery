import { createContext, ReactNode, useEffect, useState } from "react"
import { CoffeeToAddData } from "../components/CoffeeCard"

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

interface OrderContextType {
  productList: CoffeeToAddData[]
  productAdding: boolean

  handleAddProductToCart: (product: CoffeeToAddData) => void
  handleUpdateProductToCart: (product: CoffeeToAddData) => void
}

interface OrderContextProviderProps {
  children: ReactNode
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [productList, setProductList] = useState<CoffeeToAddData[]>([])
  const [productAdding, setProductAdding] = useState(false)

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

  useEffect(() => {
    console.log(productList)
  }, [productList])

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
        handleAddProductToCart,
        handleUpdateProductToCart,
        productAdding,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
