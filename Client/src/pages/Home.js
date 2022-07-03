import React from 'react'
import { getProducts, getProductsCount, getProdutByCount } from '../functions/product';
import { useState,useEffect } from 'react';

import Jumbotron from '../components/cards/Jumbotron';
import SubList from '../components/sub/SubList';
import NewArrivals from '../components/NewArrivals';
import BestSellers from '../components/BestSellers';
import CategoryList from '../components/category/CategoryList';
const Home = () => {
    const[products,setProducts]=useState([])
    const[loading,setLoading] =useState(false)
    
    useEffect(()=>{
        loadAllproducts()
    },[])
    const loadAllproducts=()=>{
        setLoading(true)
        getProducts('createdAt','desc',3)
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
  
     <div className="mt-4 p-5 bg-light text-danger rounded h1 font-weight-bold text-center">
        

        <Jumbotron text={['Latest Products','New Arrivals','Best Sellers']}/>
    </div> 
     <h3 className='mt-4 mb-5 p-5 bg-light text-black rounded text-center  font-weight-italic'> New Arrivals</h3> 
    <NewArrivals/>
    <h3 className='mt-4 mb-5 p-5 bg-light text-black rounded text-center  font-weight-italic'> Best Sellers</h3> 
    <BestSellers/>
    <h3 className='mt-4 mb-4 p-4 bg-light text-black rounded text-center  font-weight-italic'> Categories</h3> 
    <CategoryList/>
    <h3 className='mt-4 mb-4 p-4 bg-light text-black rounded text-center  font-weight-italic'> Sub-Categories</h3> 
    <SubList/>

    </>
    );
      
       
    
}

export default Home;
