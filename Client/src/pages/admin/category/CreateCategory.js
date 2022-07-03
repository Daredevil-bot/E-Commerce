import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { createCategory,getCategories,deleteCategory } from '../../../functions/category'
import { toast } from 'react-toastify'
import { DeleteOutlined ,EditOutlined } from '@ant-design/icons';

import AdminNav from '../../../components/nav/AdminNav'
import { Link } from 'react-router-dom'

const CreateCategory = () => {
    const[name,setname]=useState('')
    const[categories,setcategories]=useState([]);
    const[keyword,setkeyword]=useState('');
   
    const {user}=useSelector(state=>({...state}))
    useEffect(()=>{
        listCategory()
    },[])

     const listCategory=()=>getCategories()
     .then((res)=>setcategories(res.data))
     .catch(err=>console.log(err))
     
    const handleClick=(e)=>{
        e.preventDefault()
        console.log("clicked")
        createCategory({name},user.token)
        .then((e)=>{
            
            toast.success('Category created')
        })
        .catch(err=>{
            if(err.response.status===400) toast.error(err.response.data)
            console.log(err)
        })
            
    

    }
    const handleDelete= async (slug)=>{
        if(window.confirm('Delete?')){
            deleteCategory(slug,user.token)
            .then((e)=>{
                toast.error(`${e.data.name} Deleted succesfully refresh page to see changes`)
            })
            .catch(err=>{
                if(err.response.status===400){
                    toast.error(err.response.data)
                }
            })
        }
    }
    const handleSearch=(e)=>{
        e.preventDefault()
        setkeyword(e.target.value.toLowerCase())
    }
     const searched=(keyword)=>(c)=> c.name.toLowerCase().includes(keyword)

     
     
    
        return (
        <div className='container-fluid' >
            <div className='row'>
            <div className='col'>
                    <AdminNav/>
                </div>
                
                <div className='col-10'  style={
                    {margin: '0px 0px 0px 0px'}
                }>
                   
                <div className='col' ><h2>Create Category</h2></div>
                  <form onSubmit={handleClick}>
                      <input type="text" 
                      className='form-control'
                      onChange={(e)=>setname(e.target.value)}
                      value={name}
                      autoFocus
                      required
                      
                      placeholder='Enter name of category'
                      style={{margin:'0px 0px 0px 0px',width:'1000px'}}>
                        
                        
                      </input>
                      <button type='submit' value="submit"className='btn btn-primary' style={{margin:'20px 0px 0px 0px'}}>Save</button>
                      <input type='text' value={keyword} className='form-control' onChange={handleSearch} style={{margin:'20px 0px 0px 0px',width:'1000px'}}></input>
                  </form>
                  <div >{categories.filter(searched(keyword)).map((c)=>(
                <div className='alert alert-secondary' style={{margin:'10px 0px 0px 0px',width:'1000px'}} key={c._id} >
                    {c.name}
                    <span onClick={()=>handleDelete(c.slug)} className='btn btn-sm  float-end text-warning' >
                       <DeleteOutlined/>
                    </span>
                    <span className='btn btn-sm  float-end ' >
                       <Link to={`/admin/category/${c.slug}`}><EditOutlined/></Link>
                    </span>

                </div>

            )

            )}
            </div>
                 
                </div>
                
                
                
            </div>
            
        </div>
        
    )
}

export default CreateCategory

