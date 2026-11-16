import { useState } from "react";
import axios from "axios";
function Post(){
const [name,setname]=useState("");
const[age,setage]=useState("");
const[clg,setclg]=useState("");
const[output,setoutput]=useState({});
async function storeapi(){
    const inputdata={
        name,age,clg
    }
    try {
        const response= await axios.post("https://jsonplaceholder.typicode.com/posts",inputdata);
        console.log(response);// all=>data ,header,config,status code ...
        const info= await response.data; // 
        console.log(info);
        setoutput(info);// api to use assign
    } catch (error) {
        alert("api failed");
        
    }
}
    return(
        <>
        <div className="container p-3 border mt-2 rounded border-primary" style={{width:"300px"}}>
            <p className="text-center">Post Form</p>
            <input onChange={(e)=>setname(e.target.value)} className="form-control mt-2" placeholder="Enter username"></input>
            <input onChange={(e)=>setage(e.target.value)} className="form-control mt-2" placeholder="Enter age"></input>
            <input onChange={(e)=>setclg(e.target.value)} className="form-control mt-2" placeholder="Enter clg"></input>
            <button onClick={storeapi} className="btn btn-success mt-2 w-100">Store</button>
        
        </div>
     <p>result:id {output.id},name {output.name},age:{output.age},clg:{output.clg}</p>
        </>
    )
}
export default Post;