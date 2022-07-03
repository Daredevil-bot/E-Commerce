import React,{useState} from "react";
import {Modal,Button} from 'antd'
import {toast} from "react-toastify"
import {useSelector} from 'react-redux'
import {StarOutlined} from '@ant-design/icons'
import {useNavigate,useParams} from 'react-router-dom'


const RatingModal=({children})=>{
    const{user}=useSelector((state)=>({...state}))
    const[modalVisible,setModalVisible]=useState(false)
    let history=useNavigate()
    let params=useParams()
    const handleModal=()=>{
        if(user && user.token ){
            setModalVisible(true);
        }
        else{
            history ({
                pathname:'/login',
                state:{from:`product/${params.slug}`}
            });
        }
    };
    return (
       
        <>
        <div onClick={handleModal} >
            <StarOutlined className="test-danger" /><br/>{" "}
            {user?"Leave Rating":"Login to leave rating"}


        </div>
        <Modal
        title="Leave a rating"
        centered
        visible={modalVisible}
        onOk={()=>{
            setModalVisible(false)
            toast.success("Thanks for your review ")

        }}
        onCancel={()=>setModalVisible(false)}
        

        
        >
            {children}

        </Modal>
        </>
    )
}
export default RatingModal