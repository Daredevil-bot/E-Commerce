import React,{useState} from 'react'
import {Card,Tooltip} from 'antd'
import laptop from "../../images/laptop.png"
import {EyeOutlined,ShoppingCartOutlined} from  '@ant-design/icons'
import { Link } from "react-router-dom";
import _ from 'lodash'
import { useSelector,useDispatch } from 'react-redux';


const{Meta}=Card
const ProductCard = ({product}) => {
  const dispatch=useDispatch();
  const{user,cart}=useSelector((state)=>({...state}));
  const[tooltip,setTooltip]=useState("Click to add")
    const{title,description,images,slug,price}=product;
    const handleCart=()=>{
      let cart=[];
      if(typeof window!=='undefined'){
        if(localStorage.getItem('cart')){
          cart=JSON.parse(localStorage.getItem('cart'))
        }

        cart.push({
          ...product,
          count:1,
      });
      let unique=_.uniqWith(cart,_.isEqual)

      localStorage.setItem('cart',JSON.stringify(unique))
      dispatch({
        type:"ADD_TO_CART",
        payload:unique,
      })
      dispatch({
        type:"SET_VISIBLE",
        payload:true,
      })
      setTooltip('Added')
      }
    }
  return (
    <>
    
      
    <Card cover={<img src={images && images.length? images[0].url:laptop} style={{height:'350px',objectFit:"contain"}}
      
    className="p-1"/>}
    actions={[
      <Link to={`/product/${slug}`}><EyeOutlined className="text-warning"/><br/>View Product </Link>,
    <Tooltip title={tooltip}>
      <a onClick={handleCart}>
      <ShoppingCartOutlined className="text-danger" /><br/>Add to Cart
      </a>,
    </Tooltip>
    ]}
    className="mb-2">
          
        <Meta title={`${title}-Rs${price}`} description={`${description && description.substring(0,40)}...`}/>
    </Card> 
    </>
  )
}

export default ProductCard