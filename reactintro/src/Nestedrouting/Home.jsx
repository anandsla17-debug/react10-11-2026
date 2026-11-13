import { useState } from "react";

function Home(){
    const[username,setusername]=useState("-");
    const[phoneno,setphone]=useState(0);
    const[clg,setclg]=useState("-");
    const[display,setdisplay]=useState({
        name:username,
        phone:phoneno,
        clgdata:clg
    });
    function view(){
        setdisplay(
            {
 name:username,
 phone:phoneno,
 clgdata:clg
            }
        );
    }
    return(
        <>
        <h1 className="text-left">home page</h1>
        <div className="container border border-primary p-3 rounded" style={{width:"300px"}}>
            <h4 className="text-center">Form</h4>
            <input onChange={(e)=>setusername(e.target.value)} className="form-control mt-1"  type="text" placeholder="Enter your name"></input>
            <input onChange={(e)=>setphone(e.target.value)} className="form-control mt-1" type="tel" placeholder="Enter your phoneno"></input>
            <input onChange={(e)=>setclg(e.target.value)} className="form-control mt-1" type="text" placeholder="Enter your clg"></input>
            <button onClick={view} className="btn btn-success mt-2 w-100">Collect</button>
        </div>

        <p>name:{display.name}</p>
        <p>phoneno:{display.phone}</p>
        <p>clg:{display.clgdata}</p>
        </>
    )
}
export default Home;