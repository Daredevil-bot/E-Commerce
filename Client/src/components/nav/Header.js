import React,{useState} from 'react'
import { Menu,Badge } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined,UserOutlined,UserAddOutlined,LogoutOutlined,ShoppingOutlined ,ShoppingCartOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from 'firebase/compat/app';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Search from '../forms/Search';




const { SubMenu,Item } = Menu;

const Header = () => {
  const {user,cart}=useSelector((state)=>({...state}))
    let dispatch=useDispatch();
    const navigate=useNavigate()
    const[current,setCurrent]=useState('home')
    const logout=()=>{
        firebase.auth().signOut()
        dispatch({
          type: "LOGGED_OUT",
          payload : null
            
          
        })
navigate('/login')

    }
    const handleClick=(e)=>{
        setCurrent(e.key)

    }
    
    return (
        <>
        
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
             <Item key="home" icon={<AppstoreOutlined/>}>
          <Link to="/">Home</Link>
        </Item>
        <Item key="shop" icon={<ShoppingOutlined/>}>
          <Link to="/shop">Shop</Link>
        </Item>
        <Item key="cart" icon={<ShoppingCartOutlined/>}>
          <Link to="/cart">
            <Badge count={cart.length} offset={[9,0]}> 
            Cart

            </Badge>
          </Link>
        </Item>
        {user &&(
          <SubMenu key="SubMenu" icon={<SettingOutlined />} title={user.email && user.email.split('@')[0]} style={{position:"absolute",right:"10px"}}>
        
          <Menu.ItemGroup title="Item 1">
            {user &&  user.role==="admin" &&(<Item>
              <Link to='/admin/dashboard'>Dashboard</Link>
            </Item>)}
            {user &&  user.role==="subscriber" &&(<Item>
              <Link to='/user/history'>Dashboard</Link>
            </Item>)}
            <Item  icon={<LogoutOutlined/>} onClick={logout}>Log Out</Item>
          </Menu.ItemGroup>
          
        </SubMenu>
        )}
        {!user && (
          <Item key="register" icon={<UserAddOutlined />} style={{position : "absolute",right :"15px"}}>
          <Link to="/register">Register</Link>
          </Item>
        )}
        {!user && (
          <Item key="Login" icon={<UserOutlined />} style={{position : "absolute",right :"120px"}}>
          <Link to="/login">Login</Link>
          </Item>
        )}
       
       <span style={{position:"absolute" ,right:'220px'}}> <Search/></span>
       
        
        
        
      </Menu>
      
       
      
        
        
       
    
    
    </>
    );
}

export default Header
