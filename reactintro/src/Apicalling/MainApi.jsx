import { Link, Outlet } from "react-router-dom";

function Mainapi(){
    return(
        <>
        <div className="d-flex justify-content-between">
        <h2>Axios concept</h2>
           <Link to="/" className="btn btn-danger">Logout</Link>
        </div>
     
        <div className="d-flex justify-content-center gap-5">
            <Link to="/mainapi/post" className="btn btn-primary">Post</Link>
            <Link className="btn btn-secondary">Put</Link>
            <Link  to="/mainapi/get"  className="btn btn-success">Get</Link>
            <Link className="btn btn-danger">Delete</Link>
        </div>
        <Outlet></Outlet>
        </>
    )
}
export default Mainapi;