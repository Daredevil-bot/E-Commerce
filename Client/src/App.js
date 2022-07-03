
import React , {useEffect,lazy,Suspense} from "react";
import {auth} from "./firebase"
import { useDispatch } from "react-redux";
import { currentUser } from "./functions/currentUser";
import {Routes,Route} from "react-router-dom"
import { ToastContainer } from "react-toastify";
// import CompleteRegister from "./pages/auth/CompleteRegister";
// import Login from "./pages/auth/Login"
// import Register from "./pages/auth/Register"
// import Home from "./pages/Home"
// import Header from "./components/nav/Header"
// import SideDrawer from "./components/drawer/SideDrawer";
// import ForgotPass from "./pages/auth/ForgotPass";
// import UserRoutes  from "./routes/UserRoutes"
// import AdminRoutes from "./routes/AdminRoutes"; 
// import AdminRoutesCategory from "./pages/admin/category/AdminRoutesCategory";
// import Password from "./pages/user/Password";
// import AdminUpdateRoute from "./pages/admin/category/AdminUpdateRoute";
// import AdminSubCreate from "./pages/admin/sub/AdminSubCreate";
// import AdminUpdateSub from "./pages/admin/sub/AdminUpdateSub";
// import AdminCreateProduct from "./pages/admin/product/AdminCreateProduct";
// import AllProducts from "./pages/admin/product/AllProducts";
// import ProductUpdate from "./pages/admin/product/ProductUpdate";
// import Product from "./pages/Product";
// import CategoryHome from "./pages/category/CategoryHome";
// import SubHome from "./pages/sub/SubHome";
// import Shop from "./pages/Shop";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import Payment from "./pages/Payment";

const CompleteRegister =lazy(()=>import( "./pages/auth/CompleteRegister"));
const Login =lazy(()=>import("./pages/auth/Login")) 
 const Register= lazy(()=>import("./pages/auth/Register")) 
 const Home= lazy(()=>import("./pages/Home")) 
 const Header= lazy(()=>import("./components/nav/Header"))
 const SideDrawer= lazy(()=>import( "./components/drawer/SideDrawer"))
 const ForgotPass= lazy(()=>import("./pages/auth/ForgotPass")) 
const  UserRoutes=  lazy(()=>import("./routes/UserRoutes")) 
 const AdminRoutes= lazy(()=>import("./routes/AdminRoutes")) ; 
 const AdminRoutesCategory= lazy(()=>import("./pages/admin/category/AdminRoutesCategory")) ;
 const Password= lazy(()=>import("./pages/user/Password")) ;
 const AdminUpdateRoute= lazy(()=>import("./pages/admin/category/AdminUpdateRoute")) ;
 const AdminSubCreate= lazy(()=>import("./pages/admin/sub/AdminSubCreate")) ;
 const AdminUpdateSub= lazy(()=>import("./pages/admin/sub/AdminUpdateSub")) ;
 const AdminCreateProduct= lazy(()=>import("./pages/admin/product/AdminCreateProduct")) ;
 const AllProducts= lazy(()=>import("./pages/admin/product/AllProducts")) ;
 const ProductUpdate= lazy(()=>import( "./pages/admin/product/ProductUpdate"));
 const Product= lazy(()=>import("./pages/Product")) ;
 const CategoryHome= lazy(()=>import( "./pages/category/CategoryHome"));
 const SubHome= lazy(()=>import("./pages/sub/SubHome")) ;
 const Shop= lazy(()=>import("./pages/Shop")) ;
 const Cart= lazy(()=>import("./pages/Cart")) ;
 const Checkout =lazy(()=>import("./pages/Checkout")) ;
 const Payment= lazy(()=>import("./pages/Payment")) ;




const App=()=> {
  
  const dispatch =useDispatch(); //for dispatchig data to redux store or future use
  useEffect(()=>{
    const unsubscribe =auth.onAuthStateChanged(async (user)=>{
      if(user){
        const idToken=await user.getIdTokenResult();//token will be stored in redux for future use and also validation from firebae
          currentUser(idToken.token)
          .then(res=>
        dispatch({
          type : "LOGGED_IN_USER",
          payload : {
            name:res.data.name,
            email : res.data.email,                         //token sh
            token:idToken.token,
            role:res.data.role,
            _id:res.data._id
          }

        

          
        })
          )
          .catch(err=>console.log(err))
      }
    })
    
    
  },[])

  return(
    <Suspense fallback={
      <div className="col text-center p-5">
        
      </div>
    }>
    <Header/>
    <SideDrawer/>
    <ToastContainer/>
    <Routes>
    
      
      <Route  path="/" element={<Home/>}/>
      <Route  path="/login" element={<Login/>}/>
      <Route  path="/register" element={<Register/>}/>
      <Route  path="/register/complete" element={<CompleteRegister/>}/>
      <Route  path="/forgot/password" element={<ForgotPass/>}/>
      <Route  path="/user/password" element={<Password/>}/> 
      <Route path="/user/history"  element={<UserRoutes/>}/>
      <Route path="/admin/dashboard"  element={<AdminRoutes/>}/>
      <Route path="/admin/category"  element={<AdminRoutesCategory/>}/>
      <Route path="/admin/category/:slug"  element={<AdminUpdateRoute/>}/>
      <Route path="/admin/sub"  element={<AdminSubCreate/>}/>
      <Route path="/admin/sub/:slug"  element={<AdminUpdateSub/>}/>
      <Route path="/admin/product"  element={<AdminCreateProduct/>}/>
      <Route path="/admin/products" element={<AllProducts/>}/>
      <Route path="/admin/product/:slug" element={<ProductUpdate/>}/>
      <Route path="/product/:slug" element={<Product/>}/>
      <Route path="/category/:slug" element={<CategoryHome/>}/>
      <Route path="/sub/:slug" element={<SubHome/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/payment" element={<Payment/>}/>
      </Routes>
      </Suspense>
    
  );
}
    
  


export default App;
