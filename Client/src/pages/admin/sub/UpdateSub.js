import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getCategories, getCategory,updateCategory } from '../../../functions/category'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import AdminNav from '../../../components/nav/AdminNav'

import { useNavigate } from 'react-router-dom'
import { getSubs,getSub } from '../../../functions/sub'

const UpdateSub = () => {
    const{slug}=useParams()
    const[name,setname]=useState('')
    const [categories,setcategories]=useState([])
    const[category,setcategory]=useState('')
    const [subs,setsubs]=useState([])
    const[parent,setparent]=useState('')
   const navigate=useNavigate()
    const {user}=useSelector(state=>({...state}))
    useEffect(()=>{
        // loadCategory()
        loadsub()                      //this will load all the subs 
        loadCategories()                //this will load all the categories
    },[])
    const loadCategories=()=>getCategories()
     .then((res)=>setcategories(res.data))
     .catch(err=>console.log(err))

     const loadsub=()=>getSub(slug)
     .then((res)=>{setname(res.data.name)
        })
     .catch(err=>console.log(err))
     
    const handleClick=(e)=>{
        e.preventDefault()
        console.log("clicked")
        updateCategory(slug,{name,parent:category},user.token)
        .then((e)=>{
            
            toast.success('Sub Category update')
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
                   <h3>Parent Category</h3>
                      <select className='form-control' style={{width:'1000px'}} placeholder='Select name of parent category' onChange={(e)=>setcategory(e.target.value)}>
                          <option>Please select</option>
                          {categories.length >0 && categories.map((s)=>(
                              <option key={s._id} value={s._id} selected={s._id===category} >
                                  {s.name}
                              </option>
                          ))}

                         </select>
                   
                <div className='col'  style={{margin:"20px 0px 0px 0px"}}><h3>Update Sub-Category</h3></div>
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

export default UpdateSub

