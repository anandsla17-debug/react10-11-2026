import { useContext, useState } from "react";
import Third from "./Third";
import Content from "./Content";
import { data } from "react-router-dom";

function Second(){
    const info=useContext(Content);
    const [name,setname]=useState("");
    const[age,setage]=useState("");
    return(
        <>
       <p>second</p> 
       <input onChange={(e)=>setname(e.target.value)} type="text" placeholder="Enter your name"></input>
       <br></br>
       <input onChange={(e)=>setage(e.target.value)} type="number" placeholder="Enter your age"></input>
       
       <p>{info}</p>
       <Content.Provider value={{info,name,age}}>
        <Third></Third>
       </Content.Provider>
      
        </>
    )
}
export default Second;