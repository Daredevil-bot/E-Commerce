import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {SearchOutlined} from '@ant-design/icons'

const Search = () => {
    const dispatch=useDispatch()
    const{search}=useSelector((state)=>({...state}))
    const{text}=search
    let navigate=useNavigate()


    const handleChange=(e)=>{
        dispatch({
            type:"SEARCH_QUERY",
            payload:{text:e.target.value},
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        
        navigate(`/shop?${text}`)
    }


  return (
      <>
      <form onSubmit={handleSubmit}> 
       <div className="input-group rounded">
  <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" style={{margin:'5px'}} onChange={handleChange}/>
  <span ><SearchOutlined onClick={handleSubmit}/>
  </span>
</div>
</form>
   </>
  )
}

export default Search