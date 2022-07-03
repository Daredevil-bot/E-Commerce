import React from 'react'
import UserNav from '../../components/nav/UserNav'
import { getUserOrders } from '../../functions/user'
import { useSelector,useDispatch } from 'react-redux'
import {CheckCircleOutlined,CloseCircleOutlined} from '@ant-design/icons'
import {toast} from 'react-toastify'
import { useEffect, useState } from 'react'

const History = () => {

    const[orders,setOrders]=useState([])
    const {user}=useSelector((state)=>({ ...state }))

    useEffect(()=>{
        loadAllOrders()
    },[])

    const loadAllOrders=()=>{
        getUserOrders(user.token)
        .then((res)=>{
             console.log(JSON.stringify(res.data,null,4))
            console.log("cecking")
            setOrders(res.data)
        })
    }


    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-2'>
                  <UserNav/>
                </div>
                <div className='col'>User history page</div>
            </div>
        </div>
    )
}

export default History
