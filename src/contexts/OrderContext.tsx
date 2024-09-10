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
}

interface OrderContextType {
  productList: CoffeeToAddData[]
  handleAddProductToCart: (product: CoffeeToAddData) => void
}

interface OrderContextProviderProps {
  children: ReactNode
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [productList, setProductList] = useState<CoffeeToAddData[]>([])

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
  }

  useEffect(() => {
    console.log(productList)
  }, [productList])

  return (
    <OrderContext.Provider value={{ productList, handleAddProductToCart }}>
      {children}
    </OrderContext.Provider>
  )
}
