import axios from "axios"
export const currentUser=( async (authtoken)=>{
    return await axios.post("http://localhost:8000/api/current-user",{},{              //axios is sending request to middleware having url as first argument   
        headers:{
            authtoken
        }
    } )
}    )
export const currentAdmin=async (authtoken)=>{
    // console.log(authtoken)
    return await axios.post("http://localhost:8000/api/current-admin",{},{              //axios is sending request to middleware having url as first argument   
        headers:{
            authtoken
        }
    } )
}    
//this function will check for role that is it admin or not through middleware which will be in use axios sends request to this url