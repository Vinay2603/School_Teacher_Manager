import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
const axios = require('axios');
   

export const SingleTeacher =()=>{
    const [Details ,setDetails] = useState([])
    const {id} = useParams()

    const SingleTeacher=(id)=>{
        axios.get(`http://localhost:1234/teacher/${id}`)
    .then(function (response) {
    // handle success
    console.log("details",response.data);
    setDetails(response.data)
})
.catch(function (error) {
// handle error
  console.log(error);
}) 
    }

    useEffect(()=>{
        SingleTeacher(id) 
    },[])

    return(
        <div>
          <Link to={"/list"}><button>Home</button></Link> 
           {
               Details.map((el)=>(
                   <div>
                       <h1>Name: {el.Name}</h1>
                       <h3>Age: {el.Age}</h3>
                       <h3>Gender:{el.Gender}</h3>
                       <h3>classes</h3>
                       {el.classes.map((e,i)=>(
                           <div key={e._id} style={{padding:"2%",display:"flex",justifyContent:"space-evenly", border: "1px solid black" ,width:"800px",marginLeft:"auto",marginRight:"auto",marginTop:"20px"}} >
                               <div>Grade: {e.Grade}</div>
                               <div> Section: {e.Section}</div>
                               <div>Subject: {e.Subject}</div>
                           </div>
                       ))}
                   </div>
               ))
           }
            
        </div>
    )
}