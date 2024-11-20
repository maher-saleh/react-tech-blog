import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="title">Tech Blog</h1>
            <div className="links">
                <NavLink  to="/blogs" activeClassName="active-link">Blogs</NavLink>
                <NavLink  to="/create" activeClassName="active-link">New Blog</NavLink>
                <NavLink  to="/" activeClassName="active-link">About</NavLink>
            </div>
        </nav>
    );
}
 
export default Navbar;