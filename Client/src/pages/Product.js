import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct ,getRelated,productStar} from '../functions/product'
import SingleProduct from '../components/cards/SingleProduct'
import { useSelector } from 'react-redux'
import ProductCard from '../components/cards/ProductCard'
const Product = () => {
  const{user}=useSelector((state)=>({...state}))

    const[product,setProduct]=useState([])
    const[related,setRelated]=useState([])
    const[star,setStar]=useState(0)
    let params=useParams()
    useEffect(()=>{
        loadProduct()
    },[])
    // useEffect(()=>{
    //   if(product.ratings && user){
    //     let existingRatingObject=
    //     product.ratings.find((ele)=>(ele.postedBy.toString()===user._id.toString()))
    //     existingRatingObject && setStar(existingRatingObject.star); 
    //   }
    //         //to show current users star here's the code

    // })
    const loadProduct= async ()=>{
        getProduct(params.slug).then(res=>{
            setProduct(res.data)
            console.log(res.data)
             getRelated(res.data._id).then(res=>{setRelated(res.data)
            console.log(res.data)})
        })
        
    }
    const onStarClick=(newRating,name)=>{
      setStar(newRating)
      productStar(name,newRating,user.token)
      .then(res=>{
        console.log(res.data)
      })


    }
  return (
      <div className='container-fluid'>
          <div className='row pt-4'>
            <SingleProduct product={product} onStarClick={onStarClick} star={star}/>
          </div>
          <div className='row'>
            <div className='col text-center pt-5 pb-5'>
              <hr/>
              <h4>Related Products</h4>
              
              
              <hr/>
            </div>
          </div>
          <div className='container' >
            <div className='row'>
            {related.length ? (related.map((r)=>(
              <div key={r._id} className="col-4"> <ProductCard product={r}/> </div>
            ))):(<div> No Product</div>)}
          </div>
          </div>

      </div>
      
  );
}

export default Product