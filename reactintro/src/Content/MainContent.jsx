import { useState } from "react";
import Content from "./Content";
import Firsts from "./First";


function MainContent(){
    const [input,useinput]=useState("");
    return(
        <>
        content
        <input onChange={(e)=>useinput(e.target.value)} type="text" placeholder="Enter your Title"></input>
        <Content.Provider value={input}>
        <Firsts></Firsts>
        </Content.Provider>
        </>
    )
}

export default MainContent;