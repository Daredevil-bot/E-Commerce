import axios from 'axios'
export const createProduct=async(product,authtoken)=>{
    return  await axios.post("http://localhost:8000/api/product",product,{headers:{
        authtoken
    },
})
}
export const getProdutByCount=async(count)=>{
    
    return  await axios.get(`http://localhost:8000/api/products/${count}`)
}
export const removeProduct=async(slug,authtoken)=>{
    return  await axios.delete(`http://localhost:8000/api/product/${slug}`,{headers:{
        authtoken
    },
})
}
export const getProduct=async(slug)=>{
    
    return  await axios.get(`http://localhost:8000/api/product/${slug}`)
}
export const getProducts=async(sort,order,page)=>{
    console.log("in")
    console.log(page)
    
   return await axios.post(`http://localhost:8000/api/products`,{
       sort,
       order,
       page,
   })
}
export const getProductsCount=async()=>{
    return await axios.get(`http://localhost:8000/api/products/total`);
}
export const productStar=async(productId,star,authtoken)=>{
    return await axios.put(`http://localhost:8000/api/product/star/${productId}`,{star},{
        headers:{
            authtoken
        }
    })
}
export const getRelated=async(productId)=>{
    console.log('rel')
   return  await axios.get(`http://localhost:8000/api/product/related/${productId}`);
}
export const fetchSearchFilter=async(arg)=>{
    
   return  await axios.post(`http://localhost:8000/api/search/filters`,arg);
}