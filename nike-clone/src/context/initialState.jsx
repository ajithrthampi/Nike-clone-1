import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData"

const userInfo = fetchUser()
const cartInfo = fetchCart()

export const initialState = {
    user: userInfo,
    cartShow: false,
    filterShow: false,
    shoeItems: null,
    filterValue: null,
    cartItems: cartInfo,
    showProducts: false
}