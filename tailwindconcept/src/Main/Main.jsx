import { Link, Outlet } from "react-router-dom";
import Tailwind from "../Component/Tailwind";

function Main(){
    return(
        < div className="mt-1" >
        <Link to="/tailwind" className="me-4 p-1 bg-amber-500 rounded" >Tailwind</Link>
        <Link to="/form" className="bg-green-300 p-1 rounded">Form</Link>
        <Outlet></Outlet>
        </div>
    )
}
export default Main;