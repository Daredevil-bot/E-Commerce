import axios from 'axios'

export const getSubs=async ()=>{
    return await axios.get("http://localhost:8000/api/subs")

}
export const getSub=async (slug)=>{
    console.log('inaxi')
    return await axios.get(`http://localhost:8000/api/sub/${slug}`)

}
export const deleteSub=async(slug,authtoken )=>{
    return await axios.delete(`http://localhost:8000/api/sub/${slug}`,{headers:{authtoken}})


}
export const createSub=( async (sub,authtoken)=>{
    console.log('hey')
    return await axios.post("http://localhost:8000/api/sub",sub,{              //axios is sending request to middleware having url as first argument   
        headers:{
            authtoken
        }
    })
})



export const updateSub=async(slug,sub,authtoken)=>{
   
    return await axios.put(`http://localhost:8000/api/sub/${slug}`,sub,{headers:{authtoken}})

}