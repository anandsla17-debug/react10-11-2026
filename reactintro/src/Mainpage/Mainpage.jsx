import { Link, Outlet } from "react-router-dom";

function Mainpage(){
    return(
        <>
        <p>Main page</p>
        <div className="d-flex gap-2 justify-content-center">
        <Link to="/style" className="btn btn-primary">Style</Link>
        
        <Link to="/propsandusestate" className="btn btn-warning">props and usestate</Link>
        <Link to="/useeffect" className="btn btn-success">useeffect</Link>
        <Link to="/home" className="btn btn-secondary">Home</Link>
        <Link to="/about" className="btn btn-dark">about</Link>
        <Link to="/contact" className="btn btn-success">contact</Link>
        </div>
        <Outlet></Outlet>  {/* display */}
        </>
    )
}
export default Mainpage;