import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getCategories } from '../../../functions/category'
import { createSub,deleteSub,getSubs } from '../../../functions/sub'
import { toast } from 'react-toastify'
import { DeleteOutlined ,EditOutlined } from '@ant-design/icons';

import AdminNav from '../../../components/nav/AdminNav'
import { Link } from 'react-router-dom'

const CreateSub = () => {
    const[name,setname]=useState('')
    const[categories,setcategories]=useState([]);
    const[keyword,setkeyword]=useState('');
    const[category,setcategory]=useState('')       //this will send the object id of parent category needed for the sub category
    const [subs,setsubs]=useState([])
    const {user}=useSelector(state=>({...state}))
    useEffect(()=>{
        listCategory()
        listsubs()
    },[])

     const listCategory=()=>getCategories()
     .then((res)=>setcategories(res.data))
     .catch(err=>console.log(err))
     const listsubs=()=>getSubs()
     .then((res)=>setsubs(res.data))
     .catch(err=>console.log(err))
     
    const handleClick=(e)=>{
        e.preventDefault()
        console.log("clicked")
        createSub({name,parent:category},user.token)
        .then((e)=>{
            
            toast.success('Sub created')
            listsubs()
        })
        .catch(err=>{
            if(err.response.status===400) toast.error(err.response.data)
            console.log(err)
        })
            
    

    }
    const handleDelete= async (slug)=>{
        if(window.confirm('Delete?')){
            deleteSub(slug,user.token)
            .then((e)=>{
                toast.error(`${e.data.name} Deleted succesfully refresh page to see changes`)
                listsubs()
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
                    {margin: '0px 0px 0px 00px'}
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
                      <div className='col' ><h3>Parent Category</h3></div>
                      <select className='form-control' style={{width:'1000px'}} placeholder='Select name of parent category' onChange={(e)=>setcategory(e.target.value)}>
                          <option>Please select</option>
                          {categories.length >0 && categories.map((c)=>(
                              <option key={c._id} value={c._id} >
                                  {c.name}
                              </option>
                          ))}

                         </select>
                         
                      
                      
               
                <button type='submit' value="submit"className='btn btn-primary' style={{margin:'20px 0px 0px 0px'}}>Save</button>
                <input type='text' value={keyword} className='form-control' onChange={handleSearch} style={{margin:'20px 0px 0px 0px',width:'1000px'}}></input>
                  </form>
                  {<div >{subs.filter(searched(keyword)).map((s)=>(
                <div className='alert alert-secondary' style={{margin:'10px 0px 0px 0px',width:'1000px'}} key={s._id} >
                    {s.name}
                    <span onClick={()=>handleDelete(s.slug)} className='btn btn-sm  float-end text-warning' >
                       <DeleteOutlined/>
                    </span>
                    <span className='btn btn-sm  float-end ' >
                       <Link to={`/admin/sub/${s.slug}`}><EditOutlined/></Link>
                    </span>

                </div>

            )

            )}
            </div> }
                 
                </div>
                
                
                
            </div>
            
        </div>
        
    )
}

export default CreateSub