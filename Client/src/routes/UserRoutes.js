import React  from 'react'
import { useSelector } from 'react-redux'

import History from '../pages/user/History';




const UserRoutes = () => {
    const {user}=useSelector((state)=> ({...state}))   //this how get the user from redux state
    
    return user && user.token? <History/> : <h1>Loading</h1>

    
        
    
}
  


export default UserRoutes
