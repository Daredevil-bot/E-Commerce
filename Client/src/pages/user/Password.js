//this file is used to update user password and will redirected to page /user/password
import React from 'react'
import UserNav from '../../components/nav/UserNav'
import { useState } from 'react'
import { auth } from '../../firebase'
import { toast } from 'react-toastify'

const Password = () => {
    const[pass,setpass]=useState('')
    const handleclick=async (e)=>{
        e.preventDefault()
        await auth.currentUser.updatePassword(pass)
        .then(()=>{
        toast.success("Password Updated Succesfully")
        })
        .catch((err)=>{
            console.log(err)
            toast.error(err.message)
        })
}
    const passwordUpdate=()=>(
        <form onSubmit={handleclick}>
            <div className='col form-group'>
               
                <input
                type="password"
                value={pass}
                className='form-control'
                onChange={(e)=>setpass(e.target.value)}
                placeholder='Enter Password'
                style={{width:"600px",margin:"20px 0px 0px 0px"}}

                ></input>
                <button type='submit' className='btn  btn-primary' style={{margin:"20px 0px"}}>Update</button>
            </div>
        </form>

    )   
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-mid-2'>
                  <UserNav/>
                </div>
                <div className='container' style={{margin:"0px 0px 0px 400px"}}>
                    <h4 >Password Update</h4>
                    {passwordUpdate()}
                </div>
                
            </div>
        </div>
    )
}

export default Password
