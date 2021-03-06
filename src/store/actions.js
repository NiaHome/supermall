import {
  ADD_COUNTER, ADD_TO_CART
} from './mutation-types'

export default {
  addCart(context, payload) {
    let oldProduct = context.state.cartList.find(function (item) {
      return item.lid === payload.lid
    })

    if (oldProduct) {
      // oldProduct.count += 1
      context.commit(ADD_COUNTER, oldProduct)
    }
    else {
      payload.count =1
      // state.cartList.push(payload)
      context.commit(ADD_TO_CART, payload)
    }
  }
}
