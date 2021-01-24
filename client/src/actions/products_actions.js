import axios from 'axios';
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
} from './types';

import { PRODUCT_SERVER } from '../components/utils/misc';



export function getProductDetail(id){

    const request = axios.get(`${PRODUCT_SERVER}/articles_by_id?id=${id}&type=single`)
    .then(response=>{
        return response.data[0]
    });

    return {
        type: GET_PRODUCT_DETAIL,
        payload: request
    }

}


export function clearProductDetail(){
    return {
        type: CLEAR_PRODUCT_DETAIL,
        payload:''
    }
}


export function getProductsBySell(){
    //?sortBy=sold&order=desc&limit=100
    const request = axios.get(`${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=4`)
                    .then(response => response.data);

    return {
        type: GET_PRODUCTS_BY_SELL,
        payload: request
    }

}

export function getProductsByArrival(){
    const request = axios.get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
    .then(response => response.data);

    return {
        type: GET_PRODUCTS_BY_ARRIVAL,
        payload: request
    }
}

export function getProductsToShop(skip, limit,filters =[], previousState = []){
    const data = {
        limit,
        skip,
        filters
    }

    const request = axios.post(`${PRODUCT_SERVER}/shop`,data)
                .then(response => {
                    let newState = [
                        ...previousState,
                        ...response.data.articles
                    ];
                    return {
                        size: response.data.size,
                        articles: newState
                    }
                });

    return {
        type: GET_PRODUCTS_TO_SHOP,
        payload: request
    }

}

export function addProduct(datatoSubmit){

    const request = axios.post(`${PRODUCT_SERVER}/articles`,datatoSubmit)
                    .then(response => response.data);

    return {
        type: ADD_PRODUCT,
        payload: request
    }
}

export function clearProduct(){
    return {
        type: CLEAR_PRODUCT,
        payload: ''
    }
}




////////////////////////////////////
//////        CATEGORIES
////////////////////////////////////


export function getPublishers(){

    const request = axios.get(`${PRODUCT_SERVER}/publishers`)
                .then(response => response.data );

    return {
        type: GET_PUBLISHERS,
        payload: request
    }

}

export function addPublisher(dataToSubmit, existingPublishers){
    const request = axios.post(`${PRODUCT_SERVER}/publisher`,dataToSubmit)
    .then(response=>{
        let publishers = [
            ...existingPublishers,
            response.data.publisher
        ];
        return {
            success: response.data.success,
            publishers
        }
    });
    return {
        type: ADD_PUBLISHER,
        payload: request
    }
}


export function addAuthor(dataToSubmit, existingAuthors){
    const request = axios.post(`${PRODUCT_SERVER}/author`,dataToSubmit)
    .then(response=>{
        let authors = [
            ...existingAuthors,
            response.data.author
        ];
        return {
            success: response.data.success,
            authors
        }
    });
    return {
        type: ADD_AUTHOR,
        payload: request
    }
}



export function getAuthors(){
    const request = axios.get(`${PRODUCT_SERVER}/authors`)
    .then(response => response.data );

    return {
        type: GET_AUTHORS,
        payload: request
    }
}