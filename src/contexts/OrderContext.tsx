import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react"
import { newOrderFormData } from "../pages/Cart"
import { CoffeeToAddData, ordersReducer } from "../reducers/orders/reducer"
import {
  addProductToCartAction,
  resetProductAddingAction,
  updateProductToCartAction,
} from "../reducers/orders/actions"

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

  AddProductToCart: (product: CoffeeToAddData) => void
  UpdateProductToCart: (product: CoffeeToAddData) => void
  CreateOrder: (data: newOrderFormData) => void
}

interface OrderContextProviderProps {
  children: ReactNode
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState<Order>()

  const [ordersState, dispatch] = useReducer(ordersReducer, {
    productList: [],
    productAdding: false,
  })

  const { productList, productAdding } = ordersState

  const totalItemsPrice = productList.reduce((accumulator, currentItem) => {
    return (accumulator += currentItem.price * currentItem.quantity)
  }, 0)
  const deliveryTax = totalItemsPrice > 0 ? 3.5 : 0

  function AddProductToCart(product: CoffeeToAddData) {
    dispatch(addProductToCartAction(product))
  }

  function UpdateProductToCart(product: CoffeeToAddData) {
    dispatch(updateProductToCartAction(product))

    // setProductList((prevList) => {
    //   const productExists = prevList.find((item) => item.id === product.id)
    //   if (productExists) {
    //     const updatedList = prevList.map((item) =>
    //       item.id === product.id
    //         ? { ...item, quantity: product.quantity }
    //         : item
    //     )
    //     return updatedList
    //   } else {
    //     return [...prevList, product]
    //   }
    // })
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

    // setProductAdding(true)
    // setProductList([])
  }

  useEffect(() => {
    let timeout: number

    if (productAdding) {
      timeout = setTimeout(() => {
        dispatch(resetProductAddingAction())
      }, 300)
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
        AddProductToCart,
        UpdateProductToCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
