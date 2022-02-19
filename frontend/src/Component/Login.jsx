import { useState } from "react"
import { useNavigate } from "react-router-dom"


export  const Login =()=>{
    
    const navigate = useNavigate()

     const [user,setUser] = useState("")
     const [pass ,setPass] = useState("")
     
     const handleSubmit=()=>{
         if(user ==="admin" && pass === "admin"){
               navigate("/list")
         }else{
              alert("login failed")
         }
     }

    return(
        <div style={{marginTop: "50px"}}>
            <h1>LOGIN</h1>
        <lable>Username:</lable>
        <input onChange={(e)=>setUser(e.target.value)} placeholder="enter username"/>
        <br/>
        <lable>password:</lable>
        <input onChange={(e)=>setPass(e.target.value)} placeholder="enter password"/>
        <br/>
        <button  onClick={handleSubmit}>Submit</button>
        </div>
    )
}