import { CoffeeToAddData } from "./reducer"

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
  UPDATE_PRODUCT_TO_CART = "UPDATE_PRODUCT_TO_CART",
  RESET_PRODUCT_ADDING = "RESET_PRODUCT_ADDING",
  RESET_PRODUCTS_ON_CART = "RESET_PRODUCTS_ON_CART",
}

export function addProductToCartAction(product: CoffeeToAddData) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: {
      product,
    },
  }
}

export function updateProductToCartAction(product: CoffeeToAddData) {
  return {
    type: ActionTypes.UPDATE_PRODUCT_TO_CART,
    payload: {
      product,
    },
  }
}

export function resetProductAddingAction() {
  return {
    type: ActionTypes.RESET_PRODUCT_ADDING,
    payload: false,
  }
}
