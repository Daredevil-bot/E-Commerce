import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'

import AdminDashboard from '../pages/admin/AdminDashboard';
import { currentAdmin } from '../functions/currentUser';




const AdminRoutes = () => {
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
    
    return ok? <AdminDashboard/> : <h1>Loading</h1>

    
        
    
}
  


export default AdminRoutes

