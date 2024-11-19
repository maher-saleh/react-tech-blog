import { useParams, useLocation } from "react-router-dom";
import Footer from "./Footer";

const BlogDetails = () => {

    const { id } = useParams();
    const location = useLocation();
    const { blog } = location.state || {};

    return (
        <div className="blog-details">
            <div className="blog">
                <h2>{ blog.title }</h2>
                <div className="blog-body">
                    <p>{ blog.body }</p>
                </div>
                <small>Written by: { blog.author }</small>
            </div>
            <Footer/>
        </div>
    );
}
 
export default BlogDetails;