import First from "./First";


function Form(){
    const data="pen,penicle,scale";
    return(
        <>
        <input type="text" placeholder="Enter your data"></input>
        <button>search</button>
        <First info={data}></First>
       
        </>
    )
}

export default Form;