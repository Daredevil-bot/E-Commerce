import React,{useState,useEffect} from 'react'
import  {auth} from "../../firebase"
import {toast} from "react-toastify"
import { useDispatch,useSelector } from 'react-redux'
import "react-toastify/dist/ReactToastify.css"
import {useNavigate} from "react-router-dom"

import axios from "axios"
const CompleteRegister = () => {
    
    const {user} = useSelector((state)=>({...state}))
useEffect(()=>{
    if(user && user.token ) navigate('/')
},[user])
let dispatch=useDispatch()

const createUpdate=async (authtoken)=>{
    return await axios.post("http://localhost:8000/api/create-and-update-user",{},{              //axios is sending request to middleware having url as first argument   
        headers:{
            authtoken
        }
    } )
}    




const[email,setemail]=useState('');
const[pass,setpass]=useState('')
useEffect(()=>{
setemail(window.localStorage.getItem("emailRegistration"))
},[])
const navigate =useNavigate();
const handleClick=async (e)=>{
    try{
    e.preventDefault();
   const result=await auth.signInWithEmailLink(email,window.location.href)
   if(result.user.emailVerified){
       //REMOVE EMAIL FROM LOCAL STORAGE
       window.localStorage.removeItem('emailRegistration')
       //GET USER TOKEN ID FOR USING IN REDUX STORE FOR FUTURE USE and also update password for future verification
       let user=auth.currentUser;
       await user.updatePassword(pass)
       const idToken =user.getIdTokenResult();
       createUpdate(idToken.token)
       
       .then(res=>
        
        dispatch({
            type: "LOGGED_IN_USER",
            payload :{                                //res here deines response from backend as axios made a post request
                name:res.data.name,
                email:res.data.email,
                token:idToken.token,
                role:res.data.role,
                _id:res.data._id
            }
        })
        
       )
       navigate('/')
     }
    }

    catch(error){
        console.log(error)
    }
   
}

    

    
    return (
        <>
       <div className="container p-5 " style={{margin:"0px 400px 100px"}} >
           <h4 >Complete Registration</h4>

       <div className='row'>
           <div className='col-mid-3 offset col-mid-6'>
               
      
       <form onSubmit={handleClick} >
            <input
            type='email'
            className='form-control'
            style={{width:"600px",margin:"10px 0px 0px 0px"}}
            value={email}
            disabled
            ></input>
            <input
            type='password'
            className='form-control'
            style={{width:"600px",margin:"10px 0px 0px 0px"}}
            value={pass}
            onChange={e=>{setpass(e.target.value)}}
            autoFocus
            ></input>
            <button type='submit' value='submit' className='btn btn-raised'style={{margin:"20px 0px 0px 0px"}}>Sign in</button>

        </form>
        </div>
       </div>
       
       </div>

        </>
    )
}

export default CompleteRegister;
