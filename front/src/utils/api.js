// import axios from 'axios';
// import * as consts from '../config/constants';

var products=[
    {id:1,description:"MAX 13",price:1300,quantity:10},
      {id:2,description:"MAX 15",price:1500,quantity:7}
]

var idProduct=2;

export function getProducts(){
    return products.map(elem=>elem)
}

export function getProduct(id){
    for(var i=0;i<products.length;i++){
        if(products[i].id==id){
            return products[i];
        }
    }
    return {};
}

export function createProduct(product){
    product.id=++idProduct
    products.push(Object.assign({},product))
    return {message:'product created'}
}

export function deleteProduct(id){
    products=products.filter((elem)=>{return elem.id!==id})
    return {message: 'product deleted'}
}

export function updateProduct(id,product){
    products=products.filter((elem)=>{return elem.id!==id})
    product.id=id
    products.push(product)
    return {message:'product updated'}
}
// export function getCategories() {
//   return axios({
//     method: 'get',
//     url: `${consts.PATH_BASE}${consts.PATH_CATEGORIES}/?token=${consts.TOKEN}&${consts.PARAM_LOCALE}`,
//     headers: {
//       Accept: 'application/json',
//     },
//   });
// }

// export function getEvents(searchTerms) {
//   return axios({
//     method: 'get',
//     url: `${consts.PATH_BASE}${consts.PATH_EVENTS}/?token=${consts.TOKEN}&q=${searchTerms.criteria}&categories=${
//       searchTerms.category
//     }&${consts.PARAM_LOCALE}`,
//     headers: {
//       Accept: 'application/json',
//     },
//   });
// }
