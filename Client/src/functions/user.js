import axios from 'axios'

export const userCart=async(cart,authtoken)=>{
    return axios.post('http://localhost:8000/api/user/cart',{cart},{
        headers:{
            authtoken,
        }
    })
}
export const getUserCart=async(authtoken)=>{
    return axios.get('http://localhost:8000/api/user/cart',{
        headers:{
            authtoken,
        }
    })
}
export const emptyCart=async(authtoken)=>{
    return axios.delete('http://localhost:8000/api/user/cart',{
        headers:{
            authtoken,
        }
    })
}
export const saveAddress=async(authtoken,address)=>{
    return axios.post('http://localhost:8000/api/user/address',{address},{
        headers:{
            authtoken,
        }
    })
}

export const createOrder=async(stripeResponse,authtoken)=>{
    return axios.post('http://localhost:8000/api/user/order',{stripeResponse},{
        headers:{
            authtoken,
        }
    })
}

export const getUserOrders=async(authtoken)=>{
    return await axios.get('http://localhost:8000/api/user/orders',{
        headers:{
            authtoken,
        }
    })
}