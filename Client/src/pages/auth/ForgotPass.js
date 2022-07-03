import React,{useState} from 'react'
import  {auth} from "../../firebase"
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {  useNavigate } from 'react-router-dom'


const ForgotPass = () => {
    const navigate=useNavigate()
    const handleClick= async  (e)=>{
        const config={
            url:"http://localhost:3000/login",//this is the place where we will be redirected after reseting password through link
            handleCodeInApp:true
        }
        e.preventDefault()
       await  auth.sendPasswordResetEmail(email,config)//two arguments one for email authentication another for redirecting page
       toast.success(`Password reset link sent to email ${email}`)
       

       .catch((err)=>{
            toast.error(err.message)
            console.log(err)
       })


    }
    const[email,setemail]=useState('')
    return (
        <>
         <div className="container p-5 " style={{margin:"0px 400px 100px"}} >
           <h4 >Login</h4>

       <div className='row'>
           <div className='col-mid-3 offset col-mid-6'></div>
         <form onSubmit={handleClick} >
            <input
            type='email'
            className='form-control'
            style={{width:"600px",margin:"20px 0px 0px 0px"}}
            value={email}
            onChange={e=>{setemail(e.target.value)}}    
            placeholder='Your email'
            autoFocus
            ></input>
            <button className='btn btn-raised' style={{margin:"20px 0px 0px 0px"}}>Log in</button>

            </form>
            </div>
            </div>
        </>
    )
}

export default ForgotPass
