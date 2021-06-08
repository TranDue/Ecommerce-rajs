import {
    ADD_PRODUCT_TO_WISTLIST,
    REMOVE_PRODUCT_FROM_WISTLIST,
    ADD_PRODUCT_TO_CART,
    DECREMENT_CART_ITEM_QUANTITY,
    INCREMENT_CART_ITEM_QUANTITY,
    REMOVE_PRODUCT_FROM_CART,
    ADD_BILL_TO_ORDERMANAGEMENT
} from '../actions';
import { bill } from '../data/bill';
import { phones } from "../data/phones";

const initialState = {
    products: phones,
    bills: bill,

    cart: [],
    wistlist: [],
    orderbill: []
};
const shopReducer = (state = initialState, action) => {
    // shopping cart
    let updatedCart
    let updatedItemIndex

    // wistlist
    let updatedWistList
    let updatedItemIndex1

    // order management
    let updateOrderBill
    let updateItemBill

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

        // add item to cart
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

        // delete item from cart
        case REMOVE_PRODUCT_FROM_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            updatedCart.splice(updatedItemIndex, 1);

            return { ...state, cart: updatedCart };

        // add item to wistlist
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
        // delete item from wistlist
        case REMOVE_PRODUCT_FROM_WISTLIST:
            updatedWistList = [...state.wistlist];
            updatedItemIndex1 = updatedWistList.findIndex(
                item => item.id === action.payload
            );

            updatedWistList.splice(updatedItemIndex1, 1);

            return { ...state, wistlist: updatedWistList };

        // add bill to order management
        case ADD_BILL_TO_ORDERMANAGEMENT:
            updateOrderBill = [...state.orderbill];
            updateItemBill = updateOrderBill.findIndex(item => item.id === action.payload.id);

            if (updateItemBill < 0) {
                updateOrderBill.push({ ...action.payload, quantity: 1 });
            } else {
                const updatedItem2 = {
                    ...updateOrderBill[updateItemBill]
                };

                updatedItem2.quantity++;
                updateOrderBill[updateItemBill] = updatedItem2;
            }
            return { ...state, orderbill: updateOrderBill };

        default:
            return state;

    }
};

export default shopReducer;
