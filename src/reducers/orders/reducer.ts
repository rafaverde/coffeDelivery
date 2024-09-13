import { ActionTypes } from "./actions"
import { produce } from "immer"

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

      if (!productExists) {
        return produce(state, (draft) => {
          draft.productList.push(action.payload.product)
          draft.productAdding = true
        })
      }

      const currentProductIndex = state.productList.findIndex((product) => {
        return product.id === action.payload.product.id
      })

      return produce(state, (draft) => {
        draft.productList[currentProductIndex].quantity +=
          action.payload.product.quantity
        draft.productAdding = true
      })

    case ActionTypes.UPDATE_PRODUCT_TO_CART:
      const currentProductOnListIndex = state.productList.findIndex(
        (product) => {
          return product.id === action.payload.product.id
        }
      )

      if (currentProductOnListIndex >= 0) {
        return produce(state, (draft) => {
          draft.productList[currentProductOnListIndex].quantity =
            action.payload.product.quantity
          draft.productAdding = true
        })
      }

      break

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
