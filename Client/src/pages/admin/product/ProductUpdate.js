import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import FileUpload from './FileUpload'
import { toast } from 'react-toastify'
import { getCategories,getCategorySubs } from '../../../functions/category'
import { createProduct } from '../../../functions/product'
import AdminNav from '../../../components/nav/AdminNav'
import { getProduct } from '../../../functions/product'

const initialstate={
    title:'',
    description:'',
    price:'',
    
    category:'',
    subs:[],
    shipping:'',
    quantity:'',
    images:[],
    colors:['Black','Brown','Silver','White','Blue','Red'],
    color:'',
    brands:['Apple','Lenovo','ASUS','Dell','HP','Microsoft'],
    brand:'',

}

const ProductUpdate=()=>{

   

    let params=useParams()
     const [values,setValues]=useState(initialstate)
     const [subsoption,setsubsoption]=useState([])
    const [categories,setCategories]=useState([])
    
    const {user}=useSelector(state=>({...state})) 
    
    useEffect(()=>{
        loadProduct();
        listCategory();
    },[])
    const loadProduct=()=>{
        getProduct(params.slug)
        .then((p)=>{
            
            setValues({...values,...p.data});
        })
    }
    const listCategory=()=>{
    getCategories(params.slug)
     .then((res)=>{
       console.log(res.data)
        setCategories(res.data)
     })
    }
     
    const handleClick=(e)=>{
        e.preventDefault()
        console.log(values)
        createProduct(values,user.token)
        .then(res=>{    
            console.log(res)
            window.alert(`'${res.data.title}' is created`)
            window.location.reload()
        }).catch(e=>{
            console.log(e)
            toast.error(e.message)
        })

    }

    //destructure all the states so that we can use easily
    const {title,description,price,category,subs,shipping,quantity,images,colors,brands,color,brand}=values
    const handleChange=(e)=>{
        e.preventDefault()
        
        setValues({...values,[e.target.name]:e.target.value})
                                                               //one onechange function for every input 
    }
    const handleSubsChange=(e)=>{
        e.preventDefault()
        
     
        getCategorySubs(e.target.value).then((res)=>{
             console.log(res)
            setsubsoption(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <AdminNav/>
                </div>
                <div className='col-10'><h3>  Product Update </h3>
                <div ><FileUpload values={values} setValues={setValues}/> </div>
                <form onSubmit={handleClick} style={{margin:'20px 0px 0px 0px'}}>  
                    <label>Title</label>
                     <input className='form-control' type='text' onChange={handleChange} name='title' value={title} style={{margin:'10px 0px 0px 0px'}}/>
                     <label>Description</label>
                     <input className='form-control' type='text' onChange={handleChange} name='description' value={description} style={{margin:'10px 0px 0px 0px'}}/>
                     <label>Price</label>
                     <input className='form-control' type='number' onChange={handleChange} name='price' value={price} style={{margin:'10px 0px 0px 0px'}}/>
                     <label>Shipping</label>
                     <select value={shipping} name='shipping' className='form-control' onChange={handleChange}  style={{margin:'10px 0px 0px 0px'}}>
                         
                         <option value='No'>No</option>
                         <option value='Yes'>Yes</option>
                          </select>
                    <label>Quantity</label>
                     <input className='form-control' type='number' onChange={handleChange} name='quantity' value={quantity} style={{margin:'10px 0px 0px 0px'}}/>
                     <label>Color</label>
                     <select value={color} name='color' className='form-control' onChange={handleChange} style={{margin:'10px 0px 0px 0px'}} >
                         
                         
                         {colors.map(c=><option key={c} value={c}>{c}</option>)}
                         </select>
                         <label>Brand</label>
                     <select value={brand} name='brand' className='form-control' onChange={handleChange} style={{margin:'10px 0px 0px 0px'}} >
                         
                         
                         {brands.map(b=><option key={b} value={b}>{b}</option>)}
                         </select>
                         <div >Category</div>
                      <select value={category} name= "category" className='form-control' style={{margin:'10px 0px 0px 0px'}}  onChange={handleSubsChange}>
                          
                          {categories.length >0 && categories.map((c)=>(
                              <option key={c._id} value={c._id} >
                                  {c.name}
                              </option>
                          ))}

                         </select >
                         <div>
                             <label>Sub Categories</label>
                             <select name= "category" className='form-control' style={{margin:'10px 0px 0px 0px'}} onChange={handleChange}>
                             <option>Please select</option>
                             {subsoption.length>0 && subsoption.map((c)=>(
                                <option key={c._id} value={c._id}>
                                    {c.name}
                                </option>
                             ))}
                                 
                             </select>
                         </div>
                      <button type='submit' value="submit"className='btn btn-info' style={{margin:'10px 0px 0px 0px'}}>Save</button>
                      
                 </form>
              
               
                
                </div>
            </div>
        </div>
    )

}
export default ProductUpdate