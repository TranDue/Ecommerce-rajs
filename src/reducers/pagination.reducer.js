import { COUNT_ITEM, GO_PAGE, NEXT_PAGE, PREV_PAGE } from "../actions";

const initialState = {
    perPage: 18,
    currentPage: 1,
    pagesToShow: 3,
    totalItemsCount: 0
};


export const paginationReducer = (state = initialState, action) => {
    // pagination list product
    switch (action.type) {
        case PREV_PAGE:
            if (state.currentPage === 1) return state;

            return {
                ...state,
                currentPage: state.currentPage - 1
            };
        case NEXT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1
            };
        case GO_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case COUNT_ITEM:
            return {
                ...state,
                totalItemsCount: action.totalItemsCount
            };
        default:
            return state;
    }
};
