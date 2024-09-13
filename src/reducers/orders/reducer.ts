import { ActionTypes } from "./actions"

export interface CoffeeToAddData {
  id: string
  title: string
  image: string
  price: number
  quantity: number
}

interface OrdersState {
  productList: CoffeeToAddData[]
  productAdding: boolean
}

export function ordersReducer(state: OrdersState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_CART:
      const productExists = state.productList.find(
        (item) => item.id === action.payload.product.id
      )

      if (productExists) {
        const updatedList = state.productList.map((item) => {
          return item.id === action.payload.product.id
            ? {
                ...item,
                quantity: item.quantity + action.payload.product.quantity,
              }
            : item
        })

        return {
          ...state,
          productList: updatedList,
          productAdding: true,
        }
      } else {
        return {
          ...state,
          productList: [...state.productList, action.payload.product],
          productAdding: true,
        }
      }

    case ActionTypes.UPDATE_PRODUCT_TO_CART:
      const productIsOnList = state.productList.find(
        (item) => item.id === action.payload.product.id
      )

      if (productIsOnList) {
        const updatedList = state.productList.map((item) =>
          item.id === action.payload.product.id
            ? {
                ...item,
                quantity: action.payload.product.quantity,
              }
            : item
        )

        return {
          ...state,
          productList: updatedList,
        }
      } else {
        return {
          ...state,
          productList: [...state.productList, action.payload.product],
        }
      }

    case ActionTypes.RESET_PRODUCT_ADDING:
      return {
        ...state,
        productAdding: action.payload,
      }

    default:
      break
  }

  return state
}
