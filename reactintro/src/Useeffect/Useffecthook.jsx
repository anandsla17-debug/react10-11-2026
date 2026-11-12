import { useEffect, useState } from "react";

function Useeffecthook(){
    const[collect,setcollect]=useState("-");

  const[alertmessage,setalertmessage]=useState("click submit btn");

  const [count,setcount]=useState(0);
  // componentdidmount=>it will only apply page loading time
    useEffect(()=>{
  console.log("page loaded");
    },[])

    //componentdidupdate=> any one update 
    useEffect(()=>{
alert(alertmessage);
    },[alertmessage])

useEffect(()=>{
console.log(" with count:"+count);
//clear=>componentwillunmount
return ()=>{
setTimeout(()=>{
setcount(0);
},10000)
}
},[count])

useEffect(()=>{
async function api(){
try {
    const response=await fetch("https://jsonplaceholder.typicode.com/posts");
    const datas=await response.json();
    console.log(datas)
} catch (error) {
    alert("api failed");
}
}
api()
},[]);
    return(
        <>
        <h1>useeffect hooks</h1>
        <input type="text" placeholder="Enter your data" onChange={(e)=>setcollect(e.target.value)}></input>
        <p>{collect}</p>
        <h1>update useeffect</h1>
        <button onClick={()=>setalertmessage("submited successfully")}>submit</button>
        <p>{count}</p>
        <button onClick={()=>setcount(count+1)}>increment</button>

        </>
    )
}
export default Useeffecthook;