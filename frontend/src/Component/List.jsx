import { useEffect, useState } from "react";
import "./List.css"
import { Link } from "react-router-dom";
const axios = require('axios');

export const List =()=>{

const [teacher,setTeacher] = useState([])
const [text,setText] = useState("")
const [totalPage,setTotalPage] = useState(0)


const [page,setPage] = useState(1)

//console.log("teacher",teacher)

const items =[...Array(totalPage).keys()]
console.log(items)


const handleSearch=(text)=>{
    axios.get(`http://localhost:1234/teacher/name/${text}`)
    .then(function (response) {
    // handle success
  
    console.log("name",response.data.teacher);
    setTeacher(response.data)
    setTotalPage(response.data.totalPages)
})
.catch(function (error) {
// handle error
  console.log(error);
})
}

const handleMale =()=>{
    axios.get('http://localhost:1234/teacher/male')
    .then(function (response) {
    // handle success
    //console.log("male",response.data);
    setTeacher(response.data)
})
.catch(function (error) {
// handle error
  console.log(error);
})
}

const handleFemale =()=>{
    axios.get('http://localhost:1234/teacher/female')
    .then(function (response) {
    // handle success
   // console.log("female",response.data);
    setTeacher(response.data)
})
.catch(function (error) {
// handle error
  console.log(error);
})
}

const handleSort=()=>{
    axios.get(`http://localhost:1234/teacher/sort?page=1&size=7`)
    .then(function (response) {
    // handle success
    //console.log("sort",response.data);
    setTeacher(response.data.teacher)
    setTotalPage(response.data.totalPages)
})
.catch(function (error) {
// handle error
  console.log(error);
})
}

const getTeacher=()=>{
        axios.get(`http://localhost:1234/teacher?page=${page}&size=3`)
            .then(function (response) {
            // handle success
           
           // console.log(response.data.teacher ,response.data.totalPages );
            setTeacher(response.data.teacher)
            setTotalPage(response.data.totalPages)
        })
        .catch(function (error) {
        // handle error
          console.log(error);
        })
    }
useEffect(()=>{
    getTeacher()
   // handleSort()
},[page])
    return(
        <div className="listouter">
             <div style={{marginTop:"30px"}}>
                <input placeholder="Enter Teacher name" id="search" onChange={(e)=>{setText(e.target.value)}}/>
                <button
                onClick={()=>{
                    handleSearch(text)
                    document.getElementById("search").value =""
                   
                    }} >Search</button>
            </div>
            <div>
                    <button onClick={handleMale}>filter for male</button>
                    <button onClick={handleFemale} >filter for female</button>
                    <button onClick={handleSort}>sort by Age</button>
         </div>
         { teacher.map((el)=>
    <Link to={`/singleTeacher/${el._id}` }  style={{textDecoration:"none",color:"black"}}>
      <div key={el._id} className="box">
          <h1>{el.Name}</h1>
          <h3>{el.Gender}</h3>
          <h3>{el.Age}</h3>
          <div style={{fontSize:"20px"}}>Class : {el.classes.length}</div>
      </div>
    </Link>
         )}

         <div className="pagebox">
         <span>No.of Pages:   </span>
          {items?.map((el)=>(
              
             
              <button onClick={()=>{setPage(el+1)}} >{el+1}</button>
              
          ))}  
         </div>
       


        </div>
    )
}