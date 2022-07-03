import React ,{useState}from 'react'
import { getSub } from '../../functions/sub'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/cards/ProductCard'


const SubHome = () => {
    const [sub,setSub]=useState({})
    const[products,setProducts]=useState([])
    const[loading,setLoading]=useState(false)

    let params=useParams()
    const{slug}=params
    useEffect(()=>{
        setLoading(true)
        console.log('inuse')
        getSub(slug)
        .then((res)=>{
            console.log('subs')
            setSub(res.data.sub)
            console.log(JSON.stringify(res.data),null,4)
            setProducts(res.data.products)
            setLoading(false)
        })
    },[])

  return (
    <div className='container-fluid'>
      <div className='row'>
        {loading ?(<h4 className='mt p-2 bg-light text-black rounded h1  text-center'>Loading...</h4>):(
            <h4 className='mt-4 mb-5 p-4 bg-light text-black rounded text-center  font-weight-italic'>{products.length} Products in "{sub.name}" sub category</h4>
        )}
        </div>
        <div className='row'>
          {products.map((p)=>(
            <div className='col' key={p._id}><ProductCard product={p}/> </div>
          ))}
        </div>
    </div>
  )
}

export default SubHome