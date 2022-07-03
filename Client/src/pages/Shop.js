import React, { useState, useEffect } from 'react'
import { getProdutByCount, fetchSearchFilter } from '../functions/product'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../components/cards/ProductCard'
import { Menu, Slider, Checkbox ,Radio} from 'antd'
import { DollarOutlined, DownSquareOutlined } from '@ant-design/icons'
import { getCategories } from '../functions/category'
import { getSubs } from '../functions/sub'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [price, setPrice] = useState([0, 0])
    const [categories, setCategories] = useState([])
    const [categoriesId,setCategoriesId]=useState([])
    const [ok, setOk] = useState(false)
    const[subs,setSubs]=useState([])
    const[sub,setSub]=useState('')
    const[brands,setBrands]=useState(['Apple','Lenovo','ASUS','Dell','HP','Microsoft','Samsung'])
    const[brand,setBrand]=useState('')
    const[colors,setColors]=useState(['Black','Brown','Silver','White','Blue','Red'])
    const[color,setColor]=useState('')
    const[shipping,setShipping]=useState('')

    const { search } = useSelector((state) => ({ ...state }))


    const { text } = search
    let dispatch = useDispatch()

    useEffect(() => {
        loadProducts()
        getCategories()
            .then(res => {
                setCategories(res.data)
                console.log(res.data)
            })
            getSubs().then(res=>setSubs(res.data))
    }, [])
    //    {for search query}
    useEffect(() => {
        const delayed = setTimeout(() => {
            fetchProducts({ query: text })
            if(!text){
                loadProducts();
            }

        }, 300)
        return () => clearTimeout(delayed)
    }, [text])

    //    {default shop page}
    const loadProducts = () => {
        getProdutByCount(10).then((res) => {
            setLoading(true)

            setProducts(res.data)
            console.log(res.data)
            setLoading(false)
        })
    }
    //    {universal function for filter search }
    const fetchProducts = (arg) => {
        fetchSearchFilter(arg)
            .then(res => {
                setProducts(res.data)
            })
    }
    //    {for price filtering}
    useEffect(() => {
        fetchProducts({ price });

    }, [ok])
    const handleSlider = (value) => {
        dispatch({
            type: 'SEARCH_QUERY',
            payload: { text: '' }
        })
        setCategoriesId([])
        setSub('')
        setPrice(value)
        setBrand('')
        setShipping('')
        setTimeout(() => {
            setOk(!ok)
        }, 300)
    }
    const handleClick=(e)=>{
        dispatch({
            type: 'SEARCH_QUERY',
            payload: { text: '' }
        })
        setPrice([0,0])
        setSub('')
        setBrand('')
        setShipping('')

        let inTheState=[...categoriesId]
        let justChecked=e.target.value
        let foundInTheState=inTheState.indexOf(justChecked)


        if(foundInTheState===-1){
            inTheState.push(justChecked)
        }
        else{
            inTheState.splice(foundInTheState,1)
        }

        console.log(inTheState)
        setCategoriesId(inTheState)
        fetchProducts({category:inTheState})
    }

    const handleSubmit=(sub)=>{
        setSub(sub)
        setBrand('')
        setShipping('')

        dispatch({
            type: 'SEARCH_QUERY',
            payload: { text: '' }
        })
        setPrice([0,0])
        setCategoriesId([])
        fetchProducts({sub})

    }
    const handleBrand=(e)=>{
        setSub('')
        setShipping('')

        dispatch({
            type: 'SEARCH_QUERY',
            payload: { text: '' }
        })
        setPrice([0,0])
        setCategoriesId([])
        setBrand(e.target.value)
        fetchProducts({brand:e.target.value})
    }
    const handleColor=(e)=>{
        setSub('')
        dispatch({
            type: 'SEARCH_QUERY',
            payload: { text: '' }
        })
        setShipping('')

        setPrice([0,0])
        setCategoriesId([])
        setBrand('')
        setColor(e.target.value)
        fetchProducts({color:e.target.value})
    }

    const handleShipping=(e)=>{
        setSub('')
        dispatch({
            type: 'SEARCH_QUERY',
            payload: { text: '' }
        })
        setPrice([0,0])
        setCategoriesId([])
        setBrand('')
        setColor('')
        setShipping(e.target.value)
        fetchProducts({shipping:e.target.value})
    }

    const { SubMenu } = Menu

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-3'>
                    <h4>Search/Filter</h4>
                    <hr />
                    <Menu defaultOpenKeys={['1', '2','3','4','5','6']} mode='inline'>
                        <SubMenu key='1' title={<span className='h6'><DollarOutlined /> Price</span>}>
                            <div>
                                <Slider className='ml-4 mr-4'
                                    tipFormatter={(v) => `Rs${v}`}
                                    range
                                    value={price}
                                    onChange={handleSlider}
                                    max='150000'
                                />
                            </div>
                        </SubMenu>
                        <SubMenu key='2' title={<span className='h6'><DownSquareOutlined /> Catgories</span>}>
                            <div style={{ margin: '10px' }}>
                                {categories.map((c) => (
                                    <div key={c._id}>
                                        <Checkbox onChange={handleClick} className=' m-1 pl-4 pr-4 pb-2 badge bg-light block' value={c._id} name='category' checked={categoriesId.includes(c._id)}>
                                            {c.name}
                                        </Checkbox>

                                    </div>
                                ))}
                            </div>
                        </SubMenu>
                        <SubMenu key='3' title={<span className='h6'><DownSquareOutlined /> Sub-Catgories</span>}>
                            <div >
                                {subs.map((s) => (
                                    <div key={s._id} style={{ margin: '10px' }}>
                                        <Checkbox  onChange={()=>handleSubmit(s)} className=' m-1 pl-4 pr-4 pb-2 badge bg-light block ' value={s._id} name='category' >
                                            {s.name}
                                        </Checkbox>

                                    </div>
                                ))}
                            </div>
                        </SubMenu>
                        <SubMenu key='4' title={<span className='h6'><DownSquareOutlined /> Brands</span>}>
                            <div >
                                {brands.map((b) => (
                                    <div key={b} style={{ margin: '10px' }}>
                                        <Radio  onChange={handleBrand} className='  m-1 pl-4 pr-4 pb-2 badge bg-light block ' value={b} name='brand' checked={b===brand} >
                                            {b}
                                        </Radio>

                                    </div>
                                ))}
                            </div>
                        </SubMenu>
                        <SubMenu key='5' title={<span className='h6'><DownSquareOutlined /> Colors</span>}>
                            <div >
                                {colors.map((c) => (
                                    <div key={c} style={{ margin: '10px' }}>
                                        <Radio  onChange={handleColor} className='  m-1 pl-6 pr-4 pb-2 badge bg-light block' value={c} name='color' checked={c===color} >
                                            {c}
                                        </Radio>

                                    </div>
                                ))}
                            </div>
                        </SubMenu>
                        <SubMenu key='6' title={<span className='h6'><DownSquareOutlined /> Shipping</span>}>
                           
                               <Checkbox onChange={handleShipping} className=' m-3 pl-4 pr-4 pb-2 badge bg-light block ' value="Yes" checked={shipping==='Yes'} >
                                            Yes

                               </Checkbox>
                               <Checkbox onChange={handleShipping} className=' m-3 pl-4 pr-4 pb-2 badge bg-light  ' value="No" checked={shipping==='No'} >
                                            No

                               </Checkbox>
                            
                        </SubMenu>

                    </Menu>

                </div>
                <div className='col-9'>
                    {loading ? (<h4 className='text-danger'>Loading..</h4>) : (<h4 className='text-danger'>Products</h4>)}

                    {products.length < 1 && <p>No Products found</p>}

                    <div className='row'>
                        {products.map((p) => (
                            <div key={p._id} className='col-4 mt-5'>
                                <ProductCard product={p} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop