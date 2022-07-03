import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getCategory,updateCategory } from '../../../functions/category'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'

import AdminNav from '../../../components/nav/AdminNav'
import { useNavigate } from 'react-router-dom'

const UpdateCategory = () => {
    const{slug}=useParams()
    const[name,setname]=useState('')
   const navigate=useNavigate()
    const {user}=useSelector(state=>({...state}))
    useEffect(()=>{
        loadCategory()
    },[])

     const loadCategory=()=>getCategory(slug)
     .then((res)=>setname(res.data.name))
     .catch(err=>console.log(err))
     
    const handleClick=(e)=>{
        e.preventDefault()
        console.log("clicked")
        updateCategory(slug,{name},user.token)
        .then((e)=>{
            
            toast.success('Category update')
            navigate('/admin/category')
        })
        .catch(err=>{
            if(err.response.status===400) toast.error(err.response.data)
            console.log(err)
        })
            
    

    }
    // const handleDelete= async (slug)=>{
    //     if(window.confirm('Delete?')){
    //         deleteCategory(slug,user.token)
    //         .then((e)=>{
    //             toast.error(`${e.data.name} Deleted succesfully refresh page to see changes`)
    //         })
    //         .catch(err=>{
    //             if(err.response.status===400){
    //                 toast.error(err.response.data)
    //             }
    //         })
    //     }
    // }
   
     
    
        return (
        <div className='container-fluid' >
            <div className='row'>
            <div className='col'>
                    <AdminNav/>
                </div>
                <div className='col-10'  style={
                    {margin: '0px 0px 0px 00px'}
                }>
                   
                <h2>Update Category</h2>
                  <form onSubmit={handleClick}>
                      <input type="text" 
                      className='form-control'
                      
                      value={name}
                      autoFocus
                      required
                      onChange={(e)=>{setname(e.target.value)}}
                      placeholder='Enter name of category'
                      style={{margin:'20px 0px 0px 0px',width:'1000px'}}>
                        
                        
                      </input>
                      <button type='submit' value="submit"className='btn btn-primary' style={{margin:'20px 0px 0px 0px'}}>Save</button>
                  </form>
                
                 
                </div>
                
                
                
            </div>
            
        </div>
        
    )
}

export default UpdateCategory

