import { useEffect, useState } from "react"

export default function Page (){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("https://my-burger-api.herokuapp.com/burgers",{
            method:"GET",
            headers:{
                "Content-Type":"applictaion/json"
            }
        }).then((res)=>res.json()).then(_=>setData(_)).catch(err=>console.log(err))
    },[data])
    return <div className="flex w-full min-h-screen">
        {JSON.stringify(data)??"No data"}
    </div>
}