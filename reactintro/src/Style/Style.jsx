import "./Style.css";
function Style(){
    //internal style
    const btn={
 backgroundColor:"yellow",
 padding:"10px"
 ,borderRadius:"10px",
 color:"lightblue",
 cursor:"pointer"
 
    }
    return(
        <>
        <p style={{backgroundColor:"bisque", color:"blue"}}>welcome student=inline style </p>
        <button style={btn}>Click</button>
        <p className="box">box</p>
        <ol id="li-tag">
            <li>apple</li>
            <li>mango</li>
            <li>orange</li>
        </ol>
        <input type="text" className="text-success" placeholder="Enter your data"/>
        <button className="btn btn-primary ms-1">search</button>
        </>

    )
}
export default Style;