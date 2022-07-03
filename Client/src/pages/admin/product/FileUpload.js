import React from 'react'
import Resizer from "react-image-file-resizer";
import axios from 'axios'
import { useSelector } from 'react-redux';
import {Avatar,Badge} from 'antd';

const FileUpload = ({values,setValues}) => {
    const{user}=useSelector((state)=>({...state})) 

    const fileUploadAndResize=(e)=>{
        let files=e.target.files;
        let allUploadedFiles=values.images;

if(files){
        for(let i=0;i<files.length;i++){
            Resizer.imageFileResizer(
                files[i],
                720,
                720,
                'JPEG',
                100,
                0,
                 (uri)=>{
                   
                    axios.post(`http://localhost:8000/api/uploadimages`,{image:uri},{
                        headers:{
                            authtoken:user?user.token:"",
                        },
                    })    
                    .then(res=>{
                        console.log('IMAGE UPLOAD RESPONSE DATA',res.data)
                        allUploadedFiles.push(res.data)
                        setValues({...values,images:allUploadedFiles});
                    })
                    .catch((err)=>{
                        console.log(err)
                    })                  
                },"base64"
            );
        }
    }
    };

    const handleImageRemove=(public_id)=>{
        axios.post(`http://localhost:8000/api/removeimage`,{public_id},{
            headers:{
                authtoken:user?user.token:''
            }
        })
        .then(res=>{
            const{images}=values;
            let filteredImages=images.filter((item)=>{
                return item.public_id!=public_id;
            })
            setValues({...values,images:filteredImages})
        })
        .catch((err)=>{
            console.log(err)
        })

    }
  return (
      <>
       
    <div className='row btn btn-primary' >
        <label> Choose Files
            <input type='file'
                    multiple
                    accept='images/*'
                    hidden
                    onChange={fileUploadAndResize}
            />
        </label>
    </div>
    <div className='row'>
            {values.images && values.images.map((image)=>(
                <Badge count="X" key={image.public_id} onClick={()=>handleImageRemove(image.public_id)}  
                style={{cursor:"pointer" }}>
                    <Avatar  src={image.url} size={120}
                    shape="square"
                    className='ml-3'/>
                </Badge>
            ))}
        </div>

    </>
  )
};

export default FileUpload