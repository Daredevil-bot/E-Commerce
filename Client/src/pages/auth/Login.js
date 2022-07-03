import React,{useState,useEffect} from 'react'
import  {auth, googleAuthProvider} from "../../firebase"
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Button } from 'antd'
import { MailOutlined ,GoogleOutlined } from '@ant-design/icons';
import { useDispatch,useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
const Register = () => {
    let navigate=useNavigate()
    const roleBasedRedirect=(res)=>{
        let intended=navigate.location.state
        if(intended){
            navigate(intended.from)
        }
        else{
            if(res.data.role==="admin"){
                navigate('/admin/dashboard')
            }
            else{
                navigate('/user/history')
            }
        }
       
    }
const {user} = useSelector((state)=>({...state}))
useEffect(()=>{
    if(user && user.token ){ navigate('/')}
},[user,navigate])

const createUpdate=async (authtoken)=>{
    return await axios.post("http://localhost:8000/api/create-and-update-user",{},{              //axios is sending request to middleware having url as first argument   
        headers:{
            authtoken
        }
    } )
}    
const[email,setemail]=useState('');
const [pass,setpass]=useState('')
let dispatch=useDispatch();
const googlelogin=async (e)=>{
    auth.signInWithPopup(googleAuthProvider)
    .then(async (result)=>{
        const{user}=result
        const idToken=await user.getIdTokenResult()
        createUpdate(idToken.token)
        .then((res)=>{
        dispatch({
            type: "LOGGED_IN_USER",
            payload :{                                //res here deines response from backend as axios made a post request
                name: res.data.name,
                email:res.data.email,
                token:idToken.token,
                role:res.data.role,
                _id:res.data._id
            }
        });
        
        
        navigate('/')
        roleBasedRedirect(res)
    })
        
    })
    .catch((err)=>{
        console.log(err)
        toast.error(err.message);

    })

}
const handleClick=async (e)=>{
   
 try{
    const result=await auth.signInWithEmailAndPassword(email,pass)
    const{user} =result;
    const idToken=await user.getIdTokenResult();
   //sending token to middleware to validate
   //


   createUpdate(idToken.token)
   .then((res)=>{
    dispatch({
        type: "LOGGED_IN_USER",
        payload :{                                //res here deines response from backend as axios made a post request
            name: res.data.name,
            email:res.data.email,
            token:idToken.token,
            role:res.data.role,
            _id:res.data._id
        }
    });
    roleBasedRedirect(res)
})
  .catch(err=>console.log(err))
 }
 catch(error){
     console.log(error)
     toast.error(error.message)

 }
}

    

    
    return (
        <>
       <div className="container p-5 " style={{margin:"0px 400px 100px"}} >
           <h4 >Login</h4>

       <div className='row'>
           <div className='col-mid-3 offset col-mid-6'>
               
      
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
             <input
            type='password'
            className='form-control'
            style={{width:"600px",margin:"25px 0px 0px 0px"}}
            value={pass}
            onChange={e=>{setpass(e.target.value)}}
            placeholder='Your password'
            ></input>
            <Button
            type="primary"
            className='mb-3'
            style={{width : "600px",margin : "30px 0px 0px 0px",display:"block"}}
            shape='round'
            size="large"
            width="600px"
            block
            icon={<MailOutlined/>}
            disabled={!email || !pass}
            onClick={handleClick}

            >
                Log in with Email/Password
            </Button>
            <Button
            type="danger"
            className='mb-3'
            style={{width : "600px",margin : "25px 0px 0px 0px"}}
            shape='round'
            size="large"
            width="600px"
            block
            icon={<GoogleOutlined/>}
            
            onClick={googlelogin}
            >
                Log in with Google
            </Button >
            <Button type="link" style={{display:"block" ,margin:"0px 0px 0px 450px"}}  >
                <Link to="/forgot/password"></Link>Forgot password? </Button>

        </form>
        </div>
       </div>
       
       </div>

        </>
    )

}
export default Register
