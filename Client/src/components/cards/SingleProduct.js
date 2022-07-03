import React,{useState} from "react";
import {Card,Tabs,Tooltip} from 'antd'
import {Link} from 'react-router-dom'
import {HeartOutlined,ShoppingCartOutlined} from '@ant-design/icons'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import laptop from "../../images/laptop.png"
import ProductsListItems from './ProductsListItems'
import StarRating from 'react-star-ratings'
import RatingModal from "../modal/RatingModal";
import { useSelector,useDispatch } from 'react-redux';
import _ from 'lodash'

const{Meta}=Card
const{TabPane}=Tabs
const SingleProduct=({product,onStarClick,star})=>{
  const dispatch=useDispatch();
  const{user,cart}=useSelector((state)=>({...state}));
  const [tooltip,setTooltip]=useState('Click to add')
    const{title,images,description,_id}=product

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
   
    return(
        <>
        
       
        <div className="container">
  <div className="row">
    <div className="col">
    {images && images.length ?(<Carousel showArrows={true} autoPlay infiniteLoop>
            {images && images.map((i)=><img src={i.url} key={i.public_id} />)}
        </Carousel>):(<Card cover={<img src={images && images.length? images[0].url:laptop} style={{objectFit:"cover"}}
      
      className="p-1"  />}></Card>)}
      <Tabs type="card">
          <TabPane key="1" tab="Description" >
              {description && description}
          </TabPane>
          <TabPane key="2" tab="More" style={{height:"50px"}}>
            Call us
          </TabPane>
      </Tabs>
    </div>

    <div className="col">
        <h1 className="bg-info p-3 ">{title}</h1>
       

    <Card
          actions={[
           <Tooltip title={tooltip}>
              <a onClick={handleCart}>
            <ShoppingCartOutlined className="text-success"/><br/>
            Add to Cart
            </a>
           </Tooltip>,
            <Link to='/'>
                <HeartOutlined className="text-info" /><br/> Add to Wishlist
            </Link>,
             <RatingModal>
             <StarRating  
                 name={_id}
                 numberOfStars={5}
                 rating={star}
                 changeRating={onStarClick
                 }
                 isSelectable={true}
                 starRatedColor="red"
                 
             />
             </RatingModal>
        ]}>
           
           <ProductsListItems product={product}/>
          </Card>
    </div>
    
  </div>

</div>
        </>
    )
}
export default SingleProduct