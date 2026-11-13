import { Link } from "react-router-dom";

function Mainpage(){
    return(
        <>
        <p>Main page</p>
        <div className="d-flex gap-2 justify-content-center">
        <Link to="/style" className="btn btn-primary">Style</Link>
        
        <Link to="/propsandusestate" className="btn btn-warning">props and usestate</Link>
        <Link to="/useeffect" className="btn btn-success">useeffect</Link>
        </div>
        </>
    )
}
export default Mainpage;