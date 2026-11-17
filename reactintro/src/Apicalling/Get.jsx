import axios from "axios";
import { useEffect, useState } from "react";

function Get(){

    const[display,setdisplay]=useState([]);
useEffect(()=>{
async function Getapi(){
    try {
        const response=await axios.get("https://jsonplaceholder.typicode.com/posts");
        const  info=await response.data;
        console.log(info)
        setdisplay(info);
    } catch (error) {
        alert("api failed");
    }
}
Getapi();
},[])

    return(
        <>
        <p>Get api</p>
        <table className="table border container border-primary table-bordered w-75">
            <thead>
                <tr>
                    <th>User id</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>content</th>
                </tr>
            </thead>
            <tbody>
                {
                    display.map((view,index)=>(
                        <tr key={index}>
                            
                            <td>{view.userId}</td>
                            <td>{view.id}</td>
                            <td>{view.title}</td>
                            <td>{view.body}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
    )
}
export default Get;