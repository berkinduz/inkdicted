import {
    GET_PRODUCTS_BY_SELL,
    GET_PRODUCTS_BY_ARRIVAL,
    GET_PUBLISHERS,
    ADD_PUBLISHER,
    GET_AUTHORS,
    ADD_AUTHOR,
    GET_PRODUCTS_TO_SHOP,
    ADD_PRODUCT,
    CLEAR_PRODUCT,
    GET_PRODUCT_DETAIL,
    CLEAR_PRODUCT_DETAIL
} from '../actions/types';
 

export default function(state={},action){
    switch(action.type){
        case GET_PRODUCTS_BY_SELL:
            return {...state, bySell: action.payload }
        case GET_PRODUCTS_BY_ARRIVAL:
            return {...state, byArrival:  action.payload }
        case GET_PUBLISHERS:
            return {...state, publishers: action.payload }
        case ADD_PUBLISHER:
            return {
                ...state, 
                addPublisher: action.payload.success , 
                publishers:action.payload.publishers 
            }
        case GET_AUTHORS:
            return {...state, authors: action.payload }
        case ADD_AUTHOR:
            return {
                ...state, 
                addAuthor: action.payload.success , 
                authors:action.payload.authors 
            }
        case GET_PRODUCTS_TO_SHOP:
            return {
                ...state,
                toShop: action.payload.articles,
                toShopSize: action.payload.size
            }
        case ADD_PRODUCT:
            return { ...state,addProduct: action.payload }
        case CLEAR_PRODUCT:
            return { ...state,addProduct: action.payload }
        case GET_PRODUCT_DETAIL:
            return {...state, prodDetail: action.payload }
        case CLEAR_PRODUCT_DETAIL:
            return {...state, prodDetail: action.payload }
        default:
            return state;
    }
}