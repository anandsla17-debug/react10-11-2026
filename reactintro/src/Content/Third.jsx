import { useContext } from "react";
import Content from "./Content";

function Third(){
    const data=useContext(Content);
    return(
        <>
      <p>third</p>  
      <p>{data.info}</p>
      <p>{data.name}</p>
      <p>{data.age}</p>
        </>
    )
}
export default Third;