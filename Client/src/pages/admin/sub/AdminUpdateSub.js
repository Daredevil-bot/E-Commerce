import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'

import UpdateSub from '../../admin/sub/UpdateSub'
import { currentAdmin } from '../../../functions/currentUser';
import Home from '../../Home'





const AdminUpdateSub = () => {
    const {user}=useSelector((state)=> ({...state}))   //this how get the user from redux state
    const [ok,setok]=useState(false)
    useEffect(()=>{
     if(user && user.token){
         currentAdmin(user.token)
         .then((res)=>{
             console.log("current admin logged in",res)
             setok(true)
         })
         .catch(err=>{
             setok(false)
             console.log(err)
         })
     }
    })
    
    return ok? <UpdateSub/> : <h1>Not authorized to view this page</h1>
    
        
    
}
  


export default AdminUpdateSub

