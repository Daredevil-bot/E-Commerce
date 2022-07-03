import React from "react";
import {Card} from 'antd'
import laptop from "../../images/laptop.png"
import {EditOutlined,DeleteOutlined} from  '@ant-design/icons'
import { Link } from "react-router-dom";
const{Meta}=Card;


const AdminProductCard = ({product,handleRemove}) => {
    const{title,description,images,slug}=product;
  return (
      <>
      <div>
          {console.log("Hey")}
      </div>
    <Card cover={<img src={images && images.length? images[0].url:laptop} style={{height:'350px',objectFit:"contain"}}
      
    className="p-1"/>}
    actions={[
      <Link to={`/admin/product/${slug}`}><EditOutlined className="text-warning"/></Link>,
    
      <DeleteOutlined className="text-danger" onClick={()=>{
        console.log("clicked")
        handleRemove(slug)
      }}/>,
    ]}
    className="mb-2">
          
        <Meta title={title} description={`${description && description.substring(0,40)}...`}/>
    </Card>
    </>
  )
}

export default AdminProductCard