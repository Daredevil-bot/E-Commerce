import React from 'react'
import AdminNav from '../../../components/nav/AdminNav'
import { useEffect,useState } from 'react'
import { getProdutByCount } from '../../../functions/product'
import { removeProduct } from '../../../functions/product'
import AdminProductCard from '../../../components/cards/AdminProductCard'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

const AllProducts = () => {
    const[products,setproducts]=useState([])
   const{user}=useSelector((state)=>({...state}));
     useEffect(()=>{
       loadAllproducts()
     },[])
     const loadAllproducts=()=>{
        getProdutByCount(10)
        .then(res=>{
            setproducts(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
     };
       
     
          
   const handleRemove=(slug)=>{
       let answer=window.confirm('Delete?')
       if(answer){
           removeProduct(slug,user.token)
           .then(res=>{
                loadAllproducts();
                toast.error(`${res.data.title} is deleted`);
           })
           .catch((err)=>{
               console.log(err)
           })
       }
   }

   

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                  <AdminNav/>
                </div>
               
               <div className='col-10'> 
               <h4 >All Products </h4>
                 <div className='row'>
                   
                     {products.map((product)=>(
                         <div key={product._id} className="col-3">
                             
                             
                             <AdminProductCard product={product} handleRemove={handleRemove}/>
                         </div>
                     ))}
                 </div>

                 </div>
                
                
            </div>
        </div>
    )
                     }

export default AllProducts

