import { ADD_CART, ADD_ITEM, DEL_ITEM, LOGIN_DATA, USER_DATA } from "./Type";

export const setUser = (data) => {
    return {
        type: USER_DATA,
        payload: data
    }
}

export const loginData= (data) => {
    return {
        type: LOGIN_DATA,
        payload: data
    }
}

// add cart to items

export const addCart = (Product) => {
    return {
        type: ADD_ITEM,
        payload: Product
    }
}

//del Cart to items

export const delCart = (Product) => {
    return {
        type: DEL_ITEM,
        payload: Product
    }
}

//add item to cart

export const addItem = (Product) => {
    return {
        type: ADD_CART,
        payload: Product
    }
}