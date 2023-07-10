export const actionType = {
    SET_USER : "SET_USER",
    SET_CART_SHOW: "SET_CART_SHOW",
    FILTER_SHOW: "FILTER_SHOW",
    SET_SHOE_ITEMS: "SET_SHOE_ITEMS",
    FILTER_VALUE: "FILTER_VALUE",
    SET_CARTITEMS: "SET_CARTITEMS",
    SHOW_PRODUCTS: "SHOW_PRODUCTS"
}

const reducer = (state, action) => {
    // console.log(action);

    switch(action.type){
        case actionType.SET_USER:
            return {
                ...state,
                user : action.user,
            };

            case actionType.SET_CART_SHOW:
                return {
                    ...state,
                    cartShow : action.cartShow,
                };

                case actionType.FILTER_SHOW:
                return {
                    ...state,
                    filterShow : action.filterShow,
                };

                case actionType.SET_SHOE_ITEMS:
                    return {
                        ...state,
                        shoeItems : action.shoeItems,
                    };

                    case actionType.FILTER_VALUE:
                        return {
                            ...state,
                            filterValue : action.filterValue,
                        };

                        case actionType.SET_CARTITEMS:
                            return {
                                ...state,
                                cartItems : action.cartItems,
                            };

                            case actionType.SHOW_PRODUCTS:
                            return {
                                ...state,
                                showProducts : action.showProducts,
                            };
    

            default : 
            return state;
    }
};

export default reducer