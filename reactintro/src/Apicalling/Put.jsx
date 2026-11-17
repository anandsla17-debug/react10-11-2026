import axios from "axios";
import { useState } from "react";

function Put(){
const[id,setid]=useState("");
const[name,setname]=useState("");
const[age,setage]=useState("");
const[clg,setclg]=useState("");
const[output,setoutput]=useState({});//object
const putapi=async()=>{
    const updates={
        name,
        age,
        clg
    }
    try {
        const response=await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,updates);
        const updatedata=await response.data;
        console.log(updatedata);
        setoutput(updatedata);
    } catch (error) {
        alert("backend is not connected");
    }
}
    return(
        <>
        <p>put api</p>
        <div className="container border border-warning rounded p-3" style={{width:"300px"}}>
            <p className="text-center h4">update form</p>
            <input onChange={(e)=>setid(e.target.value)} className="form-control mt-2" type="number" placeholder="Enter your id"></input>
            <input onChange={(e)=>setname(e.target.value)} className="form-control mt-2" type="text" placeholder="Enter your name"></input>
<input onChange={(e)=>setage(e.target.value)} className="form-control mt-2" type="number" placeholder="Enter your age"></input>
<input onChange={(e)=>setclg(e.target.value)} className="form-control mt-2" type="text" placeholder="Enter your clg"></input>    
<button onClick={putapi} className="btn btn-warning w-100 mt-2">update</button> 
     </div>
     <p>id:{output.id}</p>
     <p>name:{output.name}</p>
     <p>age:{output.age}</p>
     <p>clg:{output.clg}</p>
        </>
    )
}
export default Put;