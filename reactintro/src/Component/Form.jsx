import { useState } from "react";
import First from "./First";


function Form(){
    const data="pen,penicle,scale";
    const course={
        c1:"python",
        c2:"java",
        c3:"c#"
    }

    const[inputs,setinput]=useState("no input");
    const[output,setoutput]=useState("");

    const[name,setname]=useState("no");
    const[age,setage]=useState("no");
    const[result,setresult]=useState({
        name:"-",age:"-"
    });
    return(
        <>
        <input type="text" placeholder="Enter your data" onChange={(e)=>setinput(e.target.value)}></input>
        <button onClick={()=>{setoutput(inputs)}}>search</button>
        <p>{output}</p>
        <First info={{datas:data,course1:course.c1,course2:course.c2,course3:course.c3,outputs:output}}>
            <h2>Student Courses</h2>
        </First>
    
    <input type="text" placeholder="Enter your name" onChange={(e)=>setname(e.target.value)}></input>
    <br></br>
    <input type="number" placeholder="Enter your age" onChange={(e)=>setage(e.target.value)}></input>
    <br></br>
    <button onClick={()=>{setresult({name,age})}}>collect</button>
       <p>name:{result.name},age:{result.age}</p>
        </>
    )
}

export default Form;