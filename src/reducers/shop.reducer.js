import {
    ADD_PRODUCT_TO_WISTLIST,
    REMOVE_PRODUCT_FROM_WISTLIST,
    ADD_PRODUCT_TO_CART,
    DECREMENT_CART_ITEM_QUANTITY,
    INCREMENT_CART_ITEM_QUANTITY,
    REMOVE_PRODUCT_FROM_CART
} from '../actions';
import { phones } from "../data/phones";

const initialState = {
    products: phones,
    cart: [],
    wistlist: []
};
const shopReducer = (state = initialState, action) => {
    let updatedCart;
    let updatedWistList;
    let updatedItemIndex;
    let updatedItemIndex1;


    switch (action.type) {
        case INCREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart];

            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );


            const incrementedItem = {
                ...updatedCart[updatedItemIndex]
            };

            incrementedItem.quantity++;

            updatedCart[updatedItemIndex] = incrementedItem;


            return { ...state, cart: updatedCart };

        case DECREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const decrementedItem = {
                ...updatedCart[updatedItemIndex]
            };

            decrementedItem.quantity--;

            updatedCart[updatedItemIndex] = decrementedItem;

            return { ...state, cart: updatedCart };

        case ADD_PRODUCT_TO_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(item => item.id === action.payload.id);

            if (updatedItemIndex < 0) {
                updatedCart.push({ ...action.payload, quantity: 1 });
            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };

                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }

            return { ...state, cart: updatedCart };
        case REMOVE_PRODUCT_FROM_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            updatedCart.splice(updatedItemIndex, 1);

            return { ...state, cart: updatedCart };

        case ADD_PRODUCT_TO_WISTLIST:
            updatedWistList = [...state.wistlist];
            updatedItemIndex1 = updatedWistList.findIndex(item => item.id === action.payload.id);

            if (updatedItemIndex1 < 0) {
                updatedWistList.push({ ...action.payload, quantity: 1 });
            } else {
                const updatedItem1 = {
                    ...updatedWistList[updatedItemIndex1]
                };

                updatedItem1.quantity++;
                updatedWistList[updatedItemIndex1] = updatedItem1;
            }

            return { ...state, wistlist: updatedWistList };
        case REMOVE_PRODUCT_FROM_WISTLIST:
            updatedWistList = [...state.wistlist];
            updatedItemIndex1 = updatedWistList.findIndex(
                item => item.id === action.payload
            );

            updatedWistList.splice(updatedItemIndex1, 1);

            return { ...state, wistlist: updatedWistList };
        default:
            return state;

    }
};

export default shopReducer;
