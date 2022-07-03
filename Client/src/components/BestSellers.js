import React from 'react'
import { getProducts } from '../functions/product';
import { useState,useEffect } from 'react';
import ProductCard from './cards/ProductCard';
import { getProductsCount } from '../functions/product';
import {Pagination} from'antd'

import LoadingCard from './cards/LoadingCard';
const BestSellers = () => {
    const[products,setProducts]=useState([])
    const[loading,setLoading] =useState(false)
    const[productsCount,setProductscount]=useState(0)
    const[page,setPage]=useState(1)
    useEffect(()=>{
        loadAllproducts()
    },[page])
    useEffect(()=>{
        getProductsCount().then((res)=>setProductscount(res.data));
    })
    const loadAllproducts=()=>{
        setLoading(true)
        getProducts('sold','desc',page)
        .then(res=>{
            setProducts(res.data);
            console.log(products)

        })
        .catch((err)=>{
            console.log(err)
        })
        setLoading(false)
        
    }
    return(
        <>
      
     
    <div className='container'>
        {loading ?<LoadingCard/>:<div className='row'>
            {products.map((product)=>(
                <div key={product._id} className="col-4">
                    <ProductCard product={product}/>
                </div>
            ))}
        </div>}
    </div>
    <div className='row'>
        <div className=' mt-4 md-4 text-center'>
   <Pagination current={page}
   total={Math.round(productsCount / 3) * 10}
   onChange={value=>setPage(value)} />
   </div>
   </div>
    </>
    );
      
       
    
}

export default BestSellers;
