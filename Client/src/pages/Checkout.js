import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getUserCart,emptyCart,saveAddress } from '../functions/user'
import {toast} from 'react-toastify'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from 'react-router-dom'



const Checkout = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch()
    const {user}=useSelector((state)=>({...state}))
    const[products,setProducts]=useState([])
    const[total,setTotal]=useState(0)
    const[address,setAddress]=useState('');
    const[addressSaved,setAddressSaved]=useState(false)

    useEffect(()=>{
        getUserCart(user.token).then((res)=>{
            console.log('user cart res',JSON.stringify(res.data,null,4))
            setProducts(res.data.products)
            setTotal(res.data.cartTotal)
        })
    },[])

    const empty= () => {
        //
        if(typeof window!=='undefined'){
            localStorage.removeItem('cart')
        }

        dispatch({
            type:'ADD_TO_CART',
            payload:[]
        });

        emptyCart(user.token).then((res)=>{
            setProducts([])
            setTotal(0)
            toast.success('Cart is empty. Continue Shopping')
            
        })
    }

    const save=()=>{

        saveAddress(user.token,address).then((res)=>{
                if(res.data.ok){
                    setAddressSaved(true)
                    toast.success('Address Saved')
                }
        })

    }
    const place=()=>{
        navigate('/payment');
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                
                <div className='col-6'>
                    <h4>Delivery Address</h4>
                    <br />
                    <br />
                    <ReactQuill theme='snow' value={address} onChange={setAddress} />
                    <button className='btn btn-success mt-2' onClick={save} >Save</button>
                    <hr />
                   
                    <br />
                    <br />
                </div>
                <div className='col-6'>
                    <h4>Order Summary</h4>
                    
                   
                    <hr />
                    <p>Products {products.length}</p>
                    <hr />
                    {products.map((p,i)=>(
                        <div key={i}>
                            <p>{p.product.title}  ({p.color}) x {p.count}={''}
                            {p.product.price*p.count}</p>
                        </div>
                    ))}
                    <hr />
                    <p>Cart total :{`Rs${total}`}</p>

                    <div className='row'>
                        <div className='col-6'>
                            <button className='btn btn-primary mt-2' onClick={place} disabled={!addressSaved || !products.length}>Place Order</button>
                        </div>
                        <div className='col-6'>
                            <button 
                            disabled={!products.length}
                            onClick={empty}
                             className='btn btn-primary'>Empty Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout