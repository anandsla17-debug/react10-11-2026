import axios from "axios";
import { useState } from "react";

function Deletes(){
    const[id,setid]=useState("");
    
    async function deleteapi(){
        try {
            const response=await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const output=await response.data;
            console.log(output);
            if( typeof output=="object"){
                alert("deleted successfull");
            }
           
            
        } catch (error) {
            alert("backend is not connected")
        }
    }
    return(
        <>
        delete
        <div className="container border border-danger rounded p-3"  style={{width:"300px"}}>
            <p className="text-center">Delete form</p>
            <label className="form-label">Id</label>
            <input onChange={(e)=>setid(e.target.value)} className="form-control" type="number" placeholder="Enter your id"></input>
            <button onClick={deleteapi} className="btn btn-danger w-100">Delete</button>

        </div>
        </>
    )
}
export default Deletes;