import { Link, Outlet } from "react-router-dom";
import Tailwind from "../Component/Tailwind";

function Main(){
    return(
        < div className="mt-1" >
        <Link to="/tailwind" className="me-4 p-1 bg-amber-500 rounded" >Tailwind</Link>
        <Link to="/form" className="bg-green-300 p-1 rounded">Form</Link>
        <Link to="/material" className="bg-lime-500 ms-3 p-1 rounded">Material ui</Link>
        <Outlet></Outlet>
        </div>
    )
}
export default Main;