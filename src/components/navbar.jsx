import { Link } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = () => {


    return (<div className="mainnavbar">
        <div className="main">
           <div className="navbar">
             <p>dummyJSON</p>
            <Link to="/"> Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>

           </div>
        </div>


    </div>);
}

export default Navbar;