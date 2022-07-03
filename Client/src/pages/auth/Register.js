 import React,{useState} from 'react'
 import  {auth} from "../../firebase"
 import {toast} from "react-toastify"
 import "react-toastify/dist/ReactToastify.css"

 const Register = () => {
const[email,setemail]=useState('');
const handleClick=async (e)=>{
    e.preventDefault();
    const config={
        url:"https://localhost:3000/register/complete",

        handleCodeInApp: true
    }
    await auth.sendSignInLinkToEmail(email,config)
    console.log('cannot reg')
    toast.success(`Email is sent to ${email} click the link given to complete registration`)

    window.localStorage.setItem('emailRegistration',email)
    console.log(email)

}

     

     
     return (
         <>
        <div className="container p-5 " style={{margin:"0px 400px 100px"}} >
            <h4 >Register</h4>

        <div className='row'>
            <div className='col-mid-3 offset col-mid-6'>
                
       
        <form onSubmit={handleClick} >
             <input
             type='email'
             className='form-control'
             style={{width:"600px",margin:"10px 0px 0px 0px"}}
             value={email}
             onChange={e=>{setemail(e.target.value)}}
             autoFocus
             ></input>
             <button type='submit' value='submit' className='btn btn-raised'style={{margin:"20px 0px 0px 0px"}}>Register</button>

         </form>
         </div>
        </div>
        
        </div>

         </>
     )
 }
 
 export default Register
 