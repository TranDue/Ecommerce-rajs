export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART'
export const INCREMENT_CART_ITEM_QUANTITY = 'INCREMENT_CART_ITEM_QUANTITY'
export const DECREMENT_CART_ITEM_QUANTITY = 'DECREMENT_CART_ITEM_QUANTITY'

export const ADD_ORDER_TO_MANAGEMENT = 'ADD_ORDER_TO_MANAGEMENT'

export const ADD_PRODUCT_TO_WISTLIST = 'ADD_PRODUCT_TO_WISTLIST'
export const REMOVE_PRODUCT_FROM_WISTLIST = 'REMOVE_PRODUCT_FROM_WISTLIST'

export const ADD_BILL_TO_ORDERMANAGEMENT = 'ADD_BILL_TO_ORDERMANAGEMENT'

export const addProductToWistList = product => {
    return {
        type: ADD_PRODUCT_TO_WISTLIST,
        payload: product
    }
}

export const removeProductToWistList = productId => {
    return {
        type: REMOVE_PRODUCT_FROM_WISTLIST,
        payload: productId
    }
}

export const addProductToCart = product => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product
    }
}

export const removeProductToCart = productId => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: productId
    }
}

export const incrementCartQuantity = productId => {
    return {
        type: INCREMENT_CART_ITEM_QUANTITY,
        payload: productId
    }
}

export const decrementCartQuantity = productId => {
    return {
        type: DECREMENT_CART_ITEM_QUANTITY,
        payload: productId
    }
}

export const ADD_BOOK_TO_FILTER = 'ADD_BOOK_TO_FILTER'
export const REMOVE_BOOK_FROM_FILTER = 'REMOVE_BOOK_FROM_FILTER'


export const addBrandToFilter = category => {
    return {
        type: ADD_BOOK_TO_FILTER,
        category
    }
}


export const removeBrandFromFilter = category => {
    return {
        type: REMOVE_BOOK_FROM_FILTER,
        category
    }
}

export const ORDER_BY_ASC = 'ORDER_BY_ASC'
export const ORDER_BY_DESC = 'ORDER_BY_DESC'
export const CLEAR_ORDER_BY_PRICE = 'CLEAR_ORDER_BY_PRICE'

export const orderByAsc = () => {
    return {
        type: ORDER_BY_ASC
    }
}

export const orderByDesc = () => {
    return {
        type: ORDER_BY_DESC
    }
}

export const clearOrderBy = () => {
    return {
        type: CLEAR_ORDER_BY_PRICE
    }
}


export const PREV_PAGE = 'PREV_PAGE'
export const NEXT_PAGE = 'NEXT_PAGE'
export const GO_PAGE = 'GO_PAGE'
export const COUNT_ITEM = 'COUNT_ITEM'


// pagination
export const nextPage = () => {
    return {
        type: NEXT_PAGE
    }
}

export const prevPage = () => {
    return {
        type: PREV_PAGE
    }
}

export const goPage = (n) => {
    return {
        type: GO_PAGE,
        currentPage: n
    }
}

export const countItem = (n) => {
    return {
        type: COUNT_ITEM,
        totalItemsCount: n
    }
}


export const addBillToOrderManagement = bill => {
    return {
        type: ADD_BILL_TO_ORDERMANAGEMENT,
        payload: bill
    }
}
