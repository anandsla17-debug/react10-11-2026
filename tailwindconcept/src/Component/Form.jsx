function Form(){
    return(
        <>
        <p className="bg-blue-300 p-2 text-4xl font-semibold text-center mt-1 ">Student Page</p>

        <div className="flex flex-col  gap-2    items-center  mt-3  border-2 border-amber-500 p-3 mx-45 rounded"  >
           
            <p className="text-center text-2xl">Student Register</p>
            <input type="text" className="border rounded p-1" placeholder="Enter your name"></input>
            <input type="number" className="border rounded p-1" placeholder="Enter your age"></input>
            <input type="text" className="border rounded p-1" placeholder="Enter your clg"></input> 
            <button className="bg-green-600 p-2 rounded w-48 ">Register</button>
            
        </div>
        </>
    )
}
export default Form;